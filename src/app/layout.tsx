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
    "C++ Software Developer in Nürnberg, Germany, with an M.Sc. in Artificial Intelligence and experience in enterprise software, computer vision, and performance.";

export const metadata: Metadata = {
    metadataBase: new URL(siteUrl),
    title: {
        default: `${person.name} — ${person.headline}`,
        template: `%s — ${person.name}`,
    },
    description,
    keywords: [
        "Ahmed Mamdouh",
        "C++ Software Developer",
        "C++ Software Developer Germany",
        "modern C++",
        "C++17",
        "C++20",
        "systems programming",
        "computer graphics",
        "computer vision",
        "performance engineering",
    ],
    authors: [{ name: person.name, url: siteUrl }],
    creator: person.name,
    alternates: { canonical: "/" },
    openGraph: {
        type: "website",
        url: siteUrl,
        title: `${person.name} — ${person.headline}`,
        description,
        siteName: person.name,
        locale: "en_US",
    },
    twitter: {
        card: "summary_large_image",
        title: `${person.name} — ${person.headline}`,
        description,
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
        addressLocality: "Nürnberg",
        addressRegion: "Bavaria",
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
