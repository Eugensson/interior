import Link from "next/link";
import Image from "next/image";
import { ChevronRight } from "lucide-react";

import { Project } from "@/lib/types";

import { PROJECT_LIST } from "@/lib/constants";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export const ProjectList = () => {
  const getBorderClass = (index: number) => {
    switch (index) {
      case 0:
        return "rounded-tr-[100px]";
      case 1:
        return "rounded-tl-[100px]";
      case 2:
        return "rounded-br-[100px]";
      case 3:
        return "rounded-bl-[100px]";
      default:
        return "";
    }
  };

  return (
    <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-2 md:gap-y-14 md:gap-x-28">
      {PROJECT_LIST.slice(0, 4).map((project: Project, index: number) => (
        <li key={project.slug}>
          <Card className="border-none">
            <CardContent
              className={`p-0 overflow-hidden ${getBorderClass(index)}`}
            >
              <Image
                src={project.imagethumb}
                alt={project.title}
                width={400}
                height={300}
                className="object-cover aspect-square"
              />
            </CardContent>
            <CardHeader className="px-0 flex flex-row items-center justify-between">
              <div>
                <CardTitle className="font-primary font-normal tracking-wide text-2xl capitalize">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-lg">
                  Decor / Architecture
                </CardDescription>
              </div>
              <Link
                href={`/project/${project.slug}`}
                className="w-16 h-16 rounded-full text-primary hover:text-white focus:text-white bg-accent-secondary hover:bg-accent focus:bg-accent focus:outline-white transition-colors duration-300 flex justify-center items-center"
              >
                <ChevronRight />
              </Link>
            </CardHeader>
          </Card>
        </li>
      ))}
    </ul>
  );
};
