
'use client';

import Image from 'next/image';
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
  FaTelegramPlane,
} from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="relative w-full rounded-b-4xl overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/footer.png"
          alt="Footer Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-[#020202B2]" />
      </div>

      {/* Content */}
      <div className="relative z-10 py-16 text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
            
            {/* Logo + Description */}
            <div className="col-span-2 md:col-span-1">
              <div className="flex items-center gap-2 mb-4">
                <Image
                  src="/logoFooter.png"
                  alt="Logo"
                  width={80}
                  height={80}
                />
              </div>
              <p className="text-sm text-[#FFFFFFB2] leading-relaxed">
                Ipsam in eos qui consequatur ab cum maxime. Soluta dolor
                quae ipsam in eos qui consequatur ab cum maxime. Soluta
                dolor quae
              </p>
            </div>
{/* Contact Us - Mobile Only */}
            {/* Contact Us - Mobile Only */}
<div className="md:hidden">
  <h3 className="font-semibold mb-4 text-xl text-white">
    Contact Us
  </h3>
  <ul className="space-y-3 text-base text-[#FFFFFFB2]">
    <li className="hover:text-white cursor-pointer flex items-center gap-3">
      <Image src="/icons/phone.svg" alt="Phone" width={20} height={20} />
      <span>+87 01928491</span>
    </li>
    <li className="hover:text-white cursor-pointer flex items-center gap-3">
      <Image src="/icons/gmail.svg" alt="Email" width={20} height={20} />
      <span>Named@gmail.com</span>
    </li>
    <li className="hover:text-white cursor-pointer flex items-center gap-3">
      <Image src="/icons/location.svg" alt="Location" width={20} height={20} />
      <span>381, Cairo, Egypt</span>
    </li>
  </ul>
</div>


            {/* Let Us Help */}
        <div className="md:pl-0 pl-6">
  <h3 className="font-semibold mb-4 text-xl text-white">
    Let Us Help
  </h3>
  <ul className="space-y-2 text-base text-[#FFFFFFB2]">
    <li className="hover:text-white cursor-pointer">My Account</li>
    <li className="hover:text-white cursor-pointer">FAQs</li>
    <li className="hover:text-white cursor-pointer">Categories</li>
    <li className="hover:text-white cursor-pointer">All Products</li>
  </ul>
</div>


            
            {/* Policies - Desktop Only */}
            <div className="hidden md:block">
              <h3 className="font-semibold mb-4 text-xl text-white">
                Policies
              </h3>
              <ul className="space-y-2 text-base text-[#FFFFFFB2]">
                <li className="hover:text-white cursor-pointer">
                  Refund Policy
                </li>
                <li className="hover:text-white cursor-pointer">
                  About Us
                </li>
                <li className="hover:text-white cursor-pointer">
                  Cancellation Policy
                </li>
                <li className="hover:text-white cursor-pointer">
                  Terms and Conditions
                </li>
                <li className="hover:text-white cursor-pointer">
                  Privacy Policy
                </li>
              </ul>
            </div>

            {/* Email + Social */}
            <div className="col-span-2 md:col-span-1">
              <h3 className="font-semibold mb-4 text-xl text-white">
                Send Email
              </h3>

      
           <div className="flex items-center bg-white rounded-2xl p-1  overflow-hidden mb-6">
   <input
     type="email"
     placeholder="Email address"
     className="flex-1 px-1 py-3 text-sm text-[#8A8A8A] outline-none bg-transparent"
   />
   <button className="bg-[#BE968E] hover:bg-[#b18f86] transition text-white px-4 py-3 text-sm font-medium rounded-xl">
     Send
   </button>
 </div>

              <h4 className="mb-3 text-xl text-white">Follow Us</h4>
              <div className="flex gap-4 text-xl">
                <FaFacebookF className="cursor-pointer hover:text-[#c9a49a]" />
                <FaTwitter className="cursor-pointer hover:text-[#c9a49a]" />
                <FaInstagram className="cursor-pointer hover:text-[#c9a49a]" />
                <FaLinkedinIn className="cursor-pointer hover:text-[#c9a49a]" />
                <FaWhatsapp className="cursor-pointer hover:text-[#c9a49a]" />
                <FaTelegramPlane className="cursor-pointer hover:text-[#c9a49a]" />
              </div>
            </div>

          </div>
        </div>
      </div>
    </footer>
  );
}
