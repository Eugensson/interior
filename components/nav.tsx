"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export type NavItem = {
  name: string;
  href: string;
};

interface NavProps {
  items: NavItem[];
  containerStyle?: string;
}

export const Nav = ({ items, containerStyle }: NavProps) => {
  const pathname = usePathname();

  return (
    <nav className={containerStyle}>
      <ul className="flex items-center md:gap-x-4 lg:gap-x-8 font-secondary">
        {items.map(({ name, href }) => (
          <li key={name}>
            <Link
              href={href}
              className={`${pathname === href && "text-accent font-normal"}`}
            >
              {name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
