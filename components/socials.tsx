import Link from "next/link";

import { cn } from "@/lib/utils";

export type SocialItem = {
  label: string;
  href: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
};

interface SocialsProps {
  items: SocialItem[];
  className?: string;
}

export const Socials = ({ items, className }: SocialsProps) => {
  return (
    <ul className={cn("flex items-center gap-x-4", className)}>
      {items.map(({ label, href, icon: Icon }) => (
        <li key={label}>
          <Link
            href={href}
            className="flex items-center gap-x-2 text-[40px] text-primary hover:text-accent font-primary transition-colors duration-300"
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
          >
            <Icon className="size-6" />
          </Link>
        </li>
      ))}
    </ul>
  );
};
