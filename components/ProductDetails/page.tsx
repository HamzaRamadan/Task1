
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
  { name: "Red", class: "bg-red-500" },
  { name: "Blue", class: "bg-blue-300" },
  { name: "Brown", class: "bg-yellow-700" },
  { name: "Sky", class: "bg-sky-400" },
  { name: "Gray", class: "bg-gray-500" },
];

export default function ProductDetails() {
  const [activeImage, setActiveImage] = useState(0);
  const [qty, setQty] = useState(1);
  const price = 300;

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      {/* Breadcrumb */}
      <div className="bg-[#ECECEC66]  my-7 -mt-5 rounded-xl flex flex-col justify-center">
  <div className="flex items-center gap-1 text-sm font-semibold text-[#020202] m-4">
    <span>Home</span>
    <ChevronRight className="w-5 h-5" />
    <span>Our Category</span>
    <ChevronRight className="w-5 h-5" />
    <span className="text-[#8A8A8A]">Product Details</span>
  </div>
</div>


      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Left – Images */}
       
       <div>
  {/* الصورة الرئيسية */}
  <div className="relative bg-gray-100 rounded-2xl p-6">
    <Image
      src={images[activeImage]}
      alt="Product"
      width={500}
      height={500}
      className="mx-auto"
    />
  </div>

 <div className="flex gap-4 mt-4">
  {images.slice(0, 2).map((img, i) => (
    <button
      key={i}
      onClick={() => setActiveImage(i)}
      className={`rounded-xl p-2 border ${
        activeImage === i ? "border-black" : "border-transparent"
      }`}
    >
      <Image src={img} alt="thumb" width={80} height={80} />
    </button>
  ))}

  {images.length > 4 && (
    <div className="relative w-20 h-20 rounded-xl overflow-hidden">
      {/* الصورة الأخيرة من الباقي */}
      <Image
        src={images[4]}
        alt="thumb"
        width={80}
        height={80}
        className="object-cover w-full h-full"
      />
      {/* Overlay داكن */}
      <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
        <span className="text-white font-semibold text-lg">
          +{images.length - 4}
        </span>
      </div>
    </div>
  )}
</div>

</div>

        {/* Right – Details */}
        <div>
          <span className="inline-block text-xs border px-3 py-1 rounded-full mb-3">
            T-Shirt
          </span>

          <h1 className="text-2xl font-semibold mb-3">
            J.VER Man Shirts Solid Long Sleeve Stretch Wrinkle-Free With Blue
          </h1>

          <div className="flex items-center gap-3 mb-4">
            <p className="text-2xl font-bold">${price}.00</p>
            <p className="line-through text-gray-400">$360.00</p>
          </div>

          <p className="text-sm text-gray-500 mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy.
          </p>

          {/* Selects */}
          <div className="space-y-4 mb-6">
            <select className="w-full border rounded-xl px-4 py-3">
              <option>Cotton</option>
            </select>
            <select className="w-full border rounded-xl px-4 py-3">
              <option>2XL</option>
            </select>
          </div>

          {/* Colors */}
          <div className="mb-6">
            <p className="font-medium mb-3">Colors</p>
            <div className="flex gap-3">
              {colors.map((c, i) => (
                <div
                  key={i}
                  className={`w-9 h-9 rounded-full border flex items-center justify-center cursor-pointer`}
                >
                  <div className={`w-6 h-6 rounded-full ${c.class}`} />
                </div>
              ))}
            </div>
          </div>

          {/* Quantity */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-4">
              <button
                onClick={() => setQty(Math.max(1, qty - 1))}
                className="w-10 h-10 rounded-full bg-gray-100"
              >
                −
              </button>
              <span>{qty}</span>
              <button
                onClick={() => setQty(qty + 1)}
                className="w-10 h-10 rounded-full bg-gray-100"
              >
                +
              </button>
            </div>
            <p className="text-xl font-semibold">${qty * price}.00</p>
          </div>

          <button className="w-full bg-[#c9a59b] text-white py-4 rounded-xl font-medium hover:opacity-90">
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
}
