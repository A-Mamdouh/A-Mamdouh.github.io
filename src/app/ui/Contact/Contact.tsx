"use client";
import {
    TbBrandGithub as GithubIcon,
    TbBrandLinkedin as LinkedinIcon,
    TbDownload as DownloadIcon,
    TbMail as EmailIcon,
} from "react-icons/tb";
import Section from "@/app/ui/kit/Section";
import Button from "@/app/ui/kit/Button";
import { achievements, languages, links, person } from "@/app/data/content";
import { SectionId } from "@/app/types";

type Props = { onIntersect?: (ratio: number | undefined) => void };

const Contact = ({ onIntersect }: Readonly<Props>) => {
    const id: SectionId = "contact";
    return (
        <Section
            id={id}
            eyebrow="06 / Contact"
            title="Let's talk"
            description="I’m actively interviewing for modern C++ roles in Germany, with additional interest in AI / ML and broader software development opportunities. Email is the fastest way to reach me."
            onIntersect={onIntersect}
        >
            <div className="flex flex-wrap items-center gap-3">
                <Button href={links.email} variant="primary" icon={<EmailIcon />}>
                    {person.email}
                </Button>
                <Button href={links.linkedin} external icon={<LinkedinIcon />}>
                    LinkedIn
                </Button>
                <Button href={links.github} external icon={<GithubIcon />}>
                    GitHub
                </Button>
                <Button href={links.resume} download="Ahmed-Mamdouh-Resume.pdf" icon={<DownloadIcon />}>
                    Résumé
                </Button>
            </div>

            <div className="mt-14 grid grid-cols-1 gap-8 border-t border-hairline pt-10 sm:grid-cols-2">
                <div>
                    <p className="eyebrow mb-3">Languages</p>
                    <ul className="max-w-56 space-y-1.5 text-sm">
                        {languages.map((lang) => (
                            <li key={lang.name} className="flex justify-between">
                                <span>{lang.name}</span>
                                <span className="text-muted">{lang.level}</span>
                            </li>
                        ))}
                    </ul>
                </div>
                <div>
                    <p className="eyebrow mb-3">Achievements</p>
                    <ul className="text-muted space-y-1.5 text-sm">
                        {achievements.map((item) => (
                            <li key={item}>{item}</li>
                        ))}
                    </ul>
                </div>
            </div>

            <p className="text-muted mt-16 font-mono text-xs">
                © {new Date().getFullYear()} {person.name}. Built with Next.js, deployed on GitHub Pages.
            </p>
        </Section>
    );
};

export default Contact;
