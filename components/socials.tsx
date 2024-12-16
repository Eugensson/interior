import Link from "next/link";

import { cn } from "@/lib/utils";

import { SOCIAL_LINKS } from "@/lib/constants";

export const Socials = ({ className }: { className?: string }) => {
  return (
    <ul className={cn("flex items-center gap-x-4", className)}>
      {SOCIAL_LINKS.map(({ name, href, icon: Icon }) => (
        <li key={name}>
          <Link
            href={href}
            className="flex items-center gap-x-2 text-[40px] text-primary hover:text-accent font-primary transition-colors duration-300"
            target="_blank"
            rel="noopener noreferrer"
            aria-label={name}
          >
            <Icon size={22} />
          </Link>
        </li>
      ))}
    </ul>
  );
};
