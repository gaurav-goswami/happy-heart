"use client";

import { FormProvider, useForm } from "react-hook-form";
import InputComponent from "../form/form-input";
import { Button } from "../ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginResolver } from "@/lib/resolvers";
import { loginUser } from "@/lib/api-caller";
import { z } from "zod";
import { useRouter } from "next/navigation";
import { useUserStore } from "@/lib/store";
import { useState } from "react";
import { Loader2 } from "lucide-react";

const LoginForm = () => {
  const [loading, setLoading] = useState(false);

  const form = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    mode: "onSubmit",
    resolver: zodResolver(loginResolver),
  });

  const router = useRouter();
  const { setUser } = useUserStore();

  const handleLogin = async (data: z.infer<typeof loginResolver>) => {
    setLoading(true);
    try {
      const response = await loginUser(data);
      if (response) {
        router.push("/dashboard");
        setUser(response.email);
      }
    } catch (error) {
      console.log("error", error);
    }finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-emerald-50 to-emerald-100 px-4">
      <div className="w-full max-w-md rounded-2xl border border-border bg-background/70 backdrop-blur-md p-8 shadow-2xl">
        <h2 className="text-2xl font-semibold text-center mb-6 text-emerald-700">
          Welcome Back
        </h2>
        <FormProvider {...form}>
          <form
            className="space-y-4"
            onSubmit={form.handleSubmit((data) => handleLogin(data))}
          >
            <div className="w-full">
              <InputComponent
                type="email"
                placeholder="Email"
                name="email"
                required
              />
            </div>
            <div className="w-full">
              <InputComponent
                name="password"
                type="password"
                placeholder="Password"
                required
              />
            </div>
            <Button
              type="submit"
              className="w-full bg-emerald-600 text-white py-2 rounded-md hover:bg-emerald-700 transition duration-200 cursor-pointer"
              disabled={loading}
            >
              {
                loading && <Loader2 className="size-4 animate-spin"/>
              }
              Login
            </Button>
          </form>
        </FormProvider>
      </div>
    </div>
  );
};

export default LoginForm;
