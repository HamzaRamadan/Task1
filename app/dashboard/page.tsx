/* eslint-disable react-hooks/set-state-in-effect */
"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function DashboardPage() {
  const router = useRouter();
  const [name, setName] = useState("");

  useEffect(() => {
    const storedName = localStorage.getItem("userName");
    if (!storedName) {
      router.push("/login"); 
    } else {
      setName(storedName);
    }
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userName");
    router.push("/login");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4 relative">
      {/* Logout Button Top Right of Page */}
      <button
        onClick={handleLogout}
        className="fixed top-4 right-4 rounded-lg bg-red-500 hover:bg-red-600 py-2 px-4 font-semibold text-white z-50"
      >
        Logout
      </button>

      <div className="w-full max-w-md rounded-2xl bg-white shadow-lg p-8 text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome, {name}</h1>
        <p className="text-gray-600 mb-6">
          You have successfully logged in. Enjoy your dashboard!
        </p>

        <button
          onClick={() => router.push("/home")}
          className="w-full rounded-lg bg-[#BE968E] hover:bg-[#a87f73] py-3 font-semibold text-white"
        >
          View Home Page
        </button>
      </div>
    </div>
  );
}
