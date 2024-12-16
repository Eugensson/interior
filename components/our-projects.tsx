import { ProjectList } from "@/components/project-list";

export const OurProjects = () => {
  return (
    <section className="container py-[150px] flex flex-col items-center gap-y-10">
      <h2 className="h2">Follow Our Projects</h2>
      <p className="text-secondary text-xl max-w-[750px] text-center">
        It is a long established fact that a reader will be distracted by the of
        readable content of page lookings at its layouts points.
      </p>
      <ProjectList />
    </section>
  );
};
