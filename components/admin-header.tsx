import { Nav } from "@/components/nav";
import { Logo } from "@/components/logo";
import { LogoutBtn } from "@/components/logout-btn";

import { ADMIN_NAV_LINKS } from "@/lib/constants";
import { MobileMenu } from "./mobile-menu";

export const AdminHeader = () => {
  return (
    <header className="py-8 sticky top-0 z-50 bg-white shadow-md">
      <nav className="container flex items-center justify-between">
        <Logo />
        <div className="hidden md:flex items-center md:gap-4 lg:gap-8">
          <Nav items={ADMIN_NAV_LINKS} />
          <LogoutBtn />
        </div>
        <MobileMenu items={ADMIN_NAV_LINKS} />
      </nav>
    </header>
  );
};
