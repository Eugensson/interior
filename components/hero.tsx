import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import Link from "next/link";

export const Hero = () => {
  return (
    <section className="bg-hero bg-cover bg-center bg-no-repeat w-full max-w-[1920px] min-h-screen rounded-bl-[350px] overflow-hidden flex items-center">
      <div className="container h-fit flex flex-col gap-y-5">
        <h1 className="h1">
          Let Your Home
          <br /> Be Unique
        </h1>
        <p className="text-xl w-[560px]">
          There are many variations of the passages of lorem Ipsum
          fromavailable,variations of the passages.
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
