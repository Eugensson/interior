import Link from "next/link";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

export const Preference = () => {
  return (
    <section className="container py-[200px]">
      <h2 className="sr-only">Preference</h2>
      <ul className="grid grid-cols-1 md:grid-cols-3 gap-14">
        <li className="flex flex-col justify-center gap-y-5">
          <h3 className="h3 text-center">Project Plan</h3>
          <p className="text-2xl text-center">
            There are many variations of the passages of lorem Ipsum from
            available, majority.
          </p>
          <Button variant="link" asChild>
            <Link href="/services">
              Read More
              <ArrowRight size={24} className="text-accent" />
            </Link>
          </Button>
        </li>
        <li className="flex flex-col justify-center gap-y-5">
          <h3 className="h3 text-center">Interior Work</h3>
          <p className="text-2xl text-center">
            There are many variations of the passages of lorem Ipsum from
            available, majority.
          </p>{" "}
          <Button variant="link" asChild>
            <Link href="/services">
              Read More
              <ArrowRight size={24} className="text-accent" />
            </Link>
          </Button>
        </li>
        <li className="flex flex-col justify-center gap-y-5">
          <h3 className="h3 text-center">Realization</h3>
          <p className="text-2xl text-center">
            There are many variations of the passages of lorem Ipsum from
            available, majority.
          </p>{" "}
          <Button variant="link" asChild>
            <Link href="/services">
              Read More
              <ArrowRight size={24} className="text-accent" />
            </Link>
          </Button>
        </li>
      </ul>
    </section>
  );
};
