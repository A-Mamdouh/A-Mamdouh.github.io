#!/usr/bin/env python3
# /// script
# requires-python = ">=3.10"
# dependencies = ["reportlab>=4.4,<5"]
# ///
"""Generate the one-page resume published at public/resume.pdf.

Run with: uv run scripts/generate_resume.py
"""

from __future__ import annotations

from pathlib import Path

from reportlab.lib.colors import HexColor
from reportlab.lib.pagesizes import A4
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.pdfgen import canvas


ROOT = Path(__file__).resolve().parents[1]
OUTPUT = ROOT / "public" / "resume.pdf"

PAGE_WIDTH, PAGE_HEIGHT = A4
LEFT = 44.0
RIGHT = PAGE_WIDTH - 44.0
CONTENT_WIDTH = RIGHT - LEFT

NAVY = HexColor("#1D3A57")
ACCENT = HexColor("#08789E")
TEXT = HexColor("#182532")
MUTED = HexColor("#526A80")
RULE = HexColor("#AFC5D3")

BODY_SIZE = 8.25
BODY_LEADING = 10.1


def register_fonts() -> tuple[str, str]:
    candidates = [
        (
            Path("/System/Library/Fonts/Supplemental/Arial.ttf"),
            Path("/System/Library/Fonts/Supplemental/Arial Bold.ttf"),
        ),
        (Path("/Library/Fonts/Arial.ttf"), Path("/Library/Fonts/Arial Bold.ttf")),
    ]
    for regular_path, bold_path in candidates:
        if regular_path.exists() and bold_path.exists():
            pdfmetrics.registerFont(TTFont("ResumeArial", str(regular_path)))
            pdfmetrics.registerFont(TTFont("ResumeArial-Bold", str(bold_path)))
            return "ResumeArial", "ResumeArial-Bold"
    return "Helvetica", "Helvetica-Bold"


REGULAR, BOLD = register_fonts()


def text_width(text: str, font: str, size: float) -> float:
    return pdfmetrics.stringWidth(text, font, size)


def wrap_text(text: str, font: str, size: float, max_width: float) -> list[str]:
    words = text.split()
    if not words:
        return [""]

    lines: list[str] = []
    current = words[0]
    for word in words[1:]:
        candidate = f"{current} {word}"
        if text_width(candidate, font, size) <= max_width:
            current = candidate
        else:
            lines.append(current)
            current = word
    lines.append(current)
    return lines


def draw_wrapped(
    pdf: canvas.Canvas,
    text: str,
    x: float,
    y: float,
    *,
    font: str = REGULAR,
    size: float = BODY_SIZE,
    leading: float = BODY_LEADING,
    width: float = CONTENT_WIDTH,
    color=TEXT,
) -> float:
    pdf.setFillColor(color)
    pdf.setFont(font, size)
    lines = wrap_text(text, font, size, width)
    for line in lines:
        pdf.drawString(x, y, line)
        y -= leading
    return y


def draw_section_heading(pdf: canvas.Canvas, title: str, y: float) -> float:
    pdf.setFillColor(NAVY)
    pdf.setFont(BOLD, 10.1)
    pdf.drawString(LEFT, y, title.upper())
    pdf.setStrokeColor(RULE)
    pdf.setLineWidth(0.75)
    pdf.line(LEFT, y - 4.5, RIGHT, y - 4.5)
    return y - 14.0


def draw_bullet(pdf: canvas.Canvas, text: str, y: float) -> float:
    bullet_x = LEFT + 2.0
    text_x = LEFT + 13.0
    width = RIGHT - text_x
    lines = wrap_text(text, REGULAR, BODY_SIZE, width)

    pdf.setFillColor(TEXT)
    pdf.setFont(REGULAR, BODY_SIZE)
    pdf.drawString(bullet_x, y, "-")
    for line in lines:
        pdf.drawString(text_x, y, line)
        y -= BODY_LEADING
    return y


def draw_experience(
    pdf: canvas.Canvas,
    role: str,
    company: str,
    location: str,
    dates: str,
    bullets: list[str],
    y: float,
) -> float:
    pdf.setFillColor(TEXT)
    pdf.setFont(BOLD, 8.8)
    pdf.drawString(LEFT, y, f"{role} | {company}")
    y -= 10.4

    pdf.setFillColor(MUTED)
    pdf.setFont(REGULAR, 7.9)
    pdf.drawString(LEFT, y, f"{location} | {dates}")
    y -= 9.6

    for bullet in bullets:
        y = draw_bullet(pdf, bullet, y)
    return y - 1.6


def draw_education(
    pdf: canvas.Canvas,
    heading: str,
    details: str,
    y: float,
) -> float:
    pdf.setFillColor(TEXT)
    pdf.setFont(BOLD, 8.65)
    pdf.drawString(LEFT, y, heading)
    y -= 10.2
    y = draw_wrapped(pdf, details, LEFT, y, size=8.05, leading=9.75)
    return y - 1.6


