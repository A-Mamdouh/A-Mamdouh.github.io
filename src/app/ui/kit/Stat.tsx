import { Stat as StatData } from "@/app/data/content";

const Stat = ({ stat }: Readonly<{ stat: StatData }>) => {
    return (
        <div className="flex flex-col gap-1.5">
            <p className="text-accent font-mono text-3xl font-semibold tabular-nums md:text-4xl">
                {stat.value}
            </p>
            <p className="text-sm font-medium uppercase tracking-wide">{stat.label}</p>
            <p className="text-muted text-xs">{stat.detail}</p>
        </div>
    );
};

export default Stat;
