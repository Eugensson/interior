import Link from "next/link";

import { SOCIAL_LINKS } from "@/lib/constants";

export const Socials = () => {
  return (
    <ul className="flex items-center gap-x-4">
      {SOCIAL_LINKS.map(({ name, href, icon: Icon }) => (
        <li key={name}>
          <Link
            href={href}
            className="flex items-center gap-x-2 text-[40px] text-primary font-primary"
            target="_blank"
            rel="noopener noreferrer"
            aria-label={name}
          >
            <Icon size={20} />
          </Link>
        </li>
      ))}
    </ul>
  );
};
