import { StatItem } from "@/components/stat-item";

import { STAT_LIST } from "@/lib/constants";

export const StatList = () => {
  return (
    <section className="bg-accent-secondary px-16 py-[150px]">
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
