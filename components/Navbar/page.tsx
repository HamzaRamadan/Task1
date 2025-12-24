"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronDown, Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full bg-white shadow-sm rounded-t-4xl">
      <div className="container  mx-auto flex items-center justify-between px-10 py-4">

        {/* Logo + Links */}
        <div className="flex items-center gap-8">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Image
              src="/icons/TT LogoTT Logo 1.svg"
              alt="TinyTales"
              width={40}
              height={40}
            />
          </div>

          {/* Desktop Links */}
          <nav className="hidden lg:flex items-center gap-8 text-sm text-gray-600">
            <Link href="/home" className="flex items-center gap-2 hover:text-black">
              <Image src="/icons/homeIcon.svg" alt="" width={20} height={20} />
              <span>Home</span>
            </Link>

            <Link href="/category" className="flex items-center gap-2 hover:text-black">
              <Image src="/icons/categoryIcon.svg" alt="" width={20} height={20} />
              <span>Our Category</span>
            </Link>

            <Link href="/about" className="flex items-center gap-2 hover:text-black">
              <Image src="/icons/aboutIcon.svg" alt="" width={20} height={20} />
              <span>About Us</span>
            </Link>

            <Link href="/contact" className="flex items-center gap-2 hover:text-black">
              <Image src="/icons/contactIcon.svg" alt="" width={20} height={20} />
              <span>Contact Us</span>
            </Link>

            <Link href="/faqs" className="flex items-center gap-2 hover:text-black">
              <Image src="/icons/FAQsIcon.svg" alt="" width={20} height={20} />
              <span>FAQs</span>
            </Link>
          </nav>
        </div>

        {/* Right Icons - Desktop */}
        <div className="hidden lg:flex items-center gap-5 text-gray-600">
          <Image src="/icons/ShoppingIcon.svg" alt="" width={20} height={20} />
          <Image src="/icons/notification.svg" alt="" width={20} height={20} />
          <Image src="/icons/heart.svg" alt="" width={20} height={20} />

          <div className="flex items-center gap-1 cursor-pointer">
            <span>EN</span>
            <ChevronDown className="w-5 h-5" />
          </div>

          <div className="flex items-center gap-1 cursor-pointer">
            <Image src="/icons/user.svg" alt="" width={20} height={20} />
            <ChevronDown className="w-5 h-5" />
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="lg:hidden bg-white border-t">
          <nav className="flex flex-col gap-4 px-6 py-4 text-gray-700">
            <Link href="/home" onClick={() => setOpen(false)}>Home</Link>
            <Link href="/category" onClick={() => setOpen(false)}>Our Category</Link>
            <Link href="/about" onClick={() => setOpen(false)}>About Us</Link>
            <Link href="/contact" onClick={() => setOpen(false)}>Contact Us</Link>
            <Link href="/faqs" onClick={() => setOpen(false)}>FAQs</Link>
          </nav>
        </div>
      )}
    </header>
  );
}
