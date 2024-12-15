import { Compare } from "@/components/ui/compare";

export function AboutCompare() {
  return (
    <Compare
      firstImage="/images/about/before.jpg"
      secondImage="/images/about/after.jpg"
      firstImageClassName="object-cover object-left-top"
      secondImageClassname="object-cover object-left-top"
      className="h-[250px] w-[200px] md:h-[500px] md:w-[700px] mx-auto"
      slideMode="hover"
    />
  );
}
