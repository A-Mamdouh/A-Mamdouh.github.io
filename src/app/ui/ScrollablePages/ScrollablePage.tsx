import type { ReactNode } from "react";

type PropType = React.PropsWithChildren<{className?: string, children?: ReactNode}>;

export default ({children, className}: PropType) => {
    return (
        <div className={`p-5 h-lvh w-full flex flex-col items-center ${className}`}>
            {children}
        </div>
    )
}