import Image from "next/image";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { SectionHeader } from "@/components/section-header";

const Faq = () => {
  return (
    <>
      <SectionHeader title="F.A.Q." subtitle="Home / Faq" className="bg-faq" />
      <div className="container xl:bg-grid xl:bg-center py-20 text-center space-y-20">
        <h2 className="h2 mb-12">Every Question Answered</h2>
        <div className="flex gap-20">
          <Accordion type="single" collapsible className="flex-1">
            <AccordionItem value="item-1">
              <AccordionTrigger>
                What is the Hipcouch Interior Design Service?
              </AccordionTrigger>
              <AccordionContent className="text-secondary text-left text-base max-w-[500px]">
                Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae
                turpmaximus.posuere in.Contrary popular belief. There are many
                variations of passages of Lorem Ipsum available, but the
                majority randomised.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>
                So, how exactly does this work?
              </AccordionTrigger>
              <AccordionContent className="text-secondary text-left text-base max-w-[500px]">
                Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae
                turpmaximus.posuere in.Contrary popular belief. There are many
                variations of passages of Lorem Ipsum available, but the
                majority randomised.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>
                What cities do you currently operate in?
              </AccordionTrigger>
              <AccordionContent className="text-secondary text-left text-base max-w-[500px]">
                Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae
                turpmaximus.posuere in.Contrary popular belief. There are many
                variations of passages of Lorem Ipsum available, but the
                majority randomised.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>
                Hipcouch Interior Design Service?
              </AccordionTrigger>
              <AccordionContent className="text-secondary text-left text-base max-w-[500px]">
                Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae
                turpmaximus.posuere in.Contrary popular belief. There are many
                variations of passages of Lorem Ipsum available, but the
                majority randomised.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger>
                What kind of interior designers do you have?
              </AccordionTrigger>
              <AccordionContent className="text-secondary text-left text-base max-w-[500px]">
                Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae
                turpmaximus.posuere in.Contrary popular belief. There are many
                variations of passages of Lorem Ipsum available, but the
                majority randomised.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <div className="flex-1 relative h-[420px] overflow-hidden rounded-3xl">
            <Image
              src="/images/faq/faq_02.jpg"
              alt="Interior Photo"
              fill
              quality={100}
              className="object-cover object-center"
            />
          </div>
        </div>
        <h2 className="h2 mb-12">Project related questions</h2>
        <div className="flex gap-20">
          <div className="flex-1 relative h-[420px] overflow-hidden rounded-3xl">
            <Image
              src="/images/faq/faq_01.jpg"
              alt="Interior Photo"
              fill
              quality={100}
              className="object-cover object-center"
            />
          </div>
          <Accordion type="single" collapsible className="flex-1">
            <AccordionItem value="item-1">
              <AccordionTrigger>How long does it take?</AccordionTrigger>
              <AccordionContent className="text-secondary text-left text-base max-w-[500px]">
                Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae
                turpmaximus.posuere in.Contrary popular belief. There are many
                variations of passages of Lorem Ipsum available, but the
                majority randomised.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>
                Can I use my existing furnishings?
              </AccordionTrigger>
              <AccordionContent className="text-secondary text-left text-base max-w-[500px]">
                Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae
                turpmaximus.posuere in.Contrary popular belief. There are many
                variations of passages of Lorem Ipsum available, but the
                majority randomised.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>
                I put into redesigning my interior?
              </AccordionTrigger>
              <AccordionContent className="text-secondary text-left text-base max-w-[500px]">
                Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae
                turpmaximus.posuere in.Contrary popular belief. There are many
                variations of passages of Lorem Ipsum available, but the
                majority randomised.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>What do your services cost?</AccordionTrigger>
              <AccordionContent className="text-secondary text-left text-base max-w-[500px]">
                Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae
                turpmaximus.posuere in.Contrary popular belief. There are many
                variations of passages of Lorem Ipsum available, but the
                majority randomised.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger>
                Do you offer free consultations?
              </AccordionTrigger>
              <AccordionContent className="text-secondary text-left text-base max-w-[500px]">
                Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae
                turpmaximus.posuere in.Contrary popular belief. There are many
                variations of passages of Lorem Ipsum available, but the
                majority randomised.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </>
  );
};

export default Faq;
