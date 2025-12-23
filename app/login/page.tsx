/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { useRouter } from "next/navigation";
import api from "@/lib/api";
import { LoginForm, LoginResponse } from "@/types/auth";

export default function LoginPage() {
  const router = useRouter();
  const [show, setShow] = useState(false);
  const [form, setForm] = useState<LoginForm>({
    email: "",
    password: "",
  });
  const [error, setError] = useState(""); 

  const login = async () => {
    setError(""); 
    if (!form.email || !form.password) {
      setError("Please enter email and password");
      return;
    }

    try {
      const res = await api.post<LoginResponse>("/auth/login", form);
      localStorage.setItem("token", res.data.data.token);
      localStorage.setItem("userName", res.data.data.name);
      router.push("/dashboard");
    } catch (err: any) {
      setError("Incorrect email or password");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="w-full max-w-[500px] rounded-2xl bg-white shadow-xl px-6 py-8">
        <h1 className="text-3xl font-bold text-center">Login</h1>
        <div className="mt-6 space-y-4">
          <input
            className="w-full rounded-lg border px-4 py-3"
            placeholder="Email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />

          <div className="relative">
            <input
              type={show ? "text" : "password"}
              className="w-full rounded-lg border px-4 py-3 pr-10"
              placeholder="Password"
              value={form.password}
              onChange={(e) => setForm({ ...form, password: e.target.value })}
            />
            <button
              type="button"
              onClick={() => setShow(!show)}
              className="absolute right-3 top-1/2 -translate-y-1/2"
            >
              {show ? <EyeOff /> : <Eye />}
            </button>
          </div>

          {error && <p className="text-red-500 text-l text-center mt-5">{error}</p>} 

          <button
            onClick={login}
            className="w-full cursor-pointer rounded-lg bg-[#3B99CC] py-3 font-semibold text-white"
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
}
