"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function VerifyPage() {
  const router = useRouter();
  const [code, setCode] = useState("");
  const [error, setError] = useState("");

  const handleVerify = () => {
    setError("");

    if (!code) {
      setError("Please enter verification code");
      return;
    }

    if (code === "123456") {
      router.push("/login");
    } else {
      setError("Invalid verification code");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="w-full max-w-[500px] rounded-2xl bg-white shadow-xl px-6 py-8">
        <h1 className="text-3xl font-bold text-center">Verify Account</h1>

        <div className="mt-6 space-y-4">
          <input
            className="w-full rounded-lg border px-4 py-3"
            placeholder="Verification Code"
            value={code}
            onChange={(e) => setCode(e.target.value)}
          />

          {error && <p className="text-red-500 text-l text-center mt-3">{error}</p>} 

          <button
            onClick={handleVerify}
            className="w-full cursor-pointer rounded-lg bg-[#3B99CC] py-3 font-semibold text-white"
          >
            Verify
          </button>
        </div>
      </div>
    </div>
  );
}
