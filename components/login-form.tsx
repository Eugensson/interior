"use client";

import { useEffect } from "react";
import { ArrowRight, TriangleAlert } from "lucide-react";
import { signIn, useSession } from "next-auth/react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useRouter, useSearchParams } from "next/navigation";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import { DEFAULT_LOGIN_REDIRECT } from "@/routes";

type Inputs = {
  email: string;
  password: string;
};

export const LoginForm = () => {
  const router = useRouter();
  const params = useSearchParams();
  const { data: session } = useSession();
  const callbackUrl = params.get("callbackUrl") || DEFAULT_LOGIN_REDIRECT;

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<Inputs>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  useEffect(() => {
    if (session && session.user) {
      router.push(callbackUrl);
    }
  }, [callbackUrl, params, router, session]);

  const formSubmit: SubmitHandler<Inputs> = async (form) => {
    const { email, password } = form;
    signIn("credentials", {
      email,
      password,
    });
  };

  return (
    <form
      onSubmit={handleSubmit(formSubmit)}
      className="rounded-2xl bg-accent-secondary w-fit p-10 flex flex-col gap-5 justify-center"
    >
      <h2 className="h2 text-center">Password Protected</h2>
      <p className="text-lg text-center max-w-2xl">
        This page is password protected. If you are the website admin, or have
        access to this page, please type your email and password below.
      </p>
      {errors.email?.message ? (
        <p className="w-fit py-2 px-4 rounded-md mx-auto flex justify-center items-center gap-4 text-lg text-red-500 bg-red-500/15">
          <TriangleAlert />
          {errors.email.message}
        </p>
      ) : errors.password?.message ? (
        <p className="w-fit py-2 px-4 rounded-md mx-auto flex justify-center items-center gap-4 text-lg text-red-500 bg-red-500/15">
          <TriangleAlert />
          {errors.password.message}
        </p>
      ) : null}
      <Label htmlFor="email" className="sr-only">
        Email
      </Label>
      <Input
        id="email"
        placeholder="Enter your email"
        type="email"
        className="bg-inherit max-w-lg mx-auto"
        {...register("email", {
          required: "Email is required",
          pattern: {
            value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
            message: "Email is invalid",
          },
        })}
      />
      <Label htmlFor="password" className="sr-only">
        Password
      </Label>
      <Input
        id="password"
        placeholder="Enter your password"
        type="password"
        className="bg-inherit max-w-lg mx-auto"
        {...register("password", {
          required: "Password is required",
        })}
      />
      <Button
        type="submit"
        disabled={isSubmitting}
        size="lg"
        className="w-fit mx-auto text-lg"
      >
        Login
        <ArrowRight size={24} className="text-accent" />
      </Button>
    </form>
  );
};
