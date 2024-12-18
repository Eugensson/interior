import { ArrowRight } from "lucide-react";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

import { cn } from "@/lib/utils";

export const ContactForm = ({
  title,
  btnStyles,
}: {
  title?: string;
  btnStyles?: string;
}) => {
  return (
    <form className="col-span-2 flex flex-col gap-8">
      {title && <h3 className="h3 mb-5">{title}</h3>}
      <div className="flex gap-4">
        <Input placeholder="Name" />
        <Input placeholder="Email" />
      </div>
      <div className="flex gap-4">
        <Input placeholder="Subject" />
        <Input placeholder="Phone" />
      </div>
      <Textarea placeholder="Hello Iam Intrested in..." />
      <Button className={cn("w-fit p-6", btnStyles)}>
        Send Now
        <ArrowRight className="text-accent" />
      </Button>
    </form>
  );
};
