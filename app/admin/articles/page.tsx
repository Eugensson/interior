import { Metadata } from "next";

import { columns } from "@/app/admin/articles/columns";
import { DataTable } from "@/app/admin/articles/data-table";

export const metadata: Metadata = {
  title: "Articles",
};

const Articles = () => {
  return <DataTable columns={columns} />;
};

export default Articles;
