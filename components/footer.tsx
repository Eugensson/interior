import Link from "next/link";

import { Logo } from "@/components/logo";
import { Socials } from "@/components/socials";
import { FooterNav } from "@/components/footer-nav";

export const Footer = () => {
  return (
    <footer className="py-1 md:py-2">
      <div className="container pb-1 md:pb-2 lg:pb-4">
        <ul className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-4 text-sm items-baseline">
          <li className="space-y-4">
            <Logo />
            <p className="max-w-60">
              It is a long established fact that a reader will be distracted
              lookings.
            </p>
            <Socials />
          </li>
          <li className="space-y-4">
            <h4 className="h4">Pages</h4>
            <FooterNav />
          </li>
          <li className="flex flex-col gap-y-4">
            <h4 className="h4">Contact</h4>
            <address className="flex flex-col gap-y-2 not-italic">
              <span>55 East Birchwood Ave.</span>
              <span>Brooklyn, NY 11201</span>
            </address>
            <Link
              href={`mailto:info@interdesign.com`}
              className="hover:text-accent transition-colors duration-300"
            >
              info@interdesign.com
            </Link>
            <Link
              href={`tel:+12345678901`}
              className="hover:text-accent transition-colors duration-300"
            >
              +1 (123) 456-7890
            </Link>
          </li>
        </ul>
      </div>
      <p className="text-xs text-center border-t-2 pt-1 md:pt-2">
        Copyright &copy; InterDesign 2024. All rights reserved.
      </p>
    </footer>
  );
};
