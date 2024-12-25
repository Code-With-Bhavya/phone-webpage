'use client'

import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useState, useRef } from 'react'

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
      {/* Tabs */}
      <div className="border-b">
        <div className="flex items-center gap-4 px-4">
          <button className="p-3">
            <svg viewBox="0 0 24 24" className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor">
              <path d="M4 6h16M4 12h16M4 18h16" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <div className="flex gap-6 text-sm">
            <button className="py-4 text-blue-600 border-b-2 border-blue-600">Popular</button>
            <button className="py-4 text-gray-600">Cheaper</button>
            <button className="py-4 text-gray-600">From Xiaomi</button>
            <button className="py-4 text-gray-600">Other Brands</button>
            <button className="py-4 text-gray-600">New</button>
          </div>
        </div>
      </div>

      {/* Comparison Grid */}
      <div className="relative">
        {/* Scroll Buttons */}
        {showLeftScroll && (
          <button 
            onClick={() => scroll('left')}
            className="absolute left-[270px] top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-1"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
        )}
        {showRightScroll && (
          <button 
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-1"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        )}

        <div className="flex">
          {/* Sticky First Column */}
          <div className="w-[270px] flex-shrink-0 border-r bg-white z-20">
            <div className="p-4 border-b h-[280px] flex items-center justify-center">
              <div className="text-center">
                <img 
                  src="/placeholder.svg?height=160&width=80" 
                  alt="Redmi Note 14 Pro Plus 5G"
                  className="mx-auto mb-4 h-40"
                />
                <h3 className="text-sm font-medium text-blue-700 mb-2">Xiaomi Redmi Note 14 Pro+ 5G</h3>
                <p className="text-lg font-semibold">₹30,999</p>
                <div className="flex items-center justify-center gap-1 mt-1">
                  <span className="text-sm font-medium text-green-600">8</span>
                  <span className="text-xs text-gray-500">/10 by Expert</span>
                </div>
              </div>
            </div>
            <div className="divide-y">
              <div className="p-4 text-sm">
                <p className="text-gray-600">Snapdragon 7s Gen 3</p>
              </div>
              <div className="p-4 text-sm">
                <p className="text-gray-600">6.67" (16.94 cm)</p>
                <p className="text-gray-500">120Hz Display</p>
              </div>
              <div className="p-4 text-sm">
                <p className="text-gray-600">50+8+50 MP Rear</p>
              </div>
              <div className="p-4 text-sm">
                <p className="text-gray-600">20 MP Front</p>
              </div>
              <div className="p-4 text-sm">
                <p className="text-gray-600">8 GB RAM</p>
                <p className="text-gray-500">128 GB Storage</p>
              </div>
              <div className="p-4 text-sm">
                <p className="text-gray-600">6200 mAh</p>
                <p className="text-gray-500">90W Charging</p>
              </div>
              <div className="p-4">
                <button className="text-blue-600 text-sm font-medium">+ Compare</button>
              </div>
            </div>
          </div>

          {/* Scrollable Columns */}
          <div 
            className="flex overflow-x-auto hide-scrollbar"
            ref={scrollContainerRef}
            onScroll={handleScroll}
          >
            {[...Array(6)].map((_, i) => (
              <div key={i} className="w-[270px] flex-shrink-0 border-r">
                <div className="p-4 border-b h-[280px] flex items-center justify-center">
                  <div className="text-center">
                    <img 
                      src="/placeholder.svg?height=160&width=80" 
                      alt={`Phone ${i + 2}`}
                      className="mx-auto mb-4 h-40"
                    />
                    <h3 className="text-sm font-medium text-blue-700 mb-2">
                      {i % 2 === 0 ? 'Xiaomi Redmi Note 13 Pro 5G' : 'Motorola Edge 50 Pro 5G'}
                    </h3>
                    <p className="text-lg font-semibold">
                      ₹{i % 2 === 0 ? '24,999' : '27,999'}
                    </p>
                    <div className="flex items-center justify-center gap-1 mt-1">
                      <span className="text-sm font-medium text-green-600">
                        {i % 2 === 0 ? '8.4' : '8.2'}
                      </span>
                      <span className="text-xs text-gray-500">/10 by Expert</span>
                    </div>
                  </div>
                </div>
                <div className="divide-y">
                  <div className="p-4 text-sm">
                    <p className="text-gray-600">
                      {i % 2 === 0 ? 'MediaTek Dimensity 7200 Ultra' : 'Snapdragon 7 Gen 3'}
                    </p>
                  </div>
                  <div className="p-4 text-sm">
                    <p className="text-gray-600">6.67" (16.94 cm)</p>
                    <p className="text-gray-500">120Hz Display</p>
                  </div>
                  <div className="p-4 text-sm">
                    <p className="text-gray-600">
                      {i % 2 === 0 ? '200+8+2 MP Rear' : '50+13+10 MP Rear'}
                    </p>
                  </div>
                  <div className="p-4 text-sm">
                    <p className="text-gray-600">
                      {i % 2 === 0 ? '16 MP Front' : '50 MP Front'}
                    </p>
                  </div>
                  <div className="p-4 text-sm">
                    <p className="text-gray-600">8 GB RAM</p>
                    <p className="text-gray-500">256 GB Storage</p>
                  </div>
                  <div className="p-4 text-sm">
                    <p className="text-gray-600">
                      {i % 2 === 0 ? '5000 mAh' : '4500 mAh'}
                    </p>
                    <p className="text-gray-500">
                      {i % 2 === 0 ? '120W Charging' : '125W Charging'}
                    </p>
                  </div>
                  <div className="p-4">
                    <button className="text-blue-600 text-sm font-medium">+ Compare</button>
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

