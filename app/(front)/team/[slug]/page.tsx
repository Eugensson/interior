import { SectionHeader } from "@/components/section-header";

const Employee = () => {
  return (
    <>
      <SectionHeader
        title="James Smith"
        subtitle="Team / James Smith"
        className="bg-employee"
      />
      <div className="container xl:bg-grid xl:bg-center">employee details</div>
    </>
  );
};

export default Employee;
