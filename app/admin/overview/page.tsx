import { redirect } from "next/navigation";

import { LogoutBtn } from "@/components/logout-btn";

import { auth } from "@/auth";

const Overview = async () => {
  const session = await auth();

  if (!session || session.user.role !== "admin") {
    redirect("/login");
  }

  return (
    <div>
      Overview
      <p>{session.user.role}</p>
      <LogoutBtn />
    </div>
  );
};

export default Overview;