def draw_project(
    pdf: canvas.Canvas,
    name: str,
    description: str,
    url: str,
    y: float,
) -> float:
    pdf.setFillColor(TEXT)
    pdf.setFont(BOLD, BODY_SIZE)
    pdf.drawString(LEFT, y, name)
    name_width = text_width(name, BOLD, BODY_SIZE)
    pdf.linkURL(
        url,
        (LEFT, y - 1.5, LEFT + name_width, y + BODY_SIZE + 1.0),
        relative=0,
        thickness=0,
    )

    separator = " - "
    separator_width = text_width(separator, REGULAR, BODY_SIZE)
    first_width = CONTENT_WIDTH - name_width - separator_width
    words = description.split()
    first_words: list[str] = []
    while words:
        candidate = " ".join(first_words + [words[0]])
        if text_width(candidate, REGULAR, BODY_SIZE) <= first_width:
            first_words.append(words.pop(0))
        else:
            break

    pdf.setFont(REGULAR, BODY_SIZE)
    pdf.drawString(LEFT + name_width, y, separator)
    if first_words:
        pdf.drawString(LEFT + name_width + separator_width, y, " ".join(first_words))
    y -= BODY_LEADING

    if words:
        remaining_lines = wrap_text(" ".join(words), REGULAR, BODY_SIZE, CONTENT_WIDTH)
        for line in remaining_lines:
            pdf.drawString(LEFT, y, line)
            y -= BODY_LEADING
    return y


def add_link(pdf: canvas.Canvas, label: str, url: str, x: float, y: float, size: float) -> float:
    width = text_width(label, REGULAR, size)
    pdf.drawString(x, y, label)
    pdf.linkURL(url, (x, y - 1.5, x + width, y + size + 1.0), relative=0, thickness=0)
    return x + width


