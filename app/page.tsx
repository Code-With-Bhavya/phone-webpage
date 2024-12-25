"use client"
import { Search, Menu, ThumbsUp, ThumbsDown, Cpu, Camera, Microchip, Rss, Smartphone, SquareUser, BatteryMedium, Bot, MessageSquareText } from "lucide-react"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import Slider from "react-slick";
import CircularProgressBar from "./components/progressbar"
import { useEffect, useRef } from 'react'
import { useState } from 'react'

export default function Home() {
  const [Selected, setSelected] = useState('overview')

  const settings = {
    customPaging: function(i: number) {
      return (
        <a>
          <div className="relative w-[30px] h-[30px] md:w-[40px] md:h-[40px] flex items-center justify-center bg-[#E3EEFF] p-1 rounded-[6px]">
            <img className=" h-full" alt="phone" src={`https://assets.mspimages.in/c/tr:h-260,t-true/23162-1734018814-${i + 1}.jpg`} />
          </div>
        </a>
      );
    },
    dots: true,
    dotsClass: "slick-dots slick-thumb",
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  const stickyNavRef = useRef<HTMLDivElement | null>(null);

  let triggerDown = true;
  let triggerUp = false;
  useEffect(()=> {
    window.addEventListener("scroll", ()=> {
      const scrollPosition = window.scrollY;
      const target = 600

      if (scrollPosition >= target && triggerDown) {
        triggerDown = false
        triggerUp = true
        downTrigger()
      }

      if (scrollPosition <= target && triggerUp) {
        triggerUp = false
        triggerDown = true
        upTrigger()
      }
    })

    function downTrigger() {
      console.log("down Triggered")
      stickyNavRef.current.style.position = "sticky"
      stickyNavRef.current.style.top = "0px"
    }

    function upTrigger() {
      console.log('up triggered')
      stickyNavRef.current.style.position = "absolute"
      stickyNavRef.current.style.top = "-100%"
    }
  },[])

  return (
    <>
    <div className="w-screen relative">
      <div ref={stickyNavRef} className="absolute z-10 top-[-100%] h-[40px] md:h-[50px] flex overflow-auto scrollbar-none w-full transition-all duration-300 bg-[#023359]">
        <div onClick={()=> setSelected('overview')} className={`${Selected == "overview" ? 'text-blue-500 border-b-[3px] border-b-blue-500' : 'text-white'} h-full px-4 w-[fit-content] cursor-pointer font-medium flex items-center text-sm`}>Overview</div>
        <div onClick={()=> setSelected('specs')} className={`${Selected == "specs" ? 'text-blue-500 border-b-[3px] border-b-blue-500' : 'text-white'} h-full px-4 w-[fit-content] cursor-pointer font-medium flex items-center text-sm`}>Specs</div>
        <div onClick={()=> setSelected('photos')} className={`${Selected == "photos" ? 'text-blue-500 border-b-[3px] border-b-blue-500' : 'text-white'} h-full px-4 w-[fit-content] cursor-pointer font-medium flex items-center text-sm`}>Photos</div>
        <div onClick={()=> setSelected('prices')} className={`${Selected == "prices" ? 'text-blue-500 border-b-[3px] border-b-blue-500' : 'text-white'} h-full px-4 w-[fit-content] cursor-pointer font-medium flex items-center text-sm`}>Prices</div>
        <div onClick={()=> setSelected('compare')} className={`${Selected == "compare" ? 'text-blue-500 border-b-[3px] border-b-blue-500' : 'text-white'} h-full px-4 w-[fit-content] cursor-pointer font-medium flex items-center text-sm`}>Compare</div>
        <div onClick={()=> setSelected('expert')} className={`${Selected == "expert" ? 'text-blue-500 border-b-[3px] border-b-blue-500' : 'text-white'} h-full px-4 w-[fit-content] cursor-pointer font-medium flex items-center text-sm`}>Expert View</div>
        <div onClick={()=> setSelected('news')} className={`${Selected == "news" ? 'text-blue-500 border-b-[3px] border-b-blue-500' : 'text-white'} h-full px-4 w-[fit-content] cursor-pointer font-medium flex items-center text-sm`}>News</div>
        <div onClick={()=> setSelected('competators')} className={`${Selected == "competators" ? 'text-blue-500 border-b-[3px] border-b-blue-500' : 'text-white'} h-full px-4 w-[fit-content] cursor-pointer font-medium flex items-center text-sm`}>Competators</div>
        <div onClick={()=> setSelected('benchmarks')} className={`${Selected == "benchmarks" ? 'text-blue-500 border-b-[3px] border-b-blue-500' : 'text-white'} h-full px-4 w-[fit-content] cursor-pointer font-medium flex items-center text-sm`}>Benchmarks</div>
      </div>
      <nav className="w-full bg-[#023359] h-[64px] overflow-hidden flex items-center px-6 justify-between">
        <Menu className="text-white cursor-pointer"/>
        <h1 className="text-[1.6em] text-white font-semibold">Logo</h1>
        <Search className="text-white cursor-pointer"/>
      </nav>

      <main className="bg-[#f2f7ff] w-full pt-[10px] px-[10px] flex flex-col items-center">
        {/*container*/}
        <div className="w-full lg:w-[80%] min-h-screen bg-white p-[14px] relative">
          <div id="name" className="w-full relative h-[83px] border-b border-zinc-300">
            <h1 className="trunk txt-heading font-semibold text-xl text-[#253858]">Xiaomi Redmi Note 14 Pro+ 5G</h1>
            <p className="text-xs text-[#7b879b]">Market Satus: <span className="text-[#2f466f]"> Available </span> | Released On:<span className="text-[#2f466f]"> 09 Dec 2024 </span> </p>

            <div className="w-full mt-1 flex">
              <div className="rounded-[50px] rounded-tl-[0px] p-1 text-xs w-[fit-content] px-3 bg-[#d5eaff] text-[#5085c5]">NEW</div>
              <div className="text-xs rounded-full p-1 px-4 ml-4 bg-[#eefffc]">8/10 <span className="opacity-[0.6]">By Expert</span></div>
            </div>
          </div>
          <div className="w-full relative h-full">
            <div id="product" className="w-full flex py-6">
              <div className="w-[34%] relative  relative flex items-center justify-center">
               <div className="slider-container w-[80%]">
                  <Slider {...settings}>
                    <div id="imgCont" className="w-full flex items-center justify-center">
                      <Image width={140} height={500} alt="Phone Image" src="https://assets.mspimages.in/c/tr:h-260,t-true/23162-1734018814-1.jpg" />
                    </div>
                    <div id="imgCont" className="w-full flex items-center justify-center">
                      <Image width={140} height={500} alt="Phone Image" src="https://assets.mspimages.in/c/tr:h-260,t-true/23162-1734018814-2.jpg" />
                    </div>
                    <div id="imgCont" className="w-full flex justify-center">
                      <Image width={24} height={500} className="absolute left-[50%] translate-x-[-50%]" alt="Phone Image" src="https://assets.mspimages.in/c/tr:h-260,t-true/23162-1734018814-3.jpg" />
                    </div>
                  </Slider>
                </div>
              </div>

              <div className="w-[66%] h-full lg:pt-10 pl-6 lg:pl-0">
                <h1 className="font-semibold text-[1.1em] lg:text-xl text-[#253858]">Key Specifications</h1>
                <div className="w-full h-fit-content mt-2 grid grid-cols-1 lg:grid-cols-2 gap-1 ">
                  <div className="h-[50px] lg:h-[100px] flex items-center">
                    <Cpu className="text-[#2D3F5E]"/>
                    <div className="ml-2 lg:ml-4">
                      <p className="text-[#7B879B] text-xs lg:text-sm">Processor</p>
                      <h1 className="text-[#2F466F] text-[0.74em] lg:text-[1em]">Snapdragon 7s Gen 3 Octa core</h1>
                    </div>
                  </div>

                  <div className="h-[50px] lg:h-[100px] flex items-center">
                    <Camera className="text-[#2D3F5E]"/>
                    <div className="ml-2 lg:ml-4">
                      <p className="text-[#7B879B] text-xs lg:text-sm">Rear Camera</p>
                      <h1 className="text-[#2F466F] text-[0.74em]  lg:text-[1em]">50+8+50 MP</h1>
                    </div>
                  </div>

                  <div className="h-[50px] lg:h-[100px] flex items-center">
                    <Microchip className="text-[#2D3F5E]"/>
                    <div className="ml-2 lg:ml-4">
                      <p className="text-[#7B879B] text-xs lg:text-sm">RAM | Storage</p>
                      <h1 className="text-[#2F466F] text-[0.74em] lg:text-[1em]">8 GB | 128 GB</h1>
                    </div>
                  </div>

                  <div className="h-[50px] lg:h-[100px] flex items-center">
                    <Rss className="text-[#2D3F5E]"/>
                    <div className="ml-2 lg:ml-4">
                      <p className="text-[#7B879B] text-xs lg:text-sm">Network</p>
                      <h1 className="text-[#2F466F] text-[0.74em] lg:text-[1em]">Dual SIM: 5G & 5G</h1>
                    </div>
                  </div>

                  <div className="h-[50px] lg:h-[100px] flex items-center">
                    <Smartphone className="text-[#2D3F5E]"/>
                    <div className="ml-2 lg:ml-4">
                      <p className="text-[#7B879B] text-xs lg:text-sm">Display</p>
                      <h1 className="text-[#2F466F] text-[0.74em] lg:text-[1em]">6.67″ (16.94 cm) 120Hz AMOLED </h1>
                    </div>
                  </div>

                  <div className="h-[50px] lg:h-[100px] flex items-center">
                    <SquareUser className="text-[#2D3F5E]"/>
                    <div className="ml-2 lg:ml-4">
                      <p className="text-[#7B879B] text-xs lg:text-sm">Front Camera</p>
                      <h1 className="text-[#2F466F] text-[0.74em] lg:text-[1em]">20 MP</h1>
                    </div>
                  </div>

                  <div className="h-[50px] lg:h-[100px] flex items-center">
                    <BatteryMedium className="text-[#2D3F5E]"/>
                    <div className="ml-2 lg:ml-4">
                      <p className="text-[#7B879B] text-xs lg:text-sm">Battery</p>
                      <h1 className="text-[#2F466F] text-[0.74em] lg:text-[1em]">6200 mAh | 90W Fast Charging </h1>
                    </div>
                  </div>

                  <div className="h-[50px] lg:h-[100px] flex items-center">
                    <Bot className="text-[#2D3F5E]"/>
                    <div className="ml-2 lg:ml-4">
                      <p className="text-[#7B879B] text-xs lg:text-sm">OS</p>
                      <h1 className="text-[#2F466F] text-[0.74em] lg:text-[1em]">Android v14</h1>
                    </div>
                  </div>
                </div>
              </div>

            </div>
            <div className="w-full relative h-[fit-content] border-t border-zinc-300">
              <h1 className="font-medium mt-2 text-[#253858]">Xiaomi Redmi Note 14 Pro 5G Prices</h1>
              <div className="w-full h-[50px] mt-3 rounded-[12px] px-4 border border-zinc-300 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Image width={14} height={14} src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/flipkart-icon.png" alt="Flipkart icon"/>
                  <p className="text-xs text-zinc-600">Flipkart</p>
                </div>

                <p className="font-medium text-sm text-[#2f466f]">₹30,999</p>

                <button className="text-white font-medium px-4 py-[0.4em] text-sm rounded-[50px] bg-[#007fdb]">Go to store</button>
              </div>   
              <div className="w-full h-[50px] mt-3 rounded-[12px] px-4 border border-zinc-300 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Image width={14} height={14} src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/flipkart-icon.png" alt="Flipkart icon"/>
                  <p className="text-xs text-zinc-600">Amazon</p>
                </div>

                <p className="font-medium text-sm text-[#2f466f]">₹30,999</p>

                <button className="text-white font-medium px-4 py-[0.4em] text-sm rounded-[50px] bg-[#007fdb]">Go to store</button>
              </div>        
            </div>
          </div>
        </div>

        <div className="w-full lg:w-[80%] mt-[10px] min-h-screen bg-white p-[14px] relative">
          <div className="w-full h-[70px] border-b border-zinc-300 flex justify-between">
            <div>
              <h1 className="font-semibold text-[1.1em] lg:text-xl text-[#253858]">Expert View</h1>
              <p className="text-xs text-[#7b879b]">By <a className="text-blue-600 underline" href="https://project-page.vercel.app">Shubh Bhushan</a> | On Dec 12 2024</p>
            </div>

            <div className="w-[120px] h-[40px] border border-blue-500 rounded-[12px] flex items-center justify-center">
              <p className="text-xs text-[#7b879b]"><span className="text-[#253858] font-semibold">8/10</span> by Expert</p>
            </div>
          </div>

          <div className="flex flex-wrap w-full gap-6 my-4">
            <CircularProgressBar percentage={85} type={'Design'}/>
            <CircularProgressBar percentage={85} type={'Display'}/>
            <CircularProgressBar percentage={75} type={'Performance'}/>
            <CircularProgressBar percentage={85} type={'Battery'}/>
            <CircularProgressBar percentage={80} type={'Camera'}/>
            <CircularProgressBar percentage={80} type={'Software'}/>
            <CircularProgressBar percentage={80} type={'Sound'}/>
            <CircularProgressBar percentage={80} type={'Usage'}/>
            <CircularProgressBar percentage={70} type={'VFM'}/>
          </div>

          <div className="relative w-full flex gap-2 mt-4 min-h-[210px]">
            <div className="h-full w-full bg-[#f4faf7] px-[9px] py-[16px]">
              <div className="w-full flex gap-2">
                <ThumbsUp className="text-[#61a230] w-[1em]"/>
                <h1 className="font-semibold text-[1em]">Pros</h1>
              </div>

              <ol className="list-disc list-inside text-[#61a230] mt-2">
                <li className="text-[0.8em]"> <span className="text-[#2f466f] pl-[-10px]"> Gorgeous Design </span></li>
                <li className="text-[0.8em] pt-3"> <span className="text-[#2f466f] pl-[-10px]"> Competent Cameras </span></li>
                <li className="text-[0.8em] pt-3"> <span className="text-[#2f466f] pl-[-10px]"> Smooth 12Hz Display </span></li>
                <li className="text-[0.8em] pt-3"> <span className="text-[#2f466f] pl-[-10px]"> Reliable battery life </span></li>
                <li className="text-[0.8em] pt-3"> <span className="text-[#2f466f] pl-[-10px]"> Consistent gaming </span></li>
              </ol>
            </div>

            <div className="h-full w-full bg-[#fff8f9] px-[9px] py-[16px]">
              <div className="w-full flex gap-2">
                <ThumbsDown className="text-[#fe223c] w-[1em]"/>
                <h1 className="font-semibold text-[1em]">Cons</h1>
              </div>

              <ol className="list-disc list-inside text-[#fe223c] mt-2">
                <li className="text-[0.8em]"> <span className="text-[#2f466f] pl-[-10px]"> Gorgeous Design </span></li>
                <li className="text-[0.8em] pt-3"> <span className="text-[#2f466f] pl-[-10px]"> Pricing could have been more aggressive </span></li>
              </ol>
            </div>
          </div>

          <div className="mt-6">
            <div className="flex gap-2">
              <MessageSquareText className="w-5 text-blue-500"/>
              <h1 className="text-[#2f466f] font-medium">Verdict</h1>
            </div>

            <p className="text-[#2f466f] mt-4 text-sm lg:text-[1em]">The Redmi Note 14 Pro Plus stands out with its excellent display, dependable battery, capable camera, and sleek design, making it a compelling choice. However, its drawbacks, including bloatware, spammy notifications, and a steep price, cannot be overlooked. Alternatives like the Vivo T3 Ultra offer better performance, the Realme GT 6T provides balanced features, and the Motorola Edge 50 Pro delivers a clean UI experience.</p>
          </div>
        </div>

        <div className="w-full lg:w-[80%] mt-[10px] h-screen bg-white relative border border-[#e6e6ef] rounded-[10px]">
          <div className="w-full h-[120px] bg-gradient-to-t from-[#e6eafa] to-white p-[14px] rounded-t-[10px]">
            <h1 className="font-semibold text-[1.1em] lg:text-xl text-[#253858] ">Xiaomi Redmi Note 14 Pro+ 5G Specifications</h1>
            <div className="flex gap-2 w-full mt-2 overflow-auto scrollbar-none">
              <div className="hover:bg-blue-500 hover:text-white rounded-[50px] bg-white flex items-center justify-center text-sm text-[#50617E] py-1 px-3">Performance</div>
              <div className="hover:bg-blue-500 hover:text-white rounded-[50px] bg-white flex items-center justify-center text-sm text-[#50617E] py-1 px-3">Design</div>
              <div className="hover:bg-blue-500 hover:text-white rounded-[50px] bg-white flex items-center justify-center text-sm text-[#50617E] py-1 px-3">Display</div>
              <div className="hover:bg-blue-500 hover:text-white rounded-[50px] bg-white flex items-center justify-center text-sm text-[#50617E] py-1 px-3">Camera</div>
              <div className="hover:bg-blue-500 hover:text-white rounded-[50px] bg-white flex items-center justify-center text-sm text-[#50617E] py-1 px-3">Battery</div>
              <div className="hover:bg-blue-500 hover:text-white rounded-[50px] bg-white flex items-center justify-center text-sm text-[#50617E] py-1 px-3">Storage</div>
              <div className="hover:bg-blue-500 hover:text-white rounded-[50px] bg-white flex items-center justify-center text-sm text-[#50617E] py-1 px-3">Software</div>
              <div className="hover:bg-blue-500 hover:text-white rounded-[50px] bg-white flex items-center justify-center text-sm text-[#50617E] py-1 px-3">Connectivity</div>
              <div className="hover:bg-blue-500 hover:text-white rounded-[50px] bg-white flex items-center justify-center text-sm text-[#50617E] py-1 px-3">Sound</div>
              <div className="hover:bg-blue-500 hover:text-white rounded-[50px] bg-white flex items-center justify-center text-sm text-[#50617E] py-1 px-3">Seonsors</div>
            </div>
          </div>

          <div id="specs" className="w-full h-full p-2">
            <div id="performance" className="w-full h-[fit-content] rounded-[6px] border border-[#e6e6ef] relative">
              <div className="w-full h-[40px] flex gap-2 items-center px-2 bg-[#f3f5fd]">
                <Cpu className="w-4"/>
                <p className="text-sm font-medium">Performance</p>
                <div className="py-[2px] px-2 bg-white text-[0.6em] flex items-center rounded-[50px]">7.0/10</div>
              </div>

              <div className="w-full h-full flex flex-col p-4">
                <div className="w-full flex justify-between">
                  <p className="text-xs">Chipset</p>
                  <p className="text-xs max-w-[55%]">:  Qualcum Snapdragon 7s Gen 3</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
    </>
  );
}