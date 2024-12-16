import { Footer } from "@/components/footer";
import { Header } from "@/components/header";

const FrontLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen w-full max-w-[1920px] flex flex-col justify-between mx-auto">
      <Header />
      <main className="grow">{children}</main>
      <Footer />
    </div>
  );
};

export default FrontLayout;
