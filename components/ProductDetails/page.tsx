// "use client";

// import { ChevronRight } from "lucide-react";
// import Image from "next/image";
// import { useState } from "react";

// const images = [
//   "/product1.png",
//   "/product2.png",
//   "/product3.png",
//   "/product1.png",
//   "/product3.png",
//   "/product1.png",
//   "/product3.png",
//   "/product1.png",
//   "/product3.png",
// ];

// const colors = [
//   { name: "Red", class: "bg-red-500" },
//   { name: "Blue", class: "bg-blue-300" },
//   { name: "Brown", class: "bg-yellow-700" },
//   { name: "Sky", class: "bg-sky-400" },
//   { name: "Gray", class: "bg-gray-500" },
// ];


// export default function ProductDetails() {
//   const [activeImage, setActiveImage] = useState(0);
//   const [qty, setQty] = useState(1);
//   const price = 300;

//   const nextImage = () => {
//   setActiveImage((prev) => (prev + 1) % images.length);
// };

// const prevImage = () => {
//   setActiveImage((prev) =>
//     prev === 0 ? images.length - 1 : prev - 1
//   );
// };


// const [showAllThumbs, setShowAllThumbs] = useState(false);

//   return (
//     <div className="max-w-7xl mx-auto px-4 py-10">
//       {/* Breadcrumb */}
//       <div className="bg-[#ECECEC66]  my-7 -mt-5 rounded-xl flex flex-col justify-center">
//         <div className="flex items-center gap-1 text-sm font-semibold text-[#020202] m-4">
//           <span>Home</span>
//           <ChevronRight className="w-5 h-5" />
//           <span>Our Category</span>
//           <ChevronRight className="w-5 h-5" />
//           <span className="text-[#8A8A8A]">Product Details</span>
//         </div>
//       </div>

//       {/* <div className="grid grid-cols-1 lg:grid-cols-2 gap-10"> */}
//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

//         {/* Left – Images */}

//         {/* <div> */}
//         <div className="justify-self-start w-full max-w-[520px]">

//           {/* الصورة الرئيسية */}
  
// <div className="relative flex justify-end rounded-2xl w-[500px] h-[400px] overflow-hidden"
//  style={{
//     background:
//       "linear-gradient(0deg, rgba(244, 244, 244, 0.2) 0%, rgba(0, 0, 0, 0.3) 100%)",
//   }}>

//   {/* Story indicators */}
//   <div className="absolute top-3 left-3 right-3 z-20 flex gap-1">
//     {images.map((_, i) => (
//       <div
//         key={i}
//         className={`h-1 flex-1 rounded-full transition-all duration-300 ${
//           i === activeImage ? "bg-[#fff]" : "bg-[#D4D4D4]"
//         }`}
//       />
//     ))}
//   </div>

//   {/* Image */}
//   <Image
//     src={images[activeImage]}
//     alt="Product"
//     fill
//     className="object-contain "
//   />

//   {/* Left Arrow */}
//   <button
//     onClick={prevImage}
//     className="absolute left-3 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white/80 flex items-center justify-center shadow hover:bg-white"
//   >
//     ‹
//   </button>

//   {/* Right Arrow */}
//   <button
//     onClick={nextImage}
//     className="absolute right-3 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white/80 flex items-center justify-center shadow hover:bg-white"
//   >
//     ›
//   </button>
// </div>

//           <div className="flex gap-4 mt-4 flex-wrap">
//   {(showAllThumbs ? images : images.slice(0, 2)).map((img, i) => (
//     <button
//       key={i}
//       onClick={() => setActiveImage(i)}
//       className={`relative w-36 h-36 rounded-xl p-1 border transition
//         ${
//           activeImage === i
//             ? "border-black"
//             : "border-transparent"
//         }`}
//     >
//       <Image
//         src={img}
//         alt="thumb"
//         fill
//         className="object-cover rounded-lg"
//       />
//     </button>
//   ))}

//   {/* +X */}
//   {!showAllThumbs && images.length > 4 && (
//     <button
//       onClick={() => setShowAllThumbs(true)}
//       className="relative w-36 h-36 rounded-xl overflow-hidden"
//     >
//       <Image
//         src={images[4]}
//         alt="more"
//         fill
//         className="object-cover"
//       />
//       <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
//         <span className="text-white font-semibold text-lg">
//           +{images.length - 4}
//         </span>
//       </div>
//     </button>
//   )}
// </div>

//         </div>

//         {/* Right – Details */}
//         <div className="justify-self-start w-full -mx-20">
        
//           <span className="inline-block text-xs border px-3 py-1 rounded-full mb-3">
//             T-Shirt
//           </span>

//           <h1 className="text-2xl font-semibold mb-3">
//             J.VER Man Shirts Solid Long Sleeve Stretch Wrinkle-Free With Blue
//           </h1>

