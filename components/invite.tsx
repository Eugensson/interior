import { ArrowRight } from "lucide-react";

import { Button } from "./ui/button";

export const Invite = () => {
  return (
    <section className="container py-[200px]">
      <div className="bg-primary py-20 text-white rounded-[70px] text-center">
        <h3 className="h2 text-white mb-4">Wanna join the interno?</h3>
        <p className="text-xl mb-8">
          It is a long established fact will be distracted.
        </p>
        <Button size="lg" variant="accent" className="capitalize">
          Contact with us
          <ArrowRight size={24} className="text-primary" />
        </Button>
      </div>
    </section>
  );
};
