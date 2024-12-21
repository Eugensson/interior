import { ProjectList } from "@/components/project-list";

export const OurProjects = () => {
  return (
    <section className="container xl:bg-grid xl:bg-center pb-5 md:pb-10 lg:pb-20 flex flex-col items-center gap-10">
      <h2 className="h2">Follow Our Projects</h2>
      <p className="max-w-[550px] text-center">
        It is a long established fact that a reader will be distracted by the of
        readable content of page lookings at its layouts points.
      </p>
      <ProjectList />
    </section>
  );
};
