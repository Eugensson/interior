import { Metadata } from "next";

import { columns } from "@/app/admin/projects/columns";
import { DataTable } from "@/app/admin/projects/data-table";

export const metadata: Metadata = {
  title: "Projects",
};

const Projects = () => {
  return <DataTable columns={columns} />;
};

export default Projects;
