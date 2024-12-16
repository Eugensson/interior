import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Phone } from "lucide-react";

import { Button } from "./ui/button";

export const Estimate = () => {
  return (
    <section className="container flex">
      <h2 className="sr-only">Estimate</h2>
      <div className="flex-1 flex flex-col space-y-8 py-10 pr-20">
        <h3 className="h2">
          We Create The Art
          <br /> Of Stylish Living
          <br /> Stylishly
        </h3>
        <p>
          It is a long established fact that a reader will be distracted by the
          of readable content of a page when lookings at its layouts the points
          of using that it has a more-or-less normal.
        </p>
        <div className="flex items-center gap-x-8">
          <div className="w-24 h-24 rounded-full bg-accent-secondary flex justify-center items-center">
            <Phone size={32} className="text-accent" />
          </div>
          <div className="flex flex-col gap-x-1">
            <Link href={`tel:+18004302154`}>+1 (800) 430-2154</Link>
            <span className="font-secondary text-lg">Call Us Anytime</span>
          </div>
        </div>
        <Button size="lg" className="w-fit" asChild>
          <Link href="/services">
            Get Free Estimate
            <ArrowRight size={24} className="text-accent" />
          </Link>
        </Button>
      </div>
      <div className="flex-1 order-1 relative aspect-square overflow-hidden rounded-tr-[350px] rounded-bl-[150px]">
        <Image
          src="/images/estimate.jpg"
          alt="Apartment Design Photo"
          fill
          quality={100}
          className="object-cover object-center"
        />
      </div>
    </section>
  );
};
