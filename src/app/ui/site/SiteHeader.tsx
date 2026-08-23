"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
    TbBrandGithub as GithubIcon,
    TbBrandLinkedin as LinkedinIcon,
    TbDownload as DownloadIcon,
    TbMail as EmailIcon,
    TbMenu2 as MenuIcon,
    TbMoon as DarkModeIcon,
    TbSun as LightModeIcon,
    TbSunMoon as SystemIcon,
    TbX as CloseIcon,
} from "react-icons/tb";
import { IconType } from "react-icons";
import useTheme from "@/app/hooks/useTheme";
import Button from "@/app/ui/kit/Button";
import { links, person } from "@/app/data/content";
import { SectionId, Theme } from "@/app/types";

type NavItem =
    | { kind: "anchor"; id: SectionId; label: string }
    | { kind: "page"; href: string; label: string };

const NAV_ITEMS: NavItem[] = [
    { kind: "anchor", id: "about", label: "About" },
    { kind: "anchor", id: "projects", label: "Projects" },
    { kind: "anchor", id: "experience", label: "Experience" },
    { kind: "anchor", id: "skills", label: "Skills" },
    { kind: "anchor", id: "education", label: "Education" },
    { kind: "anchor", id: "contact", label: "Contact" },
    { kind: "page", href: "/projects", label: "Archive" },
];

const THEME_ICON: Record<Theme, IconType> = {
    [Theme.dark]: DarkModeIcon,
    [Theme.light]: LightModeIcon,
    [Theme.system]: SystemIcon,
};

const THEME_LABEL: Record<Theme, string> = {
    [Theme.dark]: "dark",
    [Theme.light]: "light",
    [Theme.system]: "system",
};

const THEME_CYCLE: Record<Theme, Theme> = {
    [Theme.dark]: Theme.light,
    [Theme.light]: Theme.system,
    [Theme.system]: Theme.dark,
};

const ThemeToggle = () => {
    const [theme, setTheme] = useTheme();
    const Icon = THEME_ICON[theme];
    return (
        <button
            type="button"
            onClick={() => setTheme(THEME_CYCLE[theme])}
            title={`Switch theme (currently ${THEME_LABEL[theme]})`}
            aria-label={`Switch theme, currently ${THEME_LABEL[theme]}`}
            className="icon-small outline-icon rounded-full p-2 transition-colors hover:bg-surface"
        >
            <Icon />
        </button>
    );
};

const SocialLink = ({
    href,
    Icon,
    label,
}: Readonly<{ href: string; Icon: IconType; label: string }>) => (
    <a
        href={href}
        aria-label={label}
        title={label}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel={href.startsWith("http") ? "noreferrer" : undefined}
        className="icon-small outline-icon rounded-full p-2 transition-colors hover:bg-surface"
    >
        <Icon />
    </a>
);

type SiteHeaderProps = {
    /** Whether the fixed bar is shown. The homepage drives this from scroll position; other pages just pass true. */
    visible: boolean;
    activeSection?: SectionId;
};

const SiteHeader = ({ visible, activeSection }: Readonly<SiteHeaderProps>) => {
    const pathname = usePathname();
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        document.body.style.overflow = menuOpen ? "hidden" : "";
        return () => {
            document.body.style.overflow = "";
        };
    }, [menuOpen]);

    useEffect(() => {
        if (!menuOpen) return;
        const onKeyDown = (event: KeyboardEvent) => {
            if (event.key === "Escape") setMenuOpen(false);
        };
        window.addEventListener("keydown", onKeyDown);
        return () => window.removeEventListener("keydown", onKeyDown);
    }, [menuOpen]);

    const isActive = (item: NavItem) =>
        item.kind === "anchor" ? activeSection === item.id : pathname === item.href;
    const hrefFor = (item: NavItem) => (item.kind === "anchor" ? `/#${item.id}` : item.href);

    return (
        <>
            <header
                className={`fixed inset-x-0 top-0 z-40 border-b bg-[var(--bg)] transition-transform duration-300 ${
                    visible ? "translate-y-0 border-hairline" : "-translate-y-full border-transparent"
                }`}
            >
                <div className="mx-auto flex max-w-content items-center justify-between px-6 py-4 md:px-10">
                    <Link href="/#top" className="font-mono text-sm font-semibold">
                        {person.name}
                    </Link>
                    <nav className="hidden items-center gap-5 lg:flex">
                        {NAV_ITEMS.map((item) => (
                            <a
                                key={item.label}
                                href={hrefFor(item)}
                                className={`font-mono text-xs uppercase tracking-wide transition-colors ${
                                    isActive(item) ? "text-accent" : "text-muted hover:text-[var(--text)]"
                                }`}
                            >
                                {item.label}
                            </a>
                        ))}
                    </nav>
                    <div className="flex items-center gap-1 md:gap-2">
                        <ThemeToggle />
                        <Button
                            href={links.resume}
                            download="Ahmed-Mamdouh-Resume.pdf"
                            className="hidden lg:inline-flex"
                            icon={<DownloadIcon />}
                        >
                            Résumé
                        </Button>
                        <button
                            type="button"
                            onClick={() => setMenuOpen(true)}
                            aria-label="Open menu"
                            className="icon-small outline-icon rounded-full p-2 hover:bg-surface lg:hidden"
                        >
                            <MenuIcon />
                        </button>
                    </div>
                </div>
            </header>

            {menuOpen && (
                <div className="fixed inset-0 z-50 flex flex-col bg-[var(--bg)] px-6 py-4">
                    <div className="flex items-center justify-between">
                        <span className="font-mono text-sm font-semibold">{person.name}</span>
                        <button
                            type="button"
                            onClick={() => setMenuOpen(false)}
                            aria-label="Close menu"
                            className="icon-small outline-icon rounded-full p-2 hover:bg-surface"
                        >
                            <CloseIcon />
                        </button>
                    </div>
                    <nav className="flex flex-1 flex-col items-start justify-center gap-5">
                        {NAV_ITEMS.map((item) => (
                            <a
                                key={item.label}
                                href={hrefFor(item)}
                                onClick={() => setMenuOpen(false)}
                                className="text-4xl font-semibold tracking-tight"
                            >
                                {item.label}
                            </a>
                        ))}
                    </nav>
                    <div className="flex items-center justify-between border-t border-hairline pb-2 pt-6">
                        <div className="flex gap-2">
                            <SocialLink href={links.email} Icon={EmailIcon} label="Email Ahmed" />
                            <SocialLink href={links.linkedin} Icon={LinkedinIcon} label="LinkedIn profile" />
                            <SocialLink href={links.github} Icon={GithubIcon} label="GitHub profile" />
                        </div>
                        <Button href={links.resume} download="Ahmed-Mamdouh-Resume.pdf" icon={<DownloadIcon />}>
                            Résumé
                        </Button>
                    </div>
                </div>
            )}
        </>
    );
};

export default SiteHeader;
