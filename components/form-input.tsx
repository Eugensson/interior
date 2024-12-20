"use client";

import {
  UseFormRegister,
  FieldErrors,
  ValidationRule,
  Path,
} from "react-hook-form";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import { cn } from "@/lib/utils";

interface FormInputProps<TFormValues extends Record<string, unknown>> {
  id: Path<TFormValues>;
  name: string;
  required?: boolean;
  pattern?: ValidationRule<RegExp>;
  className?: string;
  register: UseFormRegister<TFormValues>;
  disabled?: boolean;
  errors?: FieldErrors<TFormValues>[Path<TFormValues>];
  type?: "text" | "textarea";
}

export const FormInput = <TFormValues extends Record<string, unknown>>({
  id,
  name,
  required,
  pattern,
  className,
  disabled,
  register,
  errors,
  type = "text",
}: FormInputProps<TFormValues>) => {
  const inputProps = register(id, {
    required: required && `${name} is required`,
    pattern,
  });

  return (
    <Label
      htmlFor={id as string}
      className={cn("w-full flex flex-col gap-1", className)}
    >
      {errors?.message ? (
        <span className="text-red-500">{errors.message as string}</span>
      ) : (
        name
      )}
      {type === "textarea" ? (
        <Textarea
          disabled={disabled}
          id={id as string}
          {...inputProps}
          rows={10}
        />
      ) : (
        <Input
          disabled={disabled}
          id={id as string}
          {...inputProps}
          type="text"
        />
      )}
    </Label>
  );
};
