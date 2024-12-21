import { ArrowRight } from "lucide-react";

import { Button } from "./ui/button";
import Link from "next/link";

export const Invite = () => {
  return (
    <section className="container xl:bg-grid xl:bg-center py-5 md:py-10 lg:py-20">
      <div className="bg-primary py-20 text-white rounded-3xl text-center">
        <h3 className="h2 text-white mb-4">Wanna join the interno?</h3>
        <p className="mb-8">
          It is a long established fact will be distracted.
        </p>
        <Button variant="accent" className="p-6" asChild>
          <Link href="/contact" className="flex items-center gap-2 capitalize">
            Contact with us
            <ArrowRight className="text-primary" />
          </Link>
        </Button>
      </div>
    </section>
  );
};
