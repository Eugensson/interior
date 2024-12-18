import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import { CLIENT_LIST } from "@/lib/constants";

import { createAvatarFallback } from "@/lib/utils";

export const Testimonials = () => {
  return (
    <section className="container bg-accent-secondary rounded-2xl px-5 py-20">
      <h2 className="h2 text-center mb-10">
        What the People Thinks
        <br /> About Us
      </h2>
      <ul className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {CLIENT_LIST.slice(0, 3).map(
          ({ name, location, image, testimonial }) => (
            <li key={name} className="rounded-2xl bg-white px-9 py-14">
              <div className="mb-6 flex items-center gap-x-4">
                <Avatar>
                  <AvatarImage src={image} />
                  <AvatarFallback className="font-primary">
                    {createAvatarFallback(name)}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <h4>{name}</h4>
                  <p className="text-secondary text-sm">{location}</p>
                </div>
              </div>
              <p className="line-clamp-3 text-secondary text-base">
                {testimonial}
              </p>
            </li>
          )
        )}
      </ul>
    </section>
  );
};
