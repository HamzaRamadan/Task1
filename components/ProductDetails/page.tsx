"use client";

import { ChevronRight } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const images = [
  "/product1.png",
  "/product2.png",
  "/product3.png",
  "/product1.png",
  "/product3.png",
];

const colors = [
  { name: "Red", class: "bg-[#D90202]" },
  { name: "Blue", class: "bg-[#B8CCDA]" },
  { name: "Brown", class: "bg-[#988755]" },
  { name: "Sky", class: "bg-[#7198C8]" },
  { name: "Gray", class: "bg-[#5D5D5B]" },
];

export default function ProductDetails() {
  const [activeImage, setActiveImage] = useState(0);
  const [qty, setQty] = useState(1);
  const [showAllThumbs, setShowAllThumbs] = useState(false);
  const [activeColor, setActiveColor] = useState<number>(1); 

  const price = 300;

  const nextImage = () => setActiveImage((prev) => (prev + 1) % images.length);
  const prevImage = () => setActiveImage((prev) => (prev === 0 ? images.length - 1 : prev - 1));

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <div className="bg-[#ECECEC66] rounded-xl mb-8">
        <div className="flex flex-wrap items-center gap-1 text-sm font-semibold text-[#020202] p-4">
          <span>Home</span>
          <ChevronRight className="w-4 h-4" />
          <span>Our Category</span>
          <ChevronRight className="w-4 h-4" />
          {/* على اللاب */}
<span className="hidden sm:inline text-[#8A8A8A]">Product Details</span>

{/* على الموبايل */}
<span className="inline sm:hidden text-[#8A8A8A]">T-Shirt</span>

        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Left – Images */}
        <div className="w-full flex flex-col items-center lg:items-start">
          {/* Main Image */}
          <div
            className="
              relative rounded-3xl overflow-hidden w-full
              h-[260px] sm:h-[320px] md:h-[380px] lg:w-[500px] lg:h-[400px]
            "
            style={{ background: "linear-gradient(0deg, rgba(244,244,244,0.2) 0%, rgba(0,0,0,0.3) 100%)" }}
          >
            {/* Story indicators */}
            <div className="absolute top-3 left-3 right-3 z-20 flex gap-1">
              {images.map((_, i) => (
                <div key={i} className={`h-1 flex-1 rounded-full ${i === activeImage ? "bg-white" : "bg-gray-300"}`} />
              ))}
            </div>

            <Image src={images[activeImage]} alt="Product" fill className="object-contain p-4" />

            {/* Arrows */}
            <button
              onClick={prevImage}
              className="absolute left-3 top-1/2 -translate-y-1/2 z-20 w-9 h-9 rounded-full bg-[#C4C4C4] shadow flex items-center justify-center"
            >
              ‹
            </button>
            <button
              onClick={nextImage}
              className="absolute right-3 top-1/2 -translate-y-1/2 z-20 w-9 h-9 rounded-full bg-[#BE968E] shadow flex items-center justify-center"
            >
              ›
            </button>
          </div>

          {/* Thumbnails */}
          <div className="flex flex-wrap gap-3 mt-4 justify-center lg:justify-start">
            {(showAllThumbs ? images : images.slice(0, 2)).map((img, i) => (
              <button
                key={i}
                onClick={() => setActiveImage(i)}
                className={`relative w-24 h-24 sm:w-28 sm:h-28 md:w-36 md:h-36 rounded-xl p-1 border transition bg-[#F5F5F5]`}
              >
                <Image src={img} alt="thumb" fill className="object-cover rounded-lg p-2" />
              </button>
            ))}

            {!showAllThumbs && images.length > 4 && (
              <button
                onClick={() => setShowAllThumbs(true)}
                className="relative w-24 h-24 sm:w-28 sm:h-28 md:w-36 md:h-36 rounded-xl overflow-hidden"
              >
                <Image src={images[4]} alt="more" fill className="object-cover" />
                <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                  <span className="text-white font-semibold text-lg">
                    +{images.length - 4}
                  </span>
                </div>
              </button>
            )}
          </div>

        <div className="hidden sm:block">
  <Image src="/Layer_1.png" alt="" width={150} height={150} />
