"use client";

import React from "react";
// import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

// Import images
import image1 from "@/app/news/image1.png";
import image2 from "@/app/news/image2.png";
import image3 from "@/app/news/image8.png";
import image4 from "@/app/news/image9.png";
import image5 from "@/app/news/image11.png";
import image6 from "@/app/news/image10.png";

const comparisons = [
  {
    id: 1,
    mainPhone: "Xiaomi Redmi Note 14 Pro+ 5G",
    comparePhone: "Xiaomi Redmi Note 14 Pro 5G",
    mainImage: image1,
    compareImage: image2,
  },
  {
    id: 2,
    mainPhone: "Xiaomi Redmi Note 14 Pro+ 5G",
    comparePhone: "Xiaomi Redmi Note 13 Pro Plus",
    mainImage: image1,
    compareImage: image3,
  },
  {
    id: 3,
    mainPhone: "Xiaomi Redmi Note 14 Pro+ 5G",
    comparePhone: "Motorola Edge 50 Pro 5G",
    mainImage: image1,
    compareImage: image4,
  },
  {
    id: 4,
    mainPhone: "Xiaomi Redmi Note 14 Pro+ 5G",
    comparePhone: "vivo V40",
    mainImage: image1,
    compareImage: image5,
  },
  {
    id: 5,
    mainPhone: "Xiaomi Redmi Note 14 Pro+ 5G",
    comparePhone: "iQOO Z9s Pro",
    mainImage: image1,
    compareImage: image6,
  },
];

const PhoneComparisonSlider = () => {
  return (
      <div className="border p-2 rounded-lg">
        <h1 className="md:text-xl text-lg font-bold text-gray-800 mb-5">
          Popular Comparisons for Xiaomi Redmi Note 14 Pro+ 5G and Similar
          mobiles
        </h1>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full relative"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {comparisons.map((item) => (
              <CarouselItem
                key={item.id}
                className="pl-2 md:pl-4"
                style={{ width: "200px", flex: "0 0 200px" }}
              >
                <div className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow h-72 mb-2">
                  <div className="flex items-center gap-2 relative">
                    <div className="bg-gray-200 rounded-lg p-2">
                      <Image
                        src={item.mainImage}
                        alt={item.mainPhone}
                        className="w-32 h-32 object-contain"
                        width={100}
                        height={100}
                      />
                    </div>
                    <div className="absolute left-1/2 -translate-x-1/2 flex items-center justify-center w-8 h-8 bg-gray-100 rounded-full z-10">
                      <span className="text-gray-500 font-medium">VS</span>
                    </div>
                    <div className="bg-gray-200 rounded-lg p-2">
                      <Image
                        src={item.compareImage}
                        alt={item.comparePhone}
                        className="w-32 h-32 object-contain"
                        width={100}
                        height={100}
                      />
                    </div>
                  </div>

                  <div className="mt-4 text-center">
                    <p className="text-sm font-medium text-gray-700">
                      {item.mainPhone}
                    </p>
                    <p className="text-xs text-gray-500 mt-1">VS</p>
                    <p className="text-sm font-medium text-gray-700">
                      {item.comparePhone}
                    </p>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
  );
};

export default PhoneComparisonSlider;
