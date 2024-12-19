"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";
import { FOOTER_NAV_LINKS } from "@/lib/constants";

export const FooterNav = () => {
  const pathname = usePathname();

  return (
    <nav className="hidden md:block">
      <ul className="flex flex-col gap-y-2">
        {FOOTER_NAV_LINKS.map(({ name, href }) => (
          <li key={name}>
            <Link
              href={href}
              className={cn(
                "hover:text-accent transition-colors duration-300",
                pathname === href && "text-accent"
              )}
            >
              {name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
