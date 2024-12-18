import { Metadata } from "next";

import { LoginForm } from "@/components/login-form";
import { SectionHeader } from "@/components/section-header";

export const metadata: Metadata = {
  title: "Login",
};

const Login = () => {
  return (
    <>
      <SectionHeader
        title="Login"
        subtitle="Home / Login"
        className="bg-login"
      />
      <div className="container py-10 flex justify-center items-center">
        <LoginForm />
      </div>
    </>
  );
};

export default Login;
