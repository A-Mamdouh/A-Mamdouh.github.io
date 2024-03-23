export default ({href, alt, className}: Readonly<{href: string, alt?: string, className?: string}>) => (
    <svg className={`w-full h-full p-0 m-0 ${className}`}>
      <title>{alt || ""}</title>
      <use href={`${href}`} className="w-full h-full p-0 m-0"/>
    </svg>
);