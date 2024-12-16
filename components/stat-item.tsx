"use client";

import CountUp from "react-countup";

import { Stat } from "@/lib/types";

export const StatItem = ({ countNum, text }: Stat) => {
  return (
    <div className="font-primary text-center">
      <CountUp
        end={countNum}
        delay={2.4}
        duration={6}
        className="h1 text-accent"
      />
      <p className="mt-5 font-secondary text-secondary text-xl capitalize">
        {text}
      </p>
    </div>
  );
};
