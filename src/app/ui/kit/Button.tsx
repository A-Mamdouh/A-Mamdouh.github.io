import { ReactNode } from "react";

type ButtonProps = {
    href: string;
    children: ReactNode;
    variant?: "primary" | "secondary";
    icon?: ReactNode;
    download?: string | boolean;
    external?: boolean;
    className?: string;
};

const Button = ({
    href,
    children,
    variant = "secondary",
    icon,
    download,
    external,
    className,
}: Readonly<ButtonProps>) => {
    const base =
        "inline-flex items-center gap-2 rounded-full px-5 py-2.5 font-mono text-sm font-medium transition-colors duration-200";
    const styles =
        variant === "primary"
            ? "bg-[var(--accent)] text-[var(--bg)] hover:opacity-90"
            : "border border-hairline hover:bg-surface";

    return (
        <a
            href={href}
            className={`${base} ${styles} ${className ?? ""}`}
            download={download}
            target={external ? "_blank" : undefined}
            rel={external ? "noreferrer" : undefined}
        >
            {icon}
            {children}
        </a>
    );
};

export default Button;
