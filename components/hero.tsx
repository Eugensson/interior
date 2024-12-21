import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import Link from "next/link";

export const Hero = () => {
  return (
    <section className="bg-hero bg-center lg:bg-cover bg-no-repeat w-full max-w-[1920px] min-h-screen lg:rounded-bl-[290px] overflow-hidden flex items-center">
      <div className="container h-fit flex flex-col justify-center lg:justify-start items-center lg:items-start gap-10 text-center lg:text-left">
        <h1 className="h1 max-w-[567px]">Let Your Home Be Unique</h1>
        <p className="max-w-[567px] text-xl">
          Transform your space into a masterpiece with our bespoke interior
          design solutions tailored to your lifestyle. Let us bring creativity
          and functionality together to make your home truly one-of-a-kind.
        </p>
        <Button className="w-fit p-6" asChild>
          <Link href="/services" className="flex items-center gap-2">
            Get Started
            <ArrowRight className="text-accent" />
          </Link>
        </Button>
      </div>
    </section>
  );
};
