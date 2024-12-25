/* eslint-disable */
'use client'

import { ChevronLeft, ChevronRight, Cpu, Smartphone, Camera, Battery, MemoryStickIcon as Memory } from 'lucide-react'
import { useState, useRef } from 'react'

const phones = [
  {
    name: "Xiaomi Redmi Note 14 Pro+ 5G",
    price: "₹30,999",
    rating: "8",
    processor: "Snapdragon 7s Gen 3",
    display: "6.67\" (16.94 cm)",
    displayFeature: "120Hz Display",
    rearCamera: "50+8+50 MP Rear",
    frontCamera: "20 MP Front",
    ram: "8 GB RAM",
    storage: "128 GB Storage",
    battery: "6200 mAh",
    charging: "90W Charging",
  },
  {
    name: "Xiaomi Redmi Note 13 Pro 5G",
    price: "₹24,999",
    rating: "8.4",
    processor: "MediaTek Dimensity 7200 Ultra",
    display: "6.67\" (16.94 cm)",
    displayFeature: "120Hz Display",
    rearCamera: "200+8+2 MP Rear",
    frontCamera: "16 MP Front",
    ram: "8 GB RAM",
    storage: "256 GB Storage",
    battery: "5000 mAh",
    charging: "120W Charging",
  },
  {
    name: "Motorola Edge 50 Pro 5G",
    price: "₹27,999",
    rating: "8.2",
    processor: "Snapdragon 7 Gen 3",
    display: "6.67\" (16.94 cm)",
    displayFeature: "120Hz Display",
    rearCamera: "50+13+10 MP Rear",
    frontCamera: "50 MP Front",
    ram: "8 GB RAM",
    storage: "256 GB Storage",
    battery: "4500 mAh",
    charging: "125W Charging",
  },
]

