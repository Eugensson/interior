import Image from "next/image";

import { Invite } from "@/components/invite";
import { ServiceCard } from "@/components/service-card";
import { SectionHeader } from "@/components/section-header";

import { SERVICE_LIST } from "@/lib/constants";

const Services = () => {
  return (
    <>
      <SectionHeader
        title="Services"
        subtitle="Home / Services"
        className="bg-services"
      />
      <ul className="container xl:bg-grid xl:bg-center py-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {SERVICE_LIST.map((item) => (
          <li key={item.slug}>
            <ServiceCard item={item} />
          </li>
        ))}
      </ul>
      <div className="container rounded-[70px] p-28 bg-accent-secondary">
        <h2 className="h2 capitalize text-center mb-4">How we work</h2>
        <p className="mx-auto text-center text-secondary text-2xl max-w-[800px] mb-24">
          It is a long established fact will be distracted.Lorem Ipsum is simply
          dummy text of the printing and typesetting industry.
        </p>
        <ul className="flex flex-col gap-y-20">
          <li className="flex gap-x-12">
            <div className="flex-1 order-1 relative aspect-square overflow-hidden rounded-tr-[100px] rounded-bl-[200px]">
              <Image
                src="/images/services/services_1.jpg"
                alt="Services 1"
                fill
                quality={100}
                className="object-cover object-center"
              />
            </div>
            <div className="flex-1 order-2 my-auto flex flex-col gap-y-14">
              <div className="flex items-baseline justify-between">
                <Image
                  src="/icons/step_01.svg"
                  alt="step 1"
                  width={80}
                  height={80}
                />
                <p className="font-primary text-[120px] text-white">01</p>
              </div>
              <div className="flex flex-col gap-y-3">
                <h3 className="h3">Concept & Details</h3>
                <p className="text-secondary">
                  It is a long established fact will be distracted. Lorem Ipsum
                  is simply dummy from text of the and typesetting indufstry.
                </p>
              </div>
            </div>
          </li>
          <li className="flex gap-x-12">
            <div className="flex-1 order-2 relative aspect-square overflow-hidden rounded-tr-[100px] rounded-bl-[200px]">
              <Image
                src="/images/services/services_2.jpg"
                alt="Services 2"
                fill
                quality={100}
                className="object-cover object-center"
              />
            </div>
            <div className="flex-1 order-1 my-auto flex flex-col gap-y-14">
              <div className="flex items-baseline justify-between">
                <Image
                  src="/icons/step_02.svg"
                  alt="step 2"
                  width={80}
                  height={80}
                />
                <p className="font-primary text-[120px] text-white">02</p>
              </div>
              <div className="flex flex-col gap-y-3">
                <h3 className="h3">Idea for Work</h3>
                <p className="text-secondary">
                  It is a long established fact will be distracted. Lorem Ipsum
                  is simply dummy from text of the and typesetting indufstry.
                </p>
              </div>
            </div>
          </li>
          <li className="flex gap-x-12">
            <div className="flex-1 order-1 relative aspect-square overflow-hidden rounded-tr-[100px] rounded-bl-[200px]">
              <Image
                src="/images/services/services_3.jpg"
                alt="Services 3"
                fill
                quality={100}
                className="object-cover object-center"
              />
            </div>
            <div className="flex-1 order-2 my-auto flex flex-col gap-y-14">
              <div className="flex items-baseline justify-between">
                <Image
                  src="/icons/step_03.svg"
                  alt="step 3"
                  width={80}
                  height={80}
                />
                <p className="font-primary text-[120px] text-white">03</p>
              </div>
              <div className="flex flex-col gap-y-3">
                <h3 className="h3">Design</h3>
                <p className="text-secondary">
                  It is a long established fact will be distracted. Lorem Ipsum
                  is simply dummy from text of the and typesetting indufstry.
                </p>
              </div>
            </div>
          </li>
          <li className="flex gap-x-12">
            <div className="flex-1 order-2 relative aspect-square overflow-hidden rounded-tr-[100px] rounded-bl-[200px]">
              <Image
                src="/images/services/services_4.jpg"
                alt="Services 4"
                fill
                quality={100}
                className="object-cover object-center"
              />
            </div>
            <div className="flex-1 order-1 my-auto flex flex-col gap-y-14">
              <div className="flex items-baseline justify-between">
                <Image
                  src="/icons/step_04.svg"
                  alt="step 4"
                  width={80}
                  height={80}
                />
                <p className="font-primary text-[120px] text-white">04</p>
              </div>
              <div className="flex flex-col gap-y-3">
                <h3 className="h3">Perfection</h3>
                <p className="text-secondary">
                  It is a long established fact will be distracted. Lorem Ipsum
                  is simply dummy from text of the and typesetting indufstry.
                </p>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <Invite />
    </>
  );
};

export default Services;
