
"use client";
import { MessageCircle } from "lucide-react";
import Image from "next/image";
import React from "react";

type RatingBarProps = {
  stars: number;
  percent: number;
};

const RatingBar = ({ stars, percent }: RatingBarProps) => {
  return (
    <div className="flex items-center gap-3">
      <div className="flex items-center gap-1 w-10">
        <Image src="/icons/star.png" alt="" width={20} height={20} />
        <span className="text-lg font-medium">{stars}</span>
      </div>

      <div className="flex-1 h-2 bg-[#E6E6E6] rounded-full overflow-hidden">
        <div
          className="h-full bg-[#BE968E]"
          style={{ width: `${percent}%` }}
        />
      </div>

      <span className="text-lg text-[#545454] w-10 text-right">
        %{percent}
      </span>
    </div>
  );
};

const ReviewItem = () => {
  return (
    <div className="border-b border-[#F4F7F9] py-4 sm:py-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 sm:gap-0 mb-2">
        <div className="flex items-center gap-2 flex-wrap">
          <h4 className="font-poppins font-semibold text-[16px] sm:text-[20px] leading-[140%] opacity-100">
            Alex Daewn
          </h4>
          <div className="flex text-[#C7A59B] text-sm">
            <Image src="/icons/starts.png" alt="" width={100} height={100} />
          </div>
        </div>
        <span className="text-[#545454] font-poppins font-medium text-[12px] sm:text-[14px] opacity-100">
          4 months ago
        </span>
      </div>
      <p className="text-[#020202] font-poppins font-normal text-[14px] sm:text-[16px] leading-[140%] mt-2 sm:mt-3 w-full">
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy dolor sit Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
      </p>
    </div>
  );
};

export default function RatingReviews() {
  return (
    <section className="w-full max-w-6xl mx-auto p-4 sm:p-6">
      {/* Header */}
      <h2 className="text-2xl sm:text-2xl font-semibold mb-4 sm:mb-6 text-[#020202] font-Poppins">
        Rating & Reviews
        <div className="w-[40px] h-[4px] bg-[#BE968E] rounded-[16px] opacity-100 mt-1" />
      </h2>

      {/* Top Section */}
      <div className="flex flex-col md:flex-row md:gap-6 mb-6 md:mb-10">
        {/* Average */}
        <div className="flex justify-start md:justify-center mb-4 md:mb-0">
          <div className="flex items-end gap-2">
            <span className="text-[#020202] font-[500] text-[50px] sm:text-[80px] md:text-[120px] leading-[100%] opacity-100">
              4,5
            </span>
            <span className="text-[#B0B0B0] font-[500] text-[18px] sm:text-[24px] md:text-[24px] leading-[100%] opacity-100">
              /5
            </span>
          </div>
        </div>

        {/* Rating Bars */}
        <div className="flex-1 space-y-2 sm:space-y-3 mb-4 md:mb-0">
          <RatingBar stars={5} percent={67} />
          <RatingBar stars={4} percent={15} />
          <RatingBar stars={3} percent={6} />
          <RatingBar stars={2} percent={3} />
          <RatingBar stars={1} percent={9} />
        </div>

        {/* Total Reviews */}
        <div className="flex flex-col md:items-end items-start gap-2 sm:gap-4">
          <span className="text-[#545454] font-normal text-[12px] sm:text-[16px] leading-[100%]">
            Total Reviews
          </span>
          <span className="text-[#020202] font-semibold text-[30px] sm:text-[60px] leading-[100%]">
            3.0K
          </span>
          <button className="flex items-center justify-center gap-2 bg-[#c9a59b] text-white h-[40px] sm:h-[44px] px-4 sm:px-6 rounded-xl font-medium hover:opacity-90 w-full md:w-fit">
            Add comment
            <MessageCircle size={20} strokeWidth={2.5} />
          </button>
        </div>
      </div>

      {/* Reviews */}
      <div className="space-y-4 sm:space-y-6">
        <ReviewItem />
        <ReviewItem />
        <ReviewItem />
        <ReviewItem />

        <div className="relative w-full flex flex-col sm:flex-row items-center">
          {/* الصورة على الشمال */}
          <div className="hidden sm:block sm:absolute left-0 max-w-[150px]">
            <Image src="/Layer_1.png" alt="" width={150} height={150} />
          </div>

          {/* الزرار في الوسط */}
          <div className="w-full sm:flex-1 flex justify-center mt-4 sm:mt-0">
            <button className="bg-[#F5F5F5] w-full sm:w-[207px] h-[50px] sm:h-[53px] rounded-[12px] flex items-center justify-center p-3">
              <span className="text-[#BE968E] font-poppins font-semibold text-[14px] leading-[100%] text-center">
                View More Comments
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