export default function PhoneComparison() {
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [showLeftScroll, setShowLeftScroll] = useState(false)
  const [showRightScroll, setShowRightScroll] = useState(true)

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current
      setShowLeftScroll(scrollLeft > 0)
      setShowRightScroll(scrollLeft < scrollWidth - clientWidth - 10)
    }
  }

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 300
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      })
    }
  }

  return (
    <div className="max-w-[1200px] mx-auto bg-white">
      {/* Comparison Grid */}
      <div className="relative">
        {/* Scroll Buttons */}
        {showLeftScroll && (
          <button 
            onClick={() => scroll('left')}
            className="absolute left-[200px] md:left-[270px] top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-1"
          >
            <ChevronLeft className="w-4 h-4 md:w-6 md:h-6" />
          </button>
        )}
        {showRightScroll && (
          <button 
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-1"
          >
            <ChevronRight className="w-4 h-4 md:w-6 md:h-6" />
          </button>
        )}

        <div className="flex">
          {/* Sticky First Column */}
          <div className="w-[200px] md:w-[270px] flex-shrink-0 border-r bg-white z-20">
            <div className="p-2 md:p-4 border-b h-[200px] md:h-[280px] flex items-center justify-center">
              <div className="text-center">
                <img 
                  src="/placeholder.svg?height=160&width=80" 
                  alt={phones[0].name}
                  className="mx-auto mb-2 md:mb-4 h-28 md:h-40"
                />
                <h3 className="text-xs md:text-sm font-medium text-blue-700 mb-1 md:mb-2">{phones[0].name}</h3>
                <p className="text-sm md:text-lg font-semibold">{phones[0].price}</p>
                <div className="flex items-center justify-center gap-1 mt-1">
                  <span className="text-xs md:text-sm font-medium text-green-600">{phones[0].rating}</span>
                  <span className="text-[10px] md:text-xs text-gray-500">/10 by Expert</span>
                </div>
              </div>
            </div>
            <div className="divide-y">
              <div className="p-2 md:p-4 text-xs md:text-sm flex items-center bg-[#F6F6F8]">
                <Cpu className="w-4 h-4 mr-2" />
                <p className="text-gray-600">{phones[0].processor}</p>
              </div>
              <div className="p-2 md:p-4 text-xs md:text-sm flex items-center">
                <Smartphone className="w-4 h-4 mr-2" />
                <div>
                  <p className="text-gray-600">{phones[0].display}</p>
                  <p className="text-gray-500">{phones[0].displayFeature}</p>
                </div>
              </div>
              <div className="p-2 md:p-4 text-xs md:text-sm flex items-center bg-[#F6F6F8]">
                <Camera className="w-4 h-4 mr-2" />
                <div>
                  <p className="text-gray-600">{phones[0].rearCamera}</p>
                  <p className="text-gray-600">{phones[0].frontCamera}</p>
                </div>
              </div>
              <div className="p-2 md:p-4 text-xs md:text-sm flex items-center">
                <Memory className="w-4 h-4 mr-2" />
                <div>
                  <p className="text-gray-600">{phones[0].ram}</p>
                  <p className="text-gray-500">{phones[0].storage}</p>
                </div>
              </div>
              <div className="p-2 md:p-4 text-xs md:text-sm flex items-center bg-[#F6F6F8]">
                <Battery className="w-4 h-4 mr-2" />
                <div>
                  <p className="text-gray-600">{phones[0].battery}</p>
                  <p className="text-gray-500">{phones[0].charging}</p>
                </div>
              </div>
              <div className="p-2 md:p-4">
                <button className="text-blue-600 text-xs md:text-sm font-medium">+ Compare</button>
              </div>
            </div>
          </div>

          {/* Scrollable Columns */}
          <div 
            className="flex overflow-x-auto hide-scrollbar"
            ref={scrollContainerRef}
            onScroll={handleScroll}
          >
            {phones.slice(1).map((phone, i) => (
              <div key={i} className={`w-[200px] md:w-[270px] flex-shrink-0 border-r`}>
                <div className="p-2 md:p-4 border-b h-[200px] md:h-[280px] flex items-center justify-center">
                  <div className="text-center">
                    <img 
                      src="/placeholder.svg?height=160&width=80" 
                      alt={phone.name}
                      className="mx-auto mb-2 md:mb-4 h-28 md:h-40"
                    />
                    <h3 className="text-xs md:text-sm font-medium text-blue-700 mb-1 md:mb-2">{phone.name}</h3>
                    <p className="text-sm md:text-lg font-semibold">{phone.price}</p>
                    <div className="flex items-center justify-center gap-1 mt-1">
                      <span className="text-xs md:text-sm font-medium text-green-600">{phone.rating}</span>
                      <span className="text-[10px] md:text-xs text-gray-500">/10 by Expert</span>
                    </div>
                  </div>
                </div>
                <div className="divide-y">
                  <div className="p-2 md:p-4 text-xs md:text-sm bg-[#F6F6F8]">
                    <p className="text-gray-600">{phone.processor}</p>
                  </div>
                  <div className="p-2 md:p-4 text-xs md:text-sm">
                    <p className="text-gray-600">{phone.display}</p>
                    <p className="text-gray-500">{phone.displayFeature}</p>
                  </div>
                  <div className="p-2 md:p-4 text-xs md:text-sm bg-[#F6F6F8]">
                    <p className="text-gray-600">{phone.rearCamera}</p>
                    <p className="text-gray-600">{phone.frontCamera}</p>
                  </div>
                  <div className="p-2 md:p-4 text-xs md:text-sm">
                    <p className="text-gray-600">{phone.ram}</p>
                    <p className="text-gray-500">{phone.storage}</p>
                  </div>
                  <div className="p-2 md:p-4 text-xs md:text-sm  bg-[#F6F6F8]">
                    <p className="text-gray-600">{phone.battery}</p>
                    <p className="text-gray-500">{phone.charging}</p>
                  </div>
                  <div className="p-2 md:p-4">
                    <button className="text-blue-600 text-xs md:text-sm font-medium">+ Compare</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

