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
      <ul className="container py-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
