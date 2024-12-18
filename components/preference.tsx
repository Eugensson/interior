import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const Preference = () => {
  return (
    <section className="container py-5 md:py-10 lg:py-20">
      <h2 className="sr-only">Preference</h2>
      <ul className="grid grid-cols-1 md:grid-cols-3 gap-2">
        <li className="space-y-2 p-2">
          <h3 className="h3 text-center">Project Plan</h3>
          <p className="text-center max-w-72 mx-auto">
            There are many variations of the passages of lorem Ipsum from
            available, majority.
          </p>
          <Link
            href="/services"
            className="flex justify-center items-center gap-x-2 hover:text-accent transition-colors duration-300"
          >
            Read More
            <ArrowRight size={16} className="text-accent" />
          </Link>
        </li>
        <li className="space-y-2 p-2">
          <h3 className="h3 text-center">Interior Work</h3>
          <p className="text-center max-w-72 mx-auto">
            There are many variations of the passages of lorem Ipsum from
            available, majority.
          </p>
          <Link
            href="/services"
            className="flex justify-center items-center gap-x-2 hover:text-accent transition-colors duration-300"
          >
            Read More
            <ArrowRight size={16} className="text-accent" />
          </Link>
        </li>
        <li className="space-y-2 p-2">
          <h3 className="h3 text-center">Realization</h3>
          <p className="text-center max-w-72 mx-auto">
            There are many variations of the passages of lorem Ipsum from
            available, majority.
          </p>
          <Link
            href="/services"
            className="flex justify-center items-center gap-x-2 hover:text-accent transition-colors duration-300"
          >
            Read More
            <ArrowRight size={16} className="text-accent" />
          </Link>
        </li>
      </ul>
    </section>
  );
};
