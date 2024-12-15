import { EmployeeCard } from "@/components/employee-card";

import { TEAM_LIST } from "@/lib/constants";

const Team = () => {
  return (
    <section>
      <div className="relative bg-team bg-contain bg-no-repeat bg-center min-h-[300px] min-w-screen">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-fit py-10 text-center bg-white/50 rounded-t-2xl">
          <h1 className="h1 text-accent mb-2">Our Professional</h1>
          <p className="h4 text-secondary">Home / Team</p>
        </div>
      </div>
      <ul className="container py-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {TEAM_LIST.map((item) => (
          <li key={item.slug}>
            <EmployeeCard item={item} />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Team;