//           <div className="flex items-center gap-3 mb-4">
//             <p className="text-2xl font-bold">${price}.00</p>
//             <p className="line-through text-gray-400">$360.00</p>
//           </div>

//           <p className="text-sm text-gray-500 mb-6">
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam
//             nonummy.
//           </p>

//           {/* Selects */}
//           <div className="space-y-4 mb-6">
//             <select className="w-full border rounded-xl px-4 py-3">
//               <option>Cotton</option>
//             </select>
//             <select className="w-full border rounded-xl px-4 py-3">
//               <option>2XL</option>
//             </select>
//           </div>

//           {/* Colors */}
//           <div className="mb-6">
//             <p className="font-medium mb-3">Colors</p>
//             <div className="flex gap-3">
//               {colors.map((c, i) => (
//                 <div
//                   key={i}
//                   className={`w-9 h-9 rounded-full border flex items-center justify-center cursor-pointer`}
//                 >
//                   <div className={`w-6 h-6 rounded-full ${c.class}`} />
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Quantity */}
//           <div className="flex items-center justify-between mb-6">
//             <div className="flex items-center gap-4">
//               <button
//                 onClick={() => setQty(Math.max(1, qty - 1))}
//                 className="w-10 h-10 rounded-full bg-gray-100"
//               >
//                 −
//               </button>
//               <span>{qty}</span>
//               <button
//                 onClick={() => setQty(qty + 1)}
//                 className="w-10 h-10 rounded-full bg-gray-100"
//               >
//                 +
//               </button>
//             </div>
//             <p className="text-xl font-semibold">${qty * price}.00</p>
//           </div>

//           <button className="w-full bg-[#c9a59b] text-white py-4 rounded-xl font-medium hover:opacity-90">
//             Add To Cart
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }



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
  const [showAllThumbs, setShowAllThumbs] = useState(false);

  const price = 300;

  const nextImage = () => {
    setActiveImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setActiveImage((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <div className="bg-[#ECECEC66] rounded-xl mb-8">
        <div className="flex items-center gap-1 text-sm font-semibold text-[#020202] p-4 flex-wrap">
          <span>Home</span>
          <ChevronRight className="w-4 h-4" />
          <span>Our Category</span>
          <ChevronRight className="w-4 h-4" />
          <span className="text-[#8A8A8A]">Product Details</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Left – Images */}
        <div className="w-full flex flex-col items-center lg:items-start">
          {/* Main Image */}
          <div
            className="
              relative rounded-2xl overflow-hidden w-full
              h-[260px]
              sm:h-[320px]
              md:h-[380px]
              lg:w-[500px] lg:h-[400px]
            "
            style={{
              background:
                "linear-gradient(0deg, rgba(244,244,244,0.2) 0%, rgba(0,0,0,0.3) 100%)",
            }}
          >
            {/* Story indicators */}
            <div className="absolute top-3 left-3 right-3 z-20 flex gap-1">
              {images.map((_, i) => (
                <div
                  key={i}
                  className={`h-1 flex-1 rounded-full ${
                    i === activeImage ? "bg-white" : "bg-gray-300"
                  }`}
                />
              ))}
            </div>

            <Image
              src={images[activeImage]}
              alt="Product"
              fill
              className="object-contain p-4"
            />

            {/* Arrows */}
            <button
              onClick={prevImage}
              className="absolute left-3 top-1/2 -translate-y-1/2 z-20 w-9 h-9 rounded-full bg-white/80 shadow flex items-center justify-center"
            >
              ‹
            </button>
            <button
              onClick={nextImage}
              className="absolute right-3 top-1/2 -translate-y-1/2 z-20 w-9 h-9 rounded-full bg-white/80 shadow flex items-center justify-center"
            >
              ›
            </button>
          </div>

          {/* Thumbnails */}
          <div className="flex gap-3 mt-4 flex-wrap justify-center lg:justify-start">
            {(showAllThumbs ? images : images.slice(0, 2)).map((img, i) => (
              <button
                key={i}
                onClick={() => setActiveImage(i)}
                className={`relative
                  w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32
                  rounded-xl p-1 border transition
                  ${activeImage === i ? "border-black" : "border-transparent"}
                `}
              >
                <Image
                  src={img}
                  alt="thumb"
                  fill
                  className="object-cover rounded-lg"
                />
              </button>
            ))}

            {!showAllThumbs && images.length > 4 && (
              <button
                onClick={() => setShowAllThumbs(true)}
                className="relative w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-xl overflow-hidden"
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
        </div>

        {/* Right – Details */}
        {/* <div className="w-full lg:max-w-[520px]"> */}
        <div className="w-full lg:max-w-[520px] lg:-mx-20">

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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>

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
                  className="w-9 h-9 rounded-full border flex items-center justify-center cursor-pointer"
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