def build_resume() -> None:
    OUTPUT.parent.mkdir(parents=True, exist_ok=True)
    pdf = canvas.Canvas(str(OUTPUT), pagesize=A4, pageCompression=1)
    pdf.setAuthor("Ahmed Mamdouh")
    pdf.setCreator("Ahmed Mamdouh resume")
    pdf.setTitle("Ahmed Mamdouh - Resume")
    pdf.setSubject("Software engineering resume")

    pdf.setFillColor(NAVY)
    pdf.setFont(BOLD, 25.5)
    pdf.drawString(LEFT, 793.0, "Ahmed Mamdouh")

    pdf.setFillColor(ACCENT)
    pdf.setFont(REGULAR, 9.25)
    pdf.drawString(
        LEFT,
        779.5,
        "SOFTWARE ENGINEER | BACKEND, FULL-STACK, APPLIED AI AND PERFORMANCE",
    )

    pdf.setFillColor(MUTED)
    pdf.setFont(REGULAR, 8.2)
    contact_y = 764.8
    x = add_link(pdf, "work@a-mamdouh.com", "mailto:work@a-mamdouh.com", LEFT, contact_y, 8.2)
    pdf.drawString(x, contact_y, "  |  +49 162 5317454  |  ")
    x += text_width("  |  +49 162 5317454  |  ", REGULAR, 8.2)
    x = add_link(pdf, "a-mamdouh.com", "https://a-mamdouh.com", x, contact_y, 8.2)
    pdf.drawString(x, contact_y, "  |  Nuremberg, Germany")

    y = draw_section_heading(pdf, "Professional Profile", 746.5)
    y = draw_wrapped(
        pdf,
        "Software engineer with experience across enterprise financial systems, industrial computer vision and machine learning, and customer-facing web and mobile products. Builds scalable, data-intensive software; improves latency and loading performance; modernizes legacy code and developer tooling; and works effectively from architecture discussion through implementation, testing, and delivery. M.Sc. in Artificial Intelligence with broad programming, cloud, and systems expertise.",
        LEFT,
        y,
        size=8.2,
        leading=10.0,
    )
    y -= 1.0
    y = draw_wrapped(
        pdf,
        "CORE FOCUS: BACKEND AND ENTERPRISE SYSTEMS | FULL-STACK APPLICATIONS | AI / ML | PERFORMANCE OPTIMIZATION | CI/CD AND CLOUD",
        LEFT,
        y,
        font=BOLD,
        size=8.35,
        leading=10.0,
        color=ACCENT,
    )
    y -= 4.0

    y = draw_section_heading(pdf, "Professional Experience", y)
    y = draw_experience(
        pdf,
        "Software Developer (ABAP)",
        "SAP Fioneer",
        "Walldorf, Germany",
        "2024 - Present",
        [
            "Develop parallel, scalable solutions for S/4HANA and Financial Products Subledger customers in complex enterprise environments.",
            "Use ABAP SQL and data-oriented design to implement high-performance queries and processing for financial applications.",
            "Contribute through design discussions, pair programming, reviews, presentations, and modernization of internal developer and quality tooling.",
        ],
        y,
    )
    y = draw_experience(
        pdf,
        "Working Student Developer - Computer Vision / Machine Learning",
        "Primetals Technologies",
        "Erlangen, Germany",
        "2023 - 2024",
        [
            "Built and fine-tuned computer-vision models and robust pipelines for AI-assisted steel-mill applications.",
            "Reduced an existing solution's latency from about 1,000 ms to 2 ms - a 500x speedup - enabling real-time use.",
            "Extended reusable internal tooling and engineered efficient components for future industrial AI projects.",
        ],
        y,
    )
    y = draw_experience(
        pdf,
        "Junior Software Developer",
        "Sequel Solutions",
        "Cairo, Egypt",
        "2020 - 2021",
        [
            "Delivered web and mobile features for a vacation-booking platform using JavaScript, React Native, Firebase, Docker, and AWS.",
            "Modernized legacy code for 30% faster loading, added backend promotion caching, and achieved a perfect Lighthouse score on a frontend application.",
        ],
        y,
    )
    y -= 1.0

    y = draw_section_heading(pdf, "Education", y)
    y = draw_education(
        pdf,
        "M.Sc. Artificial Intelligence | FAU Erlangen-Nuremberg | Grade: 1.9 | 2022 - 2025",
        "Deep learning, computer vision, NLP, generative AI, information visualization, and high-performance computing. Teaching Assistant for Artificial Intelligence II.",
        y,
    )
    y = draw_education(
        pdf,
        "B.Sc. Computer Science and Engineering | German University in Cairo | Grade: 1.9 | 2016 - 2021",
        "Software engineering, algorithms and data structures, DevOps, embedded systems, data engineering, cyber-physical systems, and AI. Student researcher and autonomous smart-lab team lead.",
        y,
    )
    y -= 1.0

    y = draw_section_heading(pdf, "Selected Engineering Projects", y)
    projects = [
        (
            "Distributed Swarm Simulation",
            "Built a Fast DDS demo with four typed topics across independent C++ processes, using recipient-filtered observations, IDL-generated message types, and dynamic process discovery.",
            "https://github.com/A-Mamdouh/distributed-swarm-simulation",
        ),
        (
            "Askier",
            "Cross-platform real-time ASCII rendering application using C++, Qt 6, OpenCV, OpenCL, and TBB, with modular image-processing and parallel-compute components.",
            "https://github.com/a-h-i/askier",
        ),
        (
            "Investors Portal",
            "Implemented policy-driven fee calculations and PDF contract generation, reducing manual work for investors and operations teams.",
            "https://github.com/A-Mamdouh/Sumerge-Investors-Portal",
        ),
        (
            "Eden / NoClip",
            "C++ graphics-engine project focused on software architecture, performance, and developer-friendly interfaces.",
            "https://github.com/A-Mamdouh/eden",
        ),
        (
            "MIPS Processor",
            "Python implementation with an assembly-to-machine-code parser and simulations of registers, control logic, ALU, and memory.",
            "https://github.com/A-Mamdouh/MIPS-Simulator",
        ),
    ]
    for name, description, url in projects:
        y = draw_project(pdf, name, description, url, y)
    y -= 3.0

    y = draw_section_heading(pdf, "Technical Skills", y)
    skill_lines = [
        "Programming: Python, C++, Java, TypeScript, SQL, C",
        "Web and backend: React, React Native, Next.js, Django, FastAPI, REST APIs, AWS",
        "Engineering and platforms: parallel systems, performance profiling, automated testing, CI/CD, Docker, Linux, Git, CMake, Vulkan",
        "AI and data: PyTorch, TensorFlow, Keras, OpenCV, CUDA, NumPy, MLflow, computer vision, deep learning, NLP, generative AI, RAG, LangChain, LangGraph",
        "Languages: Arabic (native), English (fluent), German (beginner)",
    ]
    for line in skill_lines:
        y = draw_wrapped(pdf, line, LEFT, y, size=8.05, leading=9.65)
    y -= 3.0

    y = draw_section_heading(pdf, "Selected Achievements", y)
    y = draw_wrapped(
        pdf,
        "ACM-ICPC regional competition (2016 - 2018) | Catalyst Coding Competition (2019) | Google Code Jam (2020) | Google Foobar (2023)",
        LEFT,
        y,
        size=8.15,
        leading=9.8,
    )

    if y < 42.0:
        raise RuntimeError(f"Resume overflowed the page: final baseline {y:.1f} pt")

    pdf.showPage()
    pdf.save()
    print(f"Wrote {OUTPUT} (final baseline: {y:.1f} pt)")


if __name__ == "__main__":
    build_resume()
