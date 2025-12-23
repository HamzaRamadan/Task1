"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const items = [
  {
    id: 1,
    title: "J.VER Women's Dress Shirts Solid Long Sleeve Stretch Wrinkle-Free",
    category: "Dresses",
    price: "AED 900",
    oldPrice: null,
    rating: 4.5,
    reviews: 2910,
    image: "/item1.png",
    colors: ["#c7a39b", "#000000", "#e5e5e5"],
    discount: null,
  },
  {
    id: 2,
    title: "J.VER Women's Dress Shirts Solid Long Sleeve Stretch Wrinkle-Free",
    category: "Dresses",
    price: "AED 900",
    oldPrice: "AED 1300",
    rating: 4.5,
    reviews: 2910,
    image: "/item2.png",
    colors: ["#c7a39b", "#000000", "#e5e5e5"],
    discount: "25% OFF",
  },
  {
    id: 3,
    title: "J.VER Women's Dress Shirts Solid Long Sleeve Stretch Wrinkle-Free",
    category: "Dresses",
    price: "AED 900",
    oldPrice: null,
    rating: 4.5,
    reviews: 2910,
    image: "/item3.png",
    colors: ["#c7a39b", "#000000", "#e5e5e5"],
    discount: null,
  },
  {
    id: 4,
    title: "J.VER Women's Dress Shirts Solid Long Sleeve Stretch Wrinkle-Free",
    category: "Dresses",
    price: "AED 900",
    oldPrice: "AED 1300",
    rating: 4.5,
    reviews: 2910,
    image: "/item4.png",
    colors: ["#c7a39b", "#000000", "#e5e5e5"],
    discount: "25% OFF",
  },
];

const extendedItems = [...items, ...items];
const TRANSITION_TIME = 500;

export default function SimilarItems() {
  const [index, setIndex] = useState(0);
  const [withTransition, setWithTransition] = useState(true);
  const [itemsPerView, setItemsPerView] = useState(4);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) setItemsPerView(2); // فون
      else if (window.innerWidth < 1024) setItemsPerView(3); // تابلت
      else setItemsPerView(4); // لاب
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const next = () => {
    setWithTransition(true);
    setIndex((prev) => prev + 1);
  };

  const prev = () => {
    setWithTransition(true);
    setIndex((prev) => prev - 1);
  };

  useEffect(() => {
    if (index >= items.length) {
      setTimeout(() => {
        setWithTransition(false);
        setIndex(0);
      }, TRANSITION_TIME);
    }
    if (index < 0) {
      setTimeout(() => {
        setWithTransition(false);
        setIndex(items.length - 1);
      }, TRANSITION_TIME);
    }
  }, [index]);

  return (
    <section className="w-full px-8 py-10">
      <h2 className="text-2xl font-semibold mb-6">
        Similar Items
        <div className="w-[40px] h-[4px] bg-[#BE968E] rounded-full mt-1" />
      </h2>

      {/* Slider */}
      <div className="relative overflow-hidden">
        <div
          className={`flex gap-6 ${
            withTransition ? "transition-transform duration-500 ease-in-out" : ""
          }`}
          style={{
            transform: `translateX(-${index * (100 / itemsPerView)}%)`,
          }}
        >
          {extendedItems.map((item, i) => (
            <div
              key={i}
              className={`flex-shrink-0 w-[calc(50%-1.5rem)] sm:w-[calc(33.333%-1.5rem)] lg:w-[calc(25%-1.5rem)] bg-white relative`}
            >
              {item.discount && (
                <span className="absolute top-4 left-4 rounded-full bg-[#f4eaea] px-3 py-1 text-xs text-[#b26b6b]">
                  {item.discount}
                </span>
              )}

              <div className="border border-[#0000000D] rounded-2xl p-4">
                <div className="absolute top-4 right-4 flex items-center gap-3">
                  <Image
                    src="/icons/shopping.svg"
                    alt=""
                    width={32}
                    height={32}
                  />
                  <Image
                    src="/icons/heart2.svg"
                    alt=""
                    width={32}
                    height={32}
                  />
                </div>

                <div className="relative h-56 w-full my-8">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-contain"
                  />
                </div>

                <div className="flex items-center justify-between mb-2">
                  <p className="text-xs text-[#545454] font-bold">
                    {item.category}
                  </p>

                  <div className="flex items-center gap-1 text-sm">
                    <Image src="/icons/star.png" alt="" width={18} height={18} />
                    <span className="text-[#020202]">{item.rating}</span>
                    <span className="text-[#545454] text-xs">({item.reviews})</span>
                  </div>
                </div>

                <p className="text-[#020202] font-Poppins font-medium text-[14px] leading-[14px] line-clamp-2 w-[288px] h-[42px]">
                  {item.title}
                </p>

                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <span className="font-semibold">{item.price}</span>
                    {item.oldPrice && (
                      <span className="text-gray-400 line-through text-sm">
                        {item.oldPrice}
                      </span>
                    )}
                  </div>

                  <div className="flex items-center gap-2">
                    {item.colors.map((c, i) => (
                      <span
                        key={i}
                        className="h-5 w-5 rounded-full"
                        style={{ backgroundColor: c }}
                      />
                    ))}
                    <span className="text-lg text-[#020202]">+2</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Arrows */}
      <div className="flex justify-center gap-4 mt-8">
        <button
          onClick={prev}
          className="h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center"
        >
          <ChevronLeft />
        </button>
        <button
          onClick={next}
          className="h-10 w-10 rounded-full bg-[#b28a7a] text-white flex items-center justify-center"
        >
          <ChevronRight />
        </button>
      </div>
    </section>
  );
}
