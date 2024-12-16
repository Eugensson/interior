import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { LiaMinusSolid } from "react-icons/lia";
import { RiDoubleQuotesL } from "react-icons/ri";

import { Button } from "@/components/ui/button";
import { TeamCard } from "@/components/team-card";
import { AboutCompare } from "@/components/about-compare";

import { TEAM_LIST } from "@/lib/constants";

const AboutUs = () => {
  return (
    <section>
      <div className="relative bg-about bg-contain bg-no-repeat bg-center min-h-[300px] min-w-screen">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-fit py-5 text-center bg-white rounded-t-3xl">
          <h1 className="h2 text-accent mb-2">About Us</h1>
          <p className="h4 text-secondary">Home / About</p>
        </div>
      </div>
      <div className="container py-20 flex flex-col items-center">
        <div className="relative w-[800px] py-20 px-16 border-[12px] rounded-[40px] border-accent-secondary">
          <RiDoubleQuotesL size={60} className="mx-auto text-accent mb-4" />
          <p className="max-w-[750px] text-3xl text-center italic mb-6">
            I like an interior that defies labeling. I don&apos;t really want
            someone to walk into a room and know that I did it
          </p>
          <p className="flex items-center justify-center gap-x-2 uppercase">
            <LiaMinusSolid />
            Bunny Williams
          </p>
          <div className="w-[500px] h-3 bg-white absolute -top-3 left-1/2 -translate-x-1/2" />
          <div className="w-[500px] h-3 bg-white absolute -bottom-3 left-1/2 -translate-x-1/2" />
        </div>
      </div>
      <div className="container py-20 flex flex-col gap-y-10">
        <div className="flex flex-col gap-y-5">
          <h3 className="h2 font-primary">What We Do</h3>
          <p className="text-secondary max-w-[500px]">
            It is a long established fact that a reader will be distracted by
            the of readable content of a page when lookings at its layouts the
            points of using that it has a more-or-less normal.
          </p>
          <Button size="lg" className="w-fit">
            Our Concept
            <ArrowRight size={24} className="text-accent" />
          </Button>
        </div>
        <AboutCompare />
        <div className="flex flex-col items-end gap-y-5">
          <h3 className="h2 font-primary">The End Result</h3>
          <p className="text-secondary max-w-[500px]">
            It is a long established fact that a reader will be distracted by
            the of readable content of a page when lookings at its layouts the
            points of using that it has a more-or-less normal.
          </p>
          <Button size="lg" className="w-fit">
            Our Portfolio
            <ArrowRight size={24} className="text-accent" />
          </Button>
        </div>
      </div>
      <div className="bg-accent-secondary py-20">
        <div className="container flex flex-col gap-y-20">
          <h2 className="h2 capitalize text-center">Our team</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {TEAM_LIST.slice(0, 4).map((item) => (
              <li key={item.slug}>
                <TeamCard item={item} />
              </li>
            ))}
          </ul>
          <Button size="lg" className="w-fit mx-auto" asChild>
            <Link href="/team">
              View All Team
              <ArrowRight size={24} className="text-accent" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
