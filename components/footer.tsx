import Link from "next/link";
import { Logo } from "./logo";
import { Socials } from "./socials";

export const Footer = () => {
  return (
    <footer className="flex flex-col py-1 md:py-2 lg:py-4">
      <div className="container pb-1 md:pb-2 lg:pb-4">
        <ul className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-4 text-sm items-baseline">
          <li className="flex flex-col gap-y-4">
            <Logo />
            <p className="max-w-60">
              It is a long established fact that a reader will be distracted
              lookings.
            </p>
            <Socials />
          </li>
          <li>
            <ul className="flex flex-col gap-y-2">
              <li>
                <Link href="/about">About Us</Link>
              </li>
              <li>
                <Link href="/team">Our Team</Link>
              </li>
              <li>
                <Link href="/projects">Our Projects</Link>
              </li>
              <li>
                <Link href="/services">Our Services</Link>
              </li>
              <li>
                <Link href="/contact">Contact Us</Link>
              </li>
            </ul>
          </li>
          <li className="flex flex-col gap-y-4">
            <p className="font-bold">Contact</p>
            <address className="flex flex-col gap-y-2 not-italic">
              <span>55 East Birchwood Ave.</span>
              <span>Brooklyn, NY 11201</span>
            </address>
            <Link href={`mailto:info@interdesign.com`}>
              info@interdesign.com
            </Link>
            <Link href={`tel:+12345678901`}>+1 (123) 456-7890</Link>
          </li>
        </ul>
      </div>
      <span className="text-xs text-center border-t-2 pt-1 md:pt-2 lg:pt-4">
        Copyright &copy; InterDesign 2024. All rights reserved.
      </span>
    </footer>
  );
};
