import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { StatList } from "@/components/stat-list";
import { BrandList } from "@/components/brand-list";
import { SectionHeader } from "@/components/section-header";

import { getBySlug } from "@/lib/services/service";

export const generateMetadata = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const slug = (await params).slug;
  try {
    const project = await getBySlug(slug);

    if (!project) {
      return { title: "Service not found" };
    }

    return { title: project.title };
  } catch (error) {
    console.error("Error generating metadata:", error);
    return { title: "Service not found" };
  }
};

const ServiceDetails = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const slug = (await params).slug;
  const service = await getBySlug(slug);

  return (
    <>
      <SectionHeader
        title={`${service.title}`}
        subtitle="Services / Service details"
        className="bg-service"
      />
      <div className="container py-5 md:py-10 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-[300px_1fr] gap-2 md:gap-5 lg:gap-10">
          <h2 className="h2 capitalize">{service.title}</h2>
          <div>
            <h3 className="h3 text-accent max-w-[70%] mb-5">
              {service.subtitle}
            </h3>
            <ul className="flex flex-col gap-5 text-secondary">
              {service.description.split("\n").map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
        <BrandList />
        <div className="hidden md:block relative w-full mx-auto max-w-[800px] h-[375px] rounded-3xl overflow-hidden aspect-video">
          <video
            autoPlay
            loop
            muted
            className="absolute top-0 left-0 w-full h-full object-cover"
          >
            <source src="/video/service.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="py-10 lg:py-20 flex flex-col md:flex-row md:justify-between gap-4 md:px-20">
          <div className="flex-1">
            <h3 className="h2 capitalize mb-5">Use of interior</h3>
            <ol className="flex flex-col gap-5 list-decimal marker:font-primary marker:text-accent">
              <li className="pl-2">
                Creating Masterpieces with Every Interior Design Project.
              </li>
              <li className="pl-2">
                Artistic Vision for Unique and Personalized Spaces.
              </li>
              <li className="pl-2">
                Transforming Rooms into Stunning Works of Art.
              </li>
              <li className="pl-2">
                Bringing Creativity to Life through Interior Design Solutions.
              </li>
              <li className="pl-2">
                Excellence in Crafting Artistic and Functional Interior Spaces.
              </li>
            </ol>
          </div>
          <div className="flex-1">
            <h3 className="h2 capitalize mb-5">Make an art</h3>
            <ol className="flex flex-col gap-5 list-decimal marker:font-primary marker:text-accent">
              <li className="pl-2">
                Enhancing Spaces with Thoughtful Interior Design.
              </li>
              <li className="pl-2">
                Innovative Use of Space for Maximum Comfort.
              </li>
              <li className="pl-2">
                Transforming Interiors into Functional Works of Art.
              </li>
              <li className="pl-2">
                Modern Interior Solutions for Every Lifestyle.
              </li>
              <li className="pl-2">
                Practical and Elegant Interior Design for Your Home.
              </li>
            </ol>
          </div>
        </div>
        <div className="py-10 lg:py-20 grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-5 lg:gap-10">
          <div className="hidden md:block relative h-[375px] rounded-3xl overflow-hidden">
            <Image
              src="/images/services/service.jpg"
              alt="Interior Design"
              fill
              quality={100}
              className="object-cover aspect-video"
            />
          </div>
          <div className="flex flex-col gap-10">
            <h3 className="h2 max-w-[70%]">
              We love design. That&apos;s how we got here.
            </h3>
            <p className="text-xl max-w-[70%]">
              From bold concepts to refined details, our passion for design
              drives everything we create.
            </p>
            <Button className="w-fit p-6" asChild>
              <Link href="/projects" className="flex items-center gap-2">
                Our Portfolio
                <ArrowRight className="text-accent" />
              </Link>
            </Button>
          </div>
        </div>
        <StatList />
      </div>
    </>
  );
};

export default ServiceDetails;
