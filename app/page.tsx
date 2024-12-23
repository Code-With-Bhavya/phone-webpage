"use client"

import { Search, Menu } from "lucide-react"

export default function Home() {
  
  return (
    <>
    <div className="w-screen relative ">
      <nav className="w-full bg-[#023359] h-[64px] flex items-center px-6 justify-between">
        <Menu className="text-white cursor-pointer"/>
        <h1 className="text-[1.6em] text-white font-semibold">Logo</h1>
        <Search className="text-white cursor-pointer"/>
      </nav>

      <main className="bg-[#f2f7ff] w-full h-[100vh] p-[10px]">
        <div className="w-full h-full bg-white p-[14px] relative">
          <div id="name" className="w-full relative h-[83px] border-b border-zinc-300">
            <h1 className="trunk txt-heading font-semibold text-xl text-[#253858]">Xiaomi Redmi Note 14 Pro+ 5G</h1>
            <p className="text-xs text-[#7b879b]">Market Satus: <span className="text-[#2f466f]"> Available </span> | Released On:<span className="text-[#2f466f]"> 09 Dec 2024 </span> </p>

            <div className="w-full mt-1 flex">
              <div className="rounded-[50px] rounded-tl-[0px] p-1 text-xs w-[fit-content] px-3 bg-[#d5eaff] text-[#5085c5]">NEW</div>
              <div className="text-xs rounded-full p-1 px-4 ml-4 bg-[#eefffc]">8/10 <span className="opacity-[0.6]">By Expert</span></div>
            </div>
          </div>
        </div>
      </main>  
    </div>
    </>
  );
}