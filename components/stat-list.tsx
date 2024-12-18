import { StatItem } from "@/components/stat-item";

import { STAT_LIST } from "@/lib/constants";

export const StatList = () => {
  return (
    <section className="bg-accent-secondary py-5 md:py-10 lg:py-20">
      <ul className="container grid grid-cols-2 lg:grid-cols-4">
        {STAT_LIST.map(({ countNum, text }, index) => (
          <li
            key={index}
            className={
              index !== STAT_LIST.length - 1 ? "border-r border-accent" : ""
            }
          >
            <StatItem countNum={countNum} text={text} />
          </li>
        ))}
      </ul>
    </section>
  );
};
