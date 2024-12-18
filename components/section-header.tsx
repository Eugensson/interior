import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  title: string;
  subtitle: string;
  className?: string;
}

export const SectionHeader = ({
  title,
  subtitle,
  className,
}: SectionHeaderProps) => {
  return (
    <div
      className={cn(
        "relative bg-contain bg-no-repeat bg-center h-72 w-full max-w-[1920px]",
        className
      )}
    >
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-fit p-5 text-center bg-white rounded-t-2xl">
        <h1 className="h2 text-accent mb-2 capitalize truncate">{title}</h1>
        <p>{subtitle}</p>
      </div>
    </div>
  );
};
