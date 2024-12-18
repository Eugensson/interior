import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { LiaMinusSolid } from "react-icons/lia";
import { RiDoubleQuotesL } from "react-icons/ri";

import { Button } from "@/components/ui/button";
import { TeamCard } from "@/components/team-card";
import { AboutCompare } from "@/components/about-compare";
import { SectionHeader } from "@/components/section-header";

import { TEAM_LIST } from "@/lib/constants";

const AboutUs = () => {
  return (
    <>
      <SectionHeader
        title="About Us"
        subtitle="Home / About"
        className="bg-about"
      />
      <div className="container py-20 flex flex-col items-center">
        <div className="relative w-[800px] p-20 border-[12px] rounded-[40px] border-accent-secondary">
          <RiDoubleQuotesL size={60} className="mx-auto text-accent mb-4" />
          <p className="max-w-[750px] text-2xl text-center italic mb-6">
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
          <h3 className="h2">What We Do</h3>
          <p className="text-secondary max-w-[500px]">
            It is a long established fact that a reader will be distracted by
            the of readable content of a page when lookings at its layouts the
            points of using that it has a more-or-less normal.
          </p>
          <Button className="w-fit p-6" asChild>
            <Link
              href="/services"
              className="flex items-center gap-2 capitalize"
            >
              Our Concept
              <ArrowRight size={24} className="text-accent" />
            </Link>
          </Button>
        </div>
        <AboutCompare />
        <div className="flex flex-col items-end gap-y-5">
          <h3 className="h2">The Final Result</h3>
          <p className="max-w-[500px]">
            It is a long established fact that a reader will be distracted by
            the of readable content of a page when lookings at its layouts the
            points of using that it has a more-or-less normal.
          </p>
          <Button className="w-fit p-6" asChild>
            <Link
              href="/projects"
              className="flex items-center gap-2 capitalize"
            >
              Our Portfolio
              <ArrowRight className="text-accent" />
            </Link>
          </Button>
        </div>
      </div>
      <div className="bg-accent-secondary py-20">
        <div className="container flex flex-col gap-10">
          <h2 className="h2 capitalize text-center">Our team</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {TEAM_LIST.slice(0, 4).map((item) => (
              <li key={item.slug}>
                <TeamCard item={item} />
              </li>
            ))}
          </ul>
          <Button className="w-fit mx-auto p-6" asChild>
            <Link href="/team">
              View All Team
              <ArrowRight size={24} className="text-accent" />
            </Link>
          </Button>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