</div>

        </div>

        {/* Right – Details */}
        {/* <div className="w-full lg:max-w-[500px]"> */}
        <div className="w-full lg:max-w-130 lg:-mx-20">

          {/* Top Labels */}
          <div className="flex items-center justify-between flex-wrap mb-3">
            <span className="inline-block text-sm border px-3 py-1 rounded-full text-[#BE968E]">T-Shirt</span>
            <div className="flex items-center gap-3 mt-2 lg:mt-0">
              <Image src="/icons/shopping.svg" alt="" width={32} height={32} />
              <Image src="/icons/heart2.svg" alt="" width={32} height={32} />
            </div>
          </div>

          <h1 className="text-2xl font-medium font-Poppins mb-3 text-[#020202]">
            J.VER Man Shirts Solid Long Sleeve Stretch Wrinkle-Free With Blue
          </h1>

          <div className="flex flex-wrap items-center gap-3 mb-1">
            <p className="text-lg font-poppins text-[#020202] font-bold">${price}.00</p>
            <p className="line-through text-[#8A8A8A]">$360.00</p>
          </div>
          <p className="text-[#333333] font-poppins font-normal text-[14px] mb-4">
            This price is exclusive of taxes.
          </p>

          <p className="text-[#020202] font-poppins font-normal text-[16px] mb-5">
            Lorem ipsum dolor sit , consectetuer adipiscing elit, sed diam nonummy Lorem ipsum dolor sit amet, diam nonummy
          </p>
          <div className="w-full max-w-[648px] h-[1px] my-5 bg-[#E6E6E6] rounded-[8px] opacity-100" />

          {/* Select Inputs */}
          <div className="flex flex-col gap-4 mb-6 items-start">
  {/* Type */}
  <div className="relative w-full lg:w-[60%]">
    <label className="absolute -top-2 left-4 bg-white px-2 text-[12px] text-gray-500">Type</label>
    <select className="w-full appearance-none border border-[#00000026] rounded-xl px-4 py-3 pr-10 focus:outline-none">
      <option>Cotton</option>
      <option>Polyester</option>
      <option>Silk</option>
    </select>
    <div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#020202" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="6 9 12 15 18 9" />
      </svg>
    </div>
  </div>

  {/* Size */}
  <div className="relative w-full lg:w-[60%]">
    <label className="absolute -top-2 left-4 bg-white px-2 text-[12px] text-gray-500">Size</label>
    <select className="w-full appearance-none border border-[#00000026] rounded-xl px-4 py-3 pr-10 focus:outline-none">
      <option>2XL</option>
      <option>XL</option>
      <option>Lg</option>
    </select>
    <div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#020202" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="6 9 12 15 18 9" />
      </svg>
    </div>
  </div>
</div>


          {/* Colors */}
          <div className="mb-6">
            <p className="text-[#020202] font-poppins font-medium text-[20px] mb-3">Colors</p>
            <div className="flex flex-wrap gap-6">
              {colors.map((c, i) => (
                <div key={i} onClick={() => setActiveColor(i)} className="flex flex-col items-center cursor-pointer mb-2">
                  <div className={`w-11 h-11 rounded-full flex items-center justify-center ${activeColor === i ? "border-2 border-[#020202]" : "border-none"}`}>
                    <div className="w-10 h-10 rounded-full flex items-center justify-center bg-[#F4F7F9]">
                      <div className={`w-6 h-6 rounded-full ${c.class}`} />
                    </div>
                  </div>
                  {activeColor === i && (
                    <p className="text-[#545454] font-poppins font-medium text-[16px] mt-2">{c.name}</p>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Quantity */}
          <div className="flex flex-col sm:flex-row items-center gap-2 mb-6">
            <div className="flex items-center gap-1">
              <p className="text-[#020202] font-poppins font-medium text-[20px]">Quantity</p>
              <p className="text-[#8A8A8A] font-poppins font-normal text-[16px]">($300.00 for Piece)</p>
            </div>
          </div>

          {/* Quantity Selector + Price + Add To Cart */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-6 w-full">
            {/* Quantity + Price */}
            <div className="flex items-center gap-6 mb-4 sm:mb-0">
              <div className="flex items-center gap-4 p-2 bg-[#F5F5F5] rounded-xl">
                <button onClick={() => setQty(Math.max(1, qty - 1))} className="w-8 h-8 rounded-xl bg-[#FFFFFF] text-[#B0B0B0] flex items-center justify-center">−</button>
                <span className="text-base font-medium">{qty}</span>
                <button onClick={() => setQty(qty + 1)} className="w-8 h-8 rounded-xl bg-[#FFFFFF] text-[#000000] flex items-center justify-center">+</button>
              </div>
              <p className="text-xl font-semibold whitespace-nowrap">${qty * price}.00</p>
            </div>

            {/* Add To Cart Button */}
         <button className="w-full lg:w-auto flex items-center justify-center gap-2 bg-[#c9a59b] text-white py-2 px-6 rounded-xl font-medium hover:opacity-90">
  Add To Cart
  <Image src="/icons/shopping bag.svg" alt="" width={20} height={20} />
</button>


          </div>

        </div>
      </div>
    </div>
  );
}
