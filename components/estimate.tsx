import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Phone } from "lucide-react";

import { Button } from "@/components/ui/button";

export const Estimate = () => {
  return (
    <section className="container pb-5 md:pb-10 lg:pb-20 flex">
      <div className="flex-1 flex flex-col space-y-10 p-2 md:p-5 lg:p-10 xl:p-20">
        <h2 className="h2 capitalize">
          We create the art of stylish living stylishly
        </h2>
        <p>
          It is a long established fact that a reader will be distracted by the
          of readable content of a page when lookings at its layouts the points
          of using that it has a more-or-less normal.
        </p>
        <div className="flex items-center gap-x-5">
          <div className="size-14 rounded-full bg-accent-secondary flex justify-center items-center">
            <Phone className="text-accent" />
          </div>
          <div>
            <Link
              href={`tel:+18004302154`}
              className="hover:text-accent transition-colors duration-300"
            >
              +1 (800) 430-2154
            </Link>
            <p>Call Us Anytime</p>
          </div>
        </div>
        <Button className="w-fit p-6" asChild>
          <Link href="/services">
            Get Free Estimate
            <ArrowRight className="text-accent" />
          </Link>
        </Button>
      </div>
      <div className="hidden md:block w-full max-w-[350px] lg:max-w-[450px] xl:max-w-[550px] aspect-square relative overflow-hidden rounded-tr-[350px] rounded-bl-[150px]">
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
