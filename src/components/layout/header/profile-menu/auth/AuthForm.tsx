"use client";
import InputBox from "@/components/ui/input-box/InputBox";
import { validEmail } from "@/src/utils/emailValidation";
import { useState } from "react";
import { useForm } from "react-hook-form";

interface IAuthFormFields {
  Email: string;
  Password: string;
}

export enum EFormType {
  REGISTER = "register",
  LOGIN = "login",
}

export default function AuthForm() {
  const [formType, setFormType] = useState<EFormType>(EFormType.LOGIN);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<IAuthFormFields>({ mode: "onChange" });

  const onSubmit = () => {};

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full flex flex-col items-center justify-around h-full"
    >
      <div className="flex flex-col gap-4 w-full">
        <InputBox
          placeholder="Email"
          type="email"
          error={errors.Email}
          {...register("Email", {
            required: true,
            pattern: {
              value: validEmail,
              message: "Your email is invalid!",
            },
          })}
        />
        <InputBox
          type="password"
          placeholder="Password"
          error={errors.Password}
          {...register("Password", {
            required: true,
            minLength: {
              value: 8,
              message: "Your password must contain more than 8 characters!",
            },
          })}
        />
      </div>
      <button className="mt-2" disabled={errors ? true : false}>
        {formType === EFormType.REGISTER ? "Register" : "Login"}
      </button>
    </form>
  );
}
