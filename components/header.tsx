import { Nav } from "@/components/nav";
import { Logo } from "@/components/logo";
import { MobileMenu } from "@/components/mobile-menu";

export const Header = () => {
  return (
    <header className="py-8 sticky top-0 z-50 bg-white">
      <div className="container flex items-center justify-between">
        <Logo />
        <Nav />
        <MobileMenu />
      </div>
    </header>
  );
};
