import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";

const NotFound = () => {
  return (
    <div className="container h-screen flex">
      <div className="flex-1 flex flex-col justify-center gap-y-20 h-full p-10">
        <h1 className="text-[150px] font-primary text-accent">404</h1>
        <p className="text-secondary text-xl">
          We are sorry, but the page you requested was not found
        </p>
        <Button size="lg" className="w-fit" asChild>
          <Link href="/" className="capitalize text-white">
            Back to home
            <ArrowRight size={24} className="text-accent ml-4" />
          </Link>
        </Button>
      </div>
      <Image
        src="/images/not-found.jpg"
        alt="not found"
        width={800}
        height={800}
        className="flex-1 object-cover aspect-square rounded-bl-[300px] h-full"
      />
    </div>
  );
};

export default NotFound;
