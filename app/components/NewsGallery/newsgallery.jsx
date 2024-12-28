"use client";

import React from "react";
import { Calendar } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import image1 from "@/app/news/image1.png";
import image2 from "@/app/news/image2.png";
import image3 from "@/app/news/image8.png";
import image4 from "@/app/news/image9.png";
import image5 from "@/app/news/image11.png";
import image6 from "@/app/news/image10.png";
import image7 from "@/app/news/image7.png";
import image8 from "@/app/news/image8.png";
import image9 from "@/app/news/image6.png";
import image10 from "@/app/news/image5.png";
import Image from "next/image";

const newsData = [
    {
      id: 1,
      title:
        "Apple Unveils Latest iPhone with Revolutionary Features and Enhanced Performance",
      date: "2024-12-24",
      image: image1,
      category: "Mobile",
    },
    {
      id: 2,
      title:
        "Google Announces New Android Update Packed with Exciting Features and Improvements",
      date: "2024-12-23",
      image: image2,
      category: "Software",
    },
    {
      id: 3,
      title:
        "Gaming Industry Booms as Console Sales Hit Record High During Holiday Season",
      date: "2024-12-22",
      image: image3,
      category: "Gaming",
    },
    {
      id: 4,
      title:
        "AI Technology Makes a Breakthrough in Medical Research, Advancing Patient Care",
      date: "2024-12-21",
      image: image4,
      category: "AI",
    },
    {
      id: 5,
      title:
        "Global Electric Vehicle Market Witnesses Significant Expansion and Innovation",
      date: "2024-12-20",
      image: image5,
      category: "Automotive",
    },
    {
      id: 6,
      title:
        "Space Tourism Reaches New Heights as Commercial Flights Become a Reality",
      date: "2024-12-19",
      image: image6,
      category: "Space",
    },
    {
      id: 7,
      title:
        "Renewable Energy Industry Achieves Milestone with Record Production Levels",
      date: "2024-12-18",
      image: image7,
      category: "Energy",
    },
    {
      id: 8,
      title:
        "Major Cybersecurity Updates Announced to Prepare for Emerging Threats in 2025",
      date: "2024-12-17",
      image: image8,
      category: "Security",
    },
    {
      id: 9,
      title: "Innovative Smart Home Technologies Win Prestigious Awards for 2024",
      date: "2024-12-16",
      image: image9,
      category: "IoT",
    },
    {
      id: 10,
      title:
        "Digital Currency Adoption Accelerates as Global Trends Favor Crypto Integration",
      date: "2024-12-15",
      image: image10,
      category: "Finance",
    },
  ];

const NewsGallery = () => {
  return (
    <>
      <h1 className="text-2xl font-bold mb-4 text-blue-900">Latest News</h1>

      <div className="w-full">
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {newsData.map((item) => (
              <CarouselItem
                key={item.id}
                className="pl-2 md:pl-4"
                style={{ width: "210px", flex: "0 0 210px" }}
              >
                <div className="bg-white rounded-lg shadow-md border overflow-hidden h-full">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={100}
                    height={100}
                    className="w-full h-32 object-contain p-3 bg-gray-200"
                  />
                  <div className="p-4">
                    <div className="flex items-center mb-2">
                      <Calendar className="w-4 h-4 text-blue-600 mr-2" />
                      <span className="text-sm text-gray-600">
                        {new Date(item.date).toLocaleDateString()}
                      </span>
                    </div>
                    <h2 className="text-sm font-semibold text-gray-800 mb-2 line-clamp-2">
                      {item.title}
                    </h2>
                    <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                      {item.category}
                    </span>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
      </>
  );
};

export default NewsGallery;
