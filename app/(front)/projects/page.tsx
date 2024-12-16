import { ProdectCard } from "@/components/project-card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { PROJECT_LIST } from "@/lib/constants";

const Projects = () => {
  const renderProjects = (
    category: "bathroom" | "kitchen" | "living room" | "bedroom"
  ) => {
    return PROJECT_LIST.filter((item) => item.category === category).map(
      (project, index) => <ProdectCard key={index} project={project} />
    );
  };

  return (
    <section>
      <div className="relative bg-projects bg-contain bg-no-repeat bg-center min-h-[300px] min-w-screen">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-fit py-5 text-center bg-white rounded-t-3xl">
          <h1 className="h2 text-accent mb-2">Our Projects</h1>
          <p className="h4 text-secondary">Home / Projects</p>
        </div>
      </div>
      <Tabs
        defaultValue="bathroom"
        className="container py-28 w-full flex flex-col items-center"
      >
        <TabsList className="max-w-max mb-8">
          <TabsTrigger value="bathroom">Bathroom</TabsTrigger>
          <TabsTrigger value="kitchen">Kitchen</TabsTrigger>
          <TabsTrigger value="living room">Living Room</TabsTrigger>
          <TabsTrigger value="bedroom">Bedroom</TabsTrigger>
        </TabsList>

        {["bathroom", "kitchen", "living room", "bedroom"].map((category) => (
          <TabsContent key={category} value={category} className="w-full">
            <ul className="grid grid-cols-2 gap-7">
              {renderProjects(
                category as "bathroom" | "kitchen" | "living room" | "bedroom"
              )}
            </ul>
          </TabsContent>
        ))}
      </Tabs>
    </section>
  );
};

export default Projects;
