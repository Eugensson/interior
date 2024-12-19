"use client";

import { useEffect, useState } from "react";
import { signIn, useSession } from "next-auth/react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useRouter, useSearchParams } from "next/navigation";
import {
  ArrowRight,
  AtSign,
  Eye,
  EyeOff,
  KeyRound,
  TriangleAlert,
} from "lucide-react";

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
  const [isVisiblePassword, setIsVisiblePassword] = useState(false);
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
    if (session && session.user.isAdmin) {
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
      className="rounded-2xl bg-accent-secondary w-full max-w-md p-10 flex flex-col gap-10 justify-center"
    >
      <Label htmlFor="email" className="sr-only">
        Email
      </Label>
      <div className="relative">
        <Input
          id="email"
          placeholder="Enter your email"
          type="email"
          className="bg-inherit max-w-lg mx-auto px-8 placeholder:text-secondary/50"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
              message: "Email is invalid",
            },
          })}
        />
        {errors.email?.message ? (
          <TriangleAlert className="absolute top-1/2 -translate-y-1/2 left-0 text-red-500/50" />
        ) : (
          <AtSign className="absolute top-1/2 -translate-y-1/2 left-0 text-secondary/50" />
        )}
      </div>

      <Label htmlFor="password" className="sr-only">
        Password
      </Label>
      <div className="relative">
        <Input
          id="password"
          placeholder="Enter your password"
          type={isVisiblePassword ? "text" : "password"}
          className="bg-inherit max-w-lg mx-auto px-8 placeholder:text-secondary/50"
          {...register("password", {
            required: "Password is required",
          })}
        />
        {errors.password?.message ? (
          <TriangleAlert className="absolute top-1/2 -translate-y-1/2 left-0 text-red-500/50" />
        ) : (
          <KeyRound className="absolute top-1/2 -translate-y-1/2 left-0 text-secondary/50" />
        )}
        {isVisiblePassword ? (
          <EyeOff
            onClick={() => setIsVisiblePassword((prevState) => !prevState)}
            className="absolute top-1/2 -translate-y-1/2 right-0 text-secondary/50"
          />
        ) : (
          <Eye
            onClick={() => setIsVisiblePassword((prevState) => !prevState)}
            className="absolute top-1/2 -translate-y-1/2 right-0 text-secondary/50"
          />
        )}
      </div>

      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-fit mx-auto text-lg p-6"
      >
        Login
        <ArrowRight className="text-accent" />
      </Button>
    </form>
  );
};
