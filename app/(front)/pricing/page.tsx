import Link from "next/link";
import { ArrowRight, CircleCheck } from "lucide-react";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { SectionHeader } from "@/components/section-header";

const Pricing = () => {
  return (
    <>
      <SectionHeader
        title="Pricing & Plan"
        subtitle="Home / Pricing"
        className="bg-pricing"
      />
      <ul className="container py-5 md:py-10 lg:py-20 grid grid-cols-1 md:grid-cols-3 gap-1 md:gap-5 lg:gap-10">
        <li>
          <Card className="rounded-3xl bg-accent-secondary py-5">
            <CardHeader className="px-5">
              <CardTitle className="font-primary tracking-wide font-normal text-center">
                Design advices
              </CardTitle>
              <h2 className="h1 font-primary font-normal text-center">
                <span className="text-2xl font-primary">$</span>29
              </h2>
              <CardDescription className="text-xl font-normal text-center">
                /per month
              </CardDescription>
            </CardHeader>
            <CardContent className="px-0">
              <Separator className="my-8" />
              <ul className="px-5 flex flex-col gap-y-2 text-secondary text-base">
                <li className="flex items-center gap-x-2">
                  <CircleCheck size={18} className="text-accent" />
                  General living space advices
                </li>
                <li className="flex items-center gap-x-2">
                  <CircleCheck size={18} className="text-accent" />
                  Rennovation advices
                </li>
                <li className="flex items-center gap-x-2">
                  <CircleCheck size={18} className="text-accent" />
                  Interior design advices
                </li>
                <li className="flex items-center gap-x-2">
                  <CircleCheck size={18} className="text-accent" />
                  Furniture reorganization
                </li>
                <li className="flex items-center gap-x-2">
                  <CircleCheck size={18} className="text-accent" />
                  Up to 5 hours meetings
                </li>
              </ul>
            </CardContent>
            <CardFooter className="px-5">
              <Button size="lg" variant="accent" className="w-full" asChild>
                <Link href="/" className="capitalize text-white">
                  Get started
                  <ArrowRight size={24} className="text-primary" />
                </Link>
              </Button>
            </CardFooter>
          </Card>
        </li>
        <li>
          <Card className="rounded-3xl bg-accent-secondary py-5">
            <CardHeader className="px-5">
              <CardTitle className="font-primary tracking-wide font-normal text-center">
                Complete interior
              </CardTitle>
              <h2 className="h1 font-primary font-normal text-center text-accent">
                <span className="text-2xl font-primary">$</span>39
              </h2>
              <CardDescription className="text-xl font-normal text-center">
                /per month
              </CardDescription>
            </CardHeader>
            <CardContent className="px-0">
              <div className="relative min-h-16">
                <Separator className="absolute left-0 top-0 my-8 bg-primary" />
                <Badge className="absolute top-2.5 left-16 px-11 py-2 text-base">
                  Most Popular Plans
                </Badge>
              </div>
              <ul className="px-5 flex flex-col gap-y-2 text-secondary text-base">
                <li className="flex items-center gap-x-2">
                  <CircleCheck size={18} className="text-accent" />
                  Complete home redesign
                </li>
                <li className="flex items-center gap-x-2">
                  <CircleCheck size={18} className="text-accent" />
                  Interior and exterior works
                </li>
                <li className="flex items-center gap-x-2">
                  <CircleCheck size={18} className="text-accent" />
                  Modular interior planning
                </li>
                <li className="flex items-center gap-x-2">
                  <CircleCheck size={18} className="text-accent" />
                  Kitchen design
                </li>
                <li className="flex items-center gap-x-2">
                  <CircleCheck size={18} className="text-accent" />
                  Garages organization
                </li>
              </ul>
            </CardContent>
            <CardFooter className="px-5">
              <Button size="lg" className="w-full" asChild>
                <Link href="/" className="capitalize text-white">
                  Get started
                  <ArrowRight size={24} className="text-accent ml-4" />
                </Link>
              </Button>
            </CardFooter>
          </Card>
        </li>
        <li>
          <Card className="rounded-3xl bg-accent-secondary py-5">
            <CardHeader className="px-5">
              <CardTitle className="font-primary tracking-wide font-normal text-center">
                Furniture design
              </CardTitle>
              <h2 className="h1 font-primary font-normal text-center">
                <span className="text-2xl font-primary">$</span>59
              </h2>
              <CardDescription className="text-xl font-normal text-center">
                /per month
              </CardDescription>
            </CardHeader>
            <CardContent className="px-0">
              <Separator className="my-8" />
              <ul className="px-5 flex flex-col gap-y-2 text-secondary text-base">
                <li className="flex items-center gap-x-2">
                  <CircleCheck size={18} className="text-accent" />
                  Furniture for living room
                </li>
                <li className="flex items-center gap-x-2">
                  <CircleCheck size={18} className="text-accent" />
                  Furniture refurbishment
                </li>
                <li className="flex items-center gap-x-2">
                  <CircleCheck size={18} className="text-accent" />
                  Sofas and amchairs
                </li>
                <li className="flex items-center gap-x-2">
                  <CircleCheck size={18} className="text-accent" />
                  Tables and chairs
                </li>
                <li className="flex items-center gap-x-2">
                  <CircleCheck size={18} className="text-accent" />
                  Kitchens
                </li>
              </ul>
            </CardContent>
            <CardFooter className="px-5">
              <Button size="lg" variant="accent" className="w-full" asChild>
                <Link href="/" className="capitalize text-white">
                  Get started
                  <ArrowRight size={24} className="text-primary" />
                </Link>
              </Button>
            </CardFooter>
          </Card>
        </li>
      </ul>
    </>
  );
};

export default Pricing;
