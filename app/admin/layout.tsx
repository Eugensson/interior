import { redirect } from "next/navigation";

import { auth } from "@/auth";
import { AdminHeader } from "@/components/admin-header";

const AdminLayout = async ({ children }: { children: React.ReactNode }) => {
  const session = await auth();

  if (!session || !session.user.isAdmin) {
    redirect("/login");
  }

  return (
    <main>
      <AdminHeader />
      <section className="container py-5 md:py-10">{children}</section>
    </main>
  );
};

export default AdminLayout;
