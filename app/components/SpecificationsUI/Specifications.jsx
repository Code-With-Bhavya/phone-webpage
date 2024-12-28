"use client";

import React, { useState } from "react";
import { ChevronDown, ChevronLeft, ChevronRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { motion, AnimatePresence } from "framer-motion";
import "swiper/css";
import "swiper/css/navigation";

const phoneSpecs = {
  Performance: { score: 7.0, details: "Processor details here" },
  Design: { score: 8.5, details: "Design specifications" },
  Display: { score: 8.5, details: "Display information" },
  Camera: { score: 8.0, details: "Camera specifications" },
  Battery: { score: 8.5, details: "Battery information" },
  Storage: { score: 0, details: "Storage options" },
  Software: { score: 8.0, details: "Software features" },
  Connectivity: { score: 0, details: "Connectivity options" },
  Sound: { score: 8.0, details: "Audio capabilities" },
  Sensors: { score: 0, details: "Available sensors" },
};

const SpecificationUI = () => {
  const [activeSpec, setActiveSpec] = useState("");
  const categories = Object.keys(phoneSpecs);
  const navigationId = "specs-swiper";

  return (
      <div className="border border-gray-300 rounded-lg">
        <div className="px-3 pt-2 pb-2 bg-[#E8EBFA]">
          <div className="flex justify-between items-start gap-5">
            <h1 className="md:text-xl text-lg font-bold mb-6 text-gray-700 max-w-[700px]">
              Xiaomi Redmi Note 14 Pro+ 5G Specifications
            </h1>
            <div className="flex items-center gap-2">
              <button
                className={`swiper-button-prev-${navigationId}  z-10 bg-white shadow-md rounded-full p-2`}
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                className={`swiper-button-next-${navigationId}  z-10 bg-white shadow-md rounded-full p-2`}
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div className="mb-6 relative">
            <Swiper
              modules={[Navigation]}
              spaceBetween={10}
              slidesPerView="auto"
              className="w-full px-10"
              navigation={{
                prevEl: `.swiper-button-prev-${navigationId}`,
                nextEl: `.swiper-button-next-${navigationId}`,
              }}
            >
              {categories.map((category) => (
                <SwiperSlide key={category} className="!w-auto">
                  <button
                    onClick={() => setActiveSpec(category)}
                    className={`px-4 py-1 rounded-full ${
                      activeSpec === category
                        ? "bg-blue-600 text-white"
                        : "bg-gray-100 text-gray-700"
                    }`}
                  >
                    {category}
                  </button>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
        <hr />
        <div className="space-y-3 p-2">
          {categories.map((category) => (
            <div key={category} className="border rounded-lg overflow-hidden">
              <button
                onClick={() =>
                  setActiveSpec((prevSpec) =>
                    prevSpec === category ? "" : category
                  )
                }
                className="w-full flex items-center justify-between p-2 bg-[#F5F7FF]"
              >
                <div className="flex items-center gap-1">
                  <span className="text-lg font-medium">{category}</span>
                  {phoneSpecs[category].score > 0 && (
                    <span className="text-sm text-blue-500 font-semibold bg-white rounded-full px-3">
                      {phoneSpecs[category].score}/10
                    </span>
                  )}
                </div>
                <motion.div
                  animate={{ rotate: activeSpec === category ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className="w-5 h-5" />
                </motion.div>
              </button>

              <AnimatePresence>
                {activeSpec === category && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="p-4 bg-gray-50 border-t">
                      <p>{phoneSpecs[category].details}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
  );
};

export default SpecificationUI;
