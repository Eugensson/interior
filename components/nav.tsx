"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";
import { NAV_LINKS } from "@/lib/constants";

export const Nav = () => {
  const pathname = usePathname();

  return (
    <nav className="hidden md:block">
      <ul className="flex items-center md:gap-x-4 lg:gap-x-8 font-secondary">
        {NAV_LINKS.map(({ name, href }) => (
          <li key={name}>
            <Link
              href={href}
              className={cn("", pathname === href && "text-accent underline")}
            >
              {name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
