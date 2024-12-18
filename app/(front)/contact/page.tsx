import Link from "next/link";
import Image from "next/image";
import { Earth, Mail, MapPin, Phone } from "lucide-react";

import { Socials } from "@/components/socials";
import { ContactForm } from "@/components/contact-form";

const Contact = () => {
  return (
    <section>
      <div className="relative bg-contact bg-contain bg-no-repeat bg-center min-h-[300px] min-w-screen">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-fit py-5 text-center bg-white rounded-t-3xl">
          <h1 className="h2 text-accent mb-2">Contact Us</h1>
          <p className="h4 text-secondary">Home / Contact</p>
        </div>
      </div>
      <div className="container py-20">
        <h2 className="h2 text-center mb-20">
          We love meeting new people
          <br /> and helping them
        </h2>
        <div className="grid grid-cols-3 gap-10">
          <div className="py-20 space-y-10 px-8 bg-accent-secondary rounded-3xl col-span-1">
            <ul className="flex flex-col gap-8">
              <li className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center">
                  <Mail size={26} className="text-accent" />
                </div>
                <Link
                  href={`mailto:info@yourdomain.com`}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-accent transition-colors duration-300"
                >
                  info@yourdomain.com
                </Link>
              </li>
              <li className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center">
                  <Phone size={26} className="text-accent" />
                </div>
                <Link
                  href={`tel:+11234566789`}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-accent transition-colors duration-300"
                >
                  +1 (123) 456-6789
                </Link>
              </li>
              <li className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center">
                  <Earth size={26} className="text-accent" />
                </div>
                <Link
                  href={`https://www.yourdomain.com`}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-accent transition-colors duration-300"
                >
                  yourdomain.com
                </Link>
              </li>
            </ul>
            <Socials className="ml-2" />
          </div>
          <ContactForm btnStyles="ml-auto" />
        </div>
      </div>
      <div className="container mb-20 rounded-3xl overflow-hidden h-[500px] relative">
        <Image
          src="/images/map.jpg"
          alt="map"
          fill
          quality={100}
          className="w-full h-full object-cover"
        />
        <MapPin size={40} className="absolute top-40 left-80 text-accent" />
      </div>
    </section>
  );
};

export default Contact;
