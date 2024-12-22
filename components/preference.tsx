import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { getAllServices } from "@/lib/services/service";

import { ICON_MAP } from "@/lib/constants";

export const Preference = async () => {
  const services = await getAllServices();

  return (
    <section className="container xl:bg-grid xl:bg-center py-5 md:py-10 lg:py-20">
      <h2 className="sr-only">Preference</h2>
      <ul className="grid grid-cols-1 md:grid-cols-3 gap-2">
        {services.slice(0, 3).map(({ title, slug, subtitle, icon }) => {
          const IconComponent = ICON_MAP[icon] || (() => null);

          return (
            <li
              key={slug}
              className="px-10 py-5 flex flex-col items-center gap-4 text-center"
            >
              <IconComponent size={40} className="text-accent" />
              <h3 className="h3 capitalize">{title}</h3>
              <p>{subtitle}</p>
              <Link
                href="/services"
                className="flex justify-center items-center gap-x-2 hover:text-accent transition-colors duration-300"
              >
                Read More
                <ArrowRight size={16} className="text-accent" />
              </Link>
            </li>
          );
        })}
      </ul>
    </section>
  );
};
