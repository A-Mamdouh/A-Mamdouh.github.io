import type { Metadata } from "next";
import { IBM_Plex_Mono, Inter } from "next/font/google";
import { links, person } from "@/app/data/content";
import "./globals.css";

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
    display: "swap",
});

const plexMono = IBM_Plex_Mono({
    subsets: ["latin"],
    weight: ["400", "500", "600"],
    variable: "--font-plex-mono",
    display: "swap",
});

const siteUrl = "https://a-mamdouh.com";
const description =
    "Applied AI & Software Engineer in Bavaria, Germany. I build reliable AI-powered products, high-performance ML systems and scalable software — from computer vision and RAG to production performance engineering.";

export const metadata: Metadata = {
    metadataBase: new URL(siteUrl),
    title: {
        default: `${person.name} — ${person.headline}`,
        template: `%s — ${person.name}`,
    },
    description,
    keywords: [
        "Ahmed Mamdouh",
        "Applied AI Engineer",
        "Agentic AI Engineer",
        "Machine Learning Engineer",
        "AI Software Engineer Germany",
        "Full-stack AI Engineer",
        "Computer Vision Engineer",
        "RAG engineer",
    ],
    authors: [{ name: person.name, url: siteUrl }],
    creator: person.name,
    alternates: { canonical: "/" },
    openGraph: {
        type: "website",
        url: siteUrl,
        title: `${person.name} — ${person.headline}`,
        description: person.supportingLine,
        siteName: person.name,
        locale: "en_US",
    },
    twitter: {
        card: "summary_large_image",
        title: `${person.name} — ${person.headline}`,
        description: person.supportingLine,
    },
};

const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: person.name,
    jobTitle: person.headline,
    description: person.supportingLine,
    url: siteUrl,
    email: person.email,
    address: {
        "@type": "PostalAddress",
        addressLocality: "Bavaria",
        addressCountry: "DE",
    },
    sameAs: [links.linkedin, links.github],
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" data-scroll-behavior="smooth" className={`${inter.variable} ${plexMono.variable}`}>
            <body>
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
                />
                <a href="#main" className="skip-link">
                    Skip to content
                </a>
                {children}
            </body>
        </html>
    );
}
