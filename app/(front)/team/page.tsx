import { EmployeeCard } from "@/components/employee-card";
import { SectionHeader } from "@/components/section-header";

import { TEAM_LIST } from "@/lib/constants";

const Team = () => {
  return (
    <>
      <SectionHeader
        title="Our Professional"
        subtitle="Home / Team"
        className="bg-team"
      />
      <ul className="container xl:bg-grid xl:bg-center py-5 md:py-10 lg:py-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {TEAM_LIST.map((item) => (
          <li key={item.slug}>
            <EmployeeCard item={item} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default Team;
