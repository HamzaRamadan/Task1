/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { useRouter } from "next/navigation";
import PhoneInput from "react-phone-input-2";
import api from "@/lib/api";
import {  RegisterForm, RegisterResponse, ApiError } from "@/types/auth";

export default function RegisterPage() {
  const router = useRouter();

  const [showPass, setShowPass] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(""); 

  const [form, setForm] = useState<RegisterForm>({
    name: "",
    email: "",
    mobile: "",
    mobile_country_code: "20",
    password: "",
    password_confirmation: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(""); 
    setLoading(true);

    if (form.password !== form.password_confirmation) {
      setError("Password and confirmation do not match");
      setLoading(false);
      return;
    }

    try {
      const res = await api.post<RegisterResponse>("/auth/register", form);
      localStorage.setItem("token", res.data.data.token);
      localStorage.setItem("userName", res.data.data.name);
      router.push("/verify");
    } catch (err: any) {
      const apiErr: ApiError = err.response?.data;
      setError(apiErr?.message || "حدث خطأ أثناء التسجيل");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative min-h-screen w-full flex items-center justify-center bg-white">
      <div className="w-full max-w-md rounded-2xl bg-white shadow-lg p-8">
        <h1 className="text-3xl font-bold text-center mb-2">Sign Up</h1>
        <p className="text-center text-sm text-gray-500 mb-6">
          Create your account to access your dashboard
        </p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            className="w-full rounded-lg border px-4 py-3"
            placeholder="Full Name"
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            required
          />
          <input
            className="w-full rounded-lg border px-4 py-3"
            placeholder="Email"
            type="email"
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            required
          />

           



<PhoneInput
  country={"eg"}
  value={form.mobile}
  onChange={(phone, country) => {
    const c = country as import("react-phone-input-2").CountryData;
    setForm({
      ...form,
      mobile: phone,
      mobile_country_code: c.dialCode,
    });
  }}
  containerClass="w-full relative flex rounded-xl border border-[#000]" // شيل overflow-hidden
  inputClass="w-full px-4 py-6 text-sm text-black outline-none border-none"
  buttonClass="h-full px-3 bg-white border-r border-[#000]"
  dropdownClass="absolute top-full left-0 w-full mt-1 bg-white border border-[#000] rounded-b-xl shadow-lg max-h-60 overflow-y-auto z-50"
  inputProps={{
    required: true,
    placeholder: "Phone",
  }}
/>

          {/* Password */}
          <div className="relative">
            <input
              type={showPass ? "text" : "password"}
              className="w-full rounded-lg border px-4 py-3 pr-10"
              placeholder="Password"
              onChange={(e) => setForm({ ...form, password: e.target.value })}
              required
            />
            <button
              type="button"
              onClick={() => setShowPass(!showPass)}
              className="absolute right-3 top-1/2 -translate-y-1/2"
            >
              {showPass ? <EyeOff /> : <Eye />}
            </button>
          </div>

          {/* Confirm Password */}
          <div className="relative">
            <input
              type={showConfirm ? "text" : "password"}
              className="w-full rounded-lg border px-4 py-3 pr-10"
              placeholder="Confirm Password"
              onChange={(e) =>
                setForm({ ...form, password_confirmation: e.target.value })
              }
              required
            />
            <button
              type="button"
              onClick={() => setShowConfirm(!showConfirm)}
              className="absolute right-3 top-1/2 -translate-y-1/2"
            >
              {showConfirm ? <EyeOff /> : <Eye />}
            </button>
          </div>

          {/* رسالة الخطأ */}
          {error && <p className="text-red-500 text-sm">{error}</p>}

          <button
            type="submit"
            disabled={loading}
            className="w-full cursor-pointer rounded-lg bg-[#3B99CC] py-3 font-semibold text-white hover:bg-[#1f8ecf]"
          >
            {loading ? "Loading..." : "Create Account"}
          </button>

          <p className="text-center text-sm text-gray-600">
            Already have an account?{" "}
            <button
              type="button"
              onClick={() => router.push("/login")}
              className="font-bold underline text-black cursor-pointer"
            >
              Login
            </button>
          </p>
        </form>
      </div>
    </div>
  );
}
