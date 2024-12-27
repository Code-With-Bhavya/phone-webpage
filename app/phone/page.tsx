/* eslint-disable */
"use client"
import { Search, Menu, ThumbsUp, ThumbsDown, Cpu, Palette, Camera, Microchip, ScanFace, Volume2, Rss, Smartphone, SquareUser, BatteryMedium, Bot, MessageSquareText } from "lucide-react"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import Slider from "react-slick";
import CircularProgressBar from "../components/progressbar"
import Footer from '../components/footer'
import PhoneComparison from "../components/phone-comparison"
import MobileLinks from "../components/mobile-links"
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

  useEffect(() => {
      if (typeof window !== "undefined") {
          window.addEventListener("scroll", () => {
              const scrollPosition = window.scrollY;
              const target = 600;

              if (scrollPosition >= target && triggerDown) {
                  triggerDown = false;
                  triggerUp = true;
                  downTrigger();
              }

              if (scrollPosition <= target && triggerUp) {
                  triggerUp = false;
                  triggerDown = true;
                  upTrigger();
              }
          });
      }

      function downTrigger() {
          if (stickyNavRef.current) {
              stickyNavRef.current.style.position = "sticky";
              stickyNavRef.current.style.top = "0px";
          }
      }

      function upTrigger() {
          if (stickyNavRef.current) {
              stickyNavRef.current.style.position = "absolute";
              stickyNavRef.current.style.top = "-100%";
          }
      }
  }, []);

  return (
    <>
    <div className="w-screen relative">
      <div ref={stickyNavRef} className="absolute z-[30] top-[-100%] h-[40px] md:h-[50px] flex overflow-auto scrollbar-none w-full transition-all duration-300 bg-[#023359]">
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
        <div className="w-full lg:w-[80%] h-[fit-content] bg-white p-[14px] relative">
          <div id="name" className="w-full relative h-[83px] border-b border-zinc-300">
            <h1 className="trunk txt-heading font-semibold text-xl text-[#253858]">Xiaomi Redmi Note 14 Pro+ 5G</h1>
            <p className="text-xs text-[#7b879b]">Market Satus: <span className="text-[#2f466f]"> Available </span> | Released On:<span className="text-[#2f466f]"> 09 Dec 2024 </span> </p>

            <div className="w-full mt-1 flex">
              <div className="rounded-[50px] rounded-tl-[0px] p-1 text-xs w-[fit-content] px-3 bg-[#d5eaff] text-[#5085c5]">NEW</div>
              <div className="text-xs rounded-full p-1 px-4 ml-4 bg-[#eefffc]">8/10 <span className="opacity-[0.6]">By Expert</span></div>
            </div>
          </div>

          <div className="w-full relative h-full">
            <div id="product" className="w-full flex pt-6 pb-2">
              <div className="w-[40%] relative  relative flex items-top justify-center">
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

              <div className="w-[60%] h-full lg:pt-10 pl-6 lg:pl-0">
                <h1 className="font-semibold text-[1.1em] lg:text-xl text-[#253858]">Key Specifications</h1>
                <div className="w-full h-fit-content mt-2 grid grid-cols-1 lg:grid-cols-2  ">
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

            <div className="w-full h-[50px] h-[fit-content] mb-4 flex justify-between px-4">
              <button className="border border-blue-500 rounded-[50px] px-6 py-1 text-blue-500 font-semibold text-sm">+ Compare</button>
              <button onClick={()=> {if (typeof document !== "undefined") { document.getElementById('specs')?.scrollIntoView({behavior: 'smooth'}) }}} className="border border-blue-500 rounded-[50px] px-6 py-1 text-blue-500 font-semibold text-sm">View Full Specs</button>
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

        <div className="w-full lg:w-[80%] mt-[10px] h-[fit-content] bg-white p-[14px] relative">
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

            <p className="text-[#2f466f] mt-4 text-sm max-w-[50em] lg:text-[1em]">The Redmi Note 14 Pro Plus stands out with its excellent display, dependable battery, capable camera, and sleek design, making it a compelling choice. However, its drawbacks, including bloatware, spammy notifications, and a steep price, cannot be overlooked. Alternatives like the Vivo T3 Ultra offer better performance, the Realme GT 6T provides balanced features, and the Motorola Edge 50 Pro delivers a clean UI experience.</p>
          </div>
        </div>

        <div className="w-full lg:w-[80%] mt-[10px] h-[fit-content] bg-white relative border border-[#e6e6ef] rounded-[10px]">
          <div className="w-full h-[120px] bg-gradient-to-t from-[#e6eafa] to-white p-[14px] rounded-t-[10px]">
            <h1 className="font-semibold text-[1.1em] lg:text-xl text-[#253858] ">Xiaomi Redmi Note 14 Pro+ 5G Specifications</h1>
            <div className="flex gap-2 w-full mt-2 overflow-auto scrollbar-none">
              {['performance', 'design', 'display', 'camera', 'battery', 'storage', 'software', 'connectivity', 'sound', 'sensors'].map((id) => (
                <div key={id} className="hover:bg-blue-500 hover:text-white rounded-[50px] bg-white flex items-center justify-center text-sm text-[#50617E] py-1 px-3 cursor-pointer" onClick={() => { if (typeof document !== "undefined") {document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });}}}>
                  {id.charAt(0).toUpperCase() + id.slice(1)}
                </div>
              ))}
            </div>
          </div>

          <div id="specs" className="w-full h-[fit-content] flex flex-col gap-6 p-2">

            <div id="performance" className="w-full h-[fit-content] rounded-[6px] border border-[#e6e6ef] relative">
              <div className="w-full h-[40px] flex gap-2 items-center px-2 bg-[#f3f5fd]">
                <Cpu className="w-4" />
                <p className="text-sm font-medium text-[#073F6B]">Performance</p>
                <div className="py-[2px] px-2 bg-white text-[0.6em] flex items-center rounded-[50px] text-[#2A95E2] font-bold">7.0/10</div>
              </div>

              <div className="w-full h-full flex flex-col p-4 gap-3">
                <div className="w-full flex justify-between">
                  <p className="text-sm text-[#2f466f]">Chipset</p>
                  <p className="text-sm w-[55%] text-[#2f466f]">: Qualcomm Snapdragon 7s Gen 3</p>
                </div>
                <div className="w-full flex justify-between">
                  <p className="text-sm text-[#2f466f]">No Of Cores</p>
                  <p className="text-sm w-[55%] text-[#2f466f]">: 8 (Octa Core)</p>
                </div>
                <div className="w-full flex justify-between">
                  <p className="text-sm text-[#2f466f]">CPU</p>
                  <p className="text-sm w-[55%] text-[#2f466f]">: 2.5GHz, Single core, Cortex A720 <br /> 2.4GHz, Tri core, Cortex A720 <br /> 1.8GHz, Quad core, Cortex A520</p>
                </div>
                <div className="w-full flex justify-between">
                  <p className="text-sm text-[#2f466f]">Architecture</p>
                  <p className="text-sm w-[55%] text-[#2f466f]">: 64-bit</p>
                </div>
                <div className="w-full flex justify-between">
                  <p className="text-sm text-[#2f466f]">Fabrication</p>
                  <p className="text-sm w-[55%] text-[#2f466f]">: 4 nm</p>
                </div>
                <div className="w-full flex justify-between">
                  <p className="text-sm text-[#2f466f]">RAM</p>
                  <p className="text-sm w-[55%] text-[#2f466f]">: 8 GB</p>
                </div>
                <div className="w-full flex justify-between">
                  <p className="text-sm text-[#2f466f]">RAM Type</p>
                  <p className="text-sm w-[55%] text-[#2f466f]">: LPDDR4X</p>
                </div>
                <div className="w-full flex justify-between">
                  <p className="text-sm text-[#2f466f]">Graphics</p>
                  <p className="text-sm w-[55%] text-[#2f466f]">: Adreno 740</p>
                </div>
              </div>
            </div>
    
            <div id="design" className="w-full h-[fit-content] rounded-[6px] border border-[#e6e6ef] relative">
              <div className="w-full h-[40px] flex gap-2 items-center px-2 bg-[#f3f5fd]">
                <Palette className="w-4" />
                <p className="text-sm font-medium text-[#073F6B]">Design</p>
                <div className="py-[2px] px-2 bg-white text-[0.6em] flex items-center rounded-[50px] text-[#2A95E2] font-bold">8.5/10</div>
              </div>

              <div className="w-full h-full flex flex-col p-4 gap-3">
                <div className="w-full flex justify-between">
                  <p className="text-sm text-[#2f466f]">Build</p>
                  <p className="text-sm w-[55%] text-[#2f466f]">: Corning Gorilla Glass 7i, Eco Leather back panel</p>
                </div>
                <div className="w-full flex justify-between">
                  <p className="text-sm text-[#2f466f]">Height</p>
                  <p className="text-sm w-[55%] text-[#2f466f]">: 6.4 inches (162.53 mm)</p>
                </div>
                <div className="w-full flex justify-between">
                  <p className="text-sm text-[#2f466f]">Width</p>
                  <p className="text-sm w-[55%] text-[#2f466f]">: 2.94 inches (74.67 mm)</p>
                </div>
                <div className="w-full flex justify-between">
                  <p className="text-sm text-[#2f466f]">Thickness</p>
                  <p className="text-sm w-[55%] text-[#2f466f]">: 0.35 inches (8.87 mm)</p>
                </div>
                <div className="w-full flex justify-between">
                  <p className="text-sm text-[#2f466f]">Weight</p>
                  <p className="text-sm w-[55%] text-[#2f466f]">: 210 grams</p>
                </div>
                <div className="w-full flex justify-between">
                  <p className="text-sm text-[#2f466f]">Colors</p>
                  <p className="text-sm w-[55%] text-[#2f466f]">: Titan Black, Spectre Blue, Phantom Purple</p>
                </div>
                <div className="w-full flex justify-between">
                  <p className="text-sm text-[#2f466f]">Water Resistant</p>
                  <p className="text-sm w-[55%] text-[#2f466f]">: Yes, IP68</p>
                </div>
                <div className="w-full flex justify-between">
                  <p className="text-sm text-[#2f466f]">Ruggedness</p>
                  <p className="text-sm w-[55%] text-[#2f466f]">: Dust proof, Water proof</p>
                </div>
                <div className="w-full flex justify-between">
                  <p className="text-sm text-[#2f466f]">Screen Unlock</p>
                  <p className="text-sm w-[55%] text-[#2f466f]">: Fingerprint, Face unlock</p>
                </div>
              </div>
            </div>

            <div id="display" className="w-full h-[fit-content] rounded-[6px] border border-[#e6e6ef] relative">
              <div className="w-full h-[40px] flex gap-2 items-center px-2 bg-[#f3f5fd]">
                <Smartphone className="w-4"/>
                <p className="text-sm font-medium text-[#073F6B]">Display</p>
                <div className="py-[2px] px-2 bg-white text-[0.6em] flex items-center rounded-[50px] text-[#2A95E2] font-bold">8.5/10</div>
              </div>

              <div className="w-full h-full flex flex-col p-4 gap-3">
                <div className="w-full flex justify-between">
                  <p className="text-sm text-[#2f466f]">Resolution</p>
                  <p className="text-sm w-[55%] text-[#2f466f]">: 1220 x 2712 pixels</p>
                </div>
                <div className="w-full flex justify-between">
                  <p className="text-sm text-[#2f466f]">Aspect Ratio</p>
                  <p className="text-sm w-[55%] text-[#2f466f]">: 20:9</p>
                </div>
                <div className="w-full flex justify-between">
                  <p className="text-sm text-[#2f466f]">Display Type</p>
                  <p className="text-sm w-[55%] text-[#2f466f]">: AMOLED, 3D Curved, Always-On display, Curved Display, Dolby Vision, HDR 10+, Hydro Touch</p>
                </div>
                <div className="w-full flex justify-between">
                  <p className="text-sm text-[#2f466f]">Size</p>
                  <p className="text-sm w-[55%] text-[#2f466f]">: 6.67 inches (16.94 cms)</p>
                </div>
                <div className="w-full flex justify-between">
                  <p className="text-sm text-[#2f466f]">Bezel-less display</p>
                  <p className="text-sm w-[55%] text-[#2f466f]">: Yes, with Punch-hole</p>
                </div>
                <div className="w-full flex justify-between">
                  <p className="text-sm text-[#2f466f]">Pixel Density</p>
                  <p className="text-sm w-[55%] text-[#2f466f]">: 446 pixels per inch (ppi)</p>
                </div>
                <div className="w-full flex justify-between">
                  <p className="text-sm text-[#2f466f]">Protection</p>
                  <p className="text-sm w-[55%] text-[#2f466f]">: Corning Gorilla Glass, Glass Victus 2</p>
                </div>
                <div className="w-full flex justify-between">
                  <p className="text-sm text-[#2f466f]">TouchScreen</p>
                  <p className="text-sm w-[55%] text-[#2f466f]">: Yes, Capacitive, Multi-touch</p>
                </div>
                <div className="w-full flex justify-between">
                  <p className="text-sm text-[#2f466f]">Color Reproduction</p>
                  <p className="text-sm w-[55%] text-[#2f466f]">: 68B Colors</p>
                </div>
                <div className="w-full flex justify-between">
                  <p className="text-sm text-[#2f466f]">Screen to body percentage</p>
                  <p className="text-sm w-[55%] text-[#2f466f]">: 88.5 %</p>
                </div>
                <div className="w-full flex justify-between">
                  <p className="text-sm text-[#2f466f]">Display Refresh Rate</p>
                  <p className="text-sm w-[55%] text-[#2f466f]">: 120Hz</p>
                </div>
                <div className="w-full flex justify-between">
                  <p className="text-sm text-[#2f466f]">Touch Refresh Rate</p>
                  <p className="text-sm w-[55%] text-[#2f466f]">: 480Hz</p>
                </div>
              </div>
            </div>

            <div id="camera" className="w-full h-[fit-content] rounded-[6px] border border-[#e6e6ef] relative">
              <div className="w-full h-[40px] flex gap-2 items-center px-2 bg-[#f3f5fd]">
                <Camera className="w-4"/>
                <p className="text-sm font-medium text-[#073F6B]">Camera</p>
                <div className="py-[2px] px-2 bg-white text-[0.6em] flex items-center rounded-[50px] text-[#2A95E2] font-bold">8.0/10</div>
              </div>

              <div className="w-full h-full flex flex-col p-4 gap-3">
                <div className="w-full flex justify-between">
                  <p className="text-sm text-[#2f466f]">Rear camera setup</p>
                  <p className="text-sm w-[55%] text-[#2f466f]">: Triple</p>
                </div>
                <div className="w-full flex justify-between">
                  <p className="text-sm text-[#2f466f]">Primary Rear camera</p>
                  <p className="text-sm w-[55%] text-[#2f466f]">: 50 MP, Wide Angle lens, f/1.6 aperture, 24 mm focal length, 1.55" sensor size, 1µm pixel size</p>
                </div>
                <div className="w-full flex justify-between">
                  <p className="text-sm text-[#2f466f]">Secondary Rear camera</p>
                  <p className="text-sm w-[55%] text-[#2f466f]">: 8 MP, Ultra-Wide Angle lens, f/2.2 aperture, 15 mm focal length, 1.4" sensor size, 1.12µm pixel size</p>
                </div>
                <div className="w-full flex justify-between">
                  <p className="text-sm text-[#2f466f]">Tertiary Rear camera</p>
                  <p className="text-sm w-[55%] text-[#2f466f]">: 50 MP, Telephoto lens, f/2.0 aperture, 60 mm focal length, 2.76" sensor size</p>
                </div>
                <div className="w-full flex justify-between">
                  <p className="text-sm text-[#2f466f]">Front camera setup</p>
                  <p className="text-sm w-[55%] text-[#2f466f]">: Single</p>
                </div>
                <div className="w-full flex justify-between">
                  <p className="text-sm text-[#2f466f]">Primary Front camera</p>
                  <p className="text-sm w-[55%] text-[#2f466f]">: 20 MP, Wide Angle lens, f/2.2 aperture, 21 mm focal length, 4.0" sensor size, 0.7µm pixel size</p>
                </div>
                <div className="w-full flex justify-between">
                  <p className="text-sm text-[#2f466f]">Flash</p>
                  <p className="text-sm w-[55%] text-[#2f466f]">: LED Rear flash</p>
                </div>
                <div className="w-full flex justify-between">
                  <p className="text-sm text-[#2f466f]">Video Resolution (Rear)</p>
                  <p className="text-sm w-[55%] text-[#2f466f]">: 3840x2160 @ 30 fps, 1920x1080 @ 120 fps</p>
                </div>
                <div className="w-full flex justify-between">
                  <p className="text-sm text-[#2f466f]">Video Resolution (Front)</p>
                  <p className="text-sm w-[55%] text-[#2f466f]">: 1920x1080 @ 60 fps</p>
                </div>
                <div className="w-full flex justify-between">
                  <p className="text-sm text-[#2f466f]">Video Recording Features</p>
                  <p className="text-sm w-[55%] text-[#2f466f]">: Dual Video Recording</p>
                </div>
                <div className="w-full flex justify-between">
                  <p className="text-sm text-[#2f466f]">Optical Image Stabilization (OIS)</p>
                  <p className="text-sm w-[55%] text-[#2f466f]">: Yes</p>
                </div>
                <div className="w-full flex justify-between">
                  <p className="text-sm text-[#2f466f]">Camera Features</p>
                  <p className="text-sm w-[55%] text-[#2f466f]">: Auto Flash, Auto Focus, Face detection, Touch to focus</p>
                </div>
                <div className="w-full flex justify-between">
                  <p className="text-sm text-[#2f466f]">Shooting Modes</p>
                  <p className="text-sm w-[55%] text-[#2f466f]">: Continuous Shooting, High Dynamic Range mode (HDR)</p>
                </div>
              </div>
            </div>

            <div id="battery" className="w-full h-[fit-content] rounded-[6px] border border-[#e6e6ef] relative">
              <div className="w-full h-[40px] flex gap-2 items-center px-2 bg-[#f3f5fd]">
                <BatteryMedium className="w-4" />
                <p className="text-sm font-medium text-[#073F6B]">Battery</p>
                <div className="py-[2px] px-2 bg-white text-[0.6em] flex items-center rounded-[50px] text-[#2A95E2] font-bold">8.5/10</div>
              </div>

              <div className="w-full h-full flex flex-col p-4 gap-3">
                <div className="w-full flex justify-between">
                  <p className="text-sm text-[#2f466f]">Type</p>
                  <p className="text-sm w-[55%] text-[#2f466f]">: Silicon Carbon</p>
                </div>
                <div className="w-full flex justify-between">
                  <p className="text-sm text-[#2f466f]">Capacity</p>
                  <p className="text-sm w-[55%] text-[#2f466f]">: 6200 mAh</p>
                </div>
                <div className="w-full flex justify-between">
                  <p className="text-sm text-[#2f466f]">Removable</p>
                  <p className="text-sm w-[55%] text-[#2f466f]">: No</p>
                </div>
                <div className="w-full flex justify-between">
                  <p className="text-sm text-[#2f466f]">Fast Charging</p>
                  <p className="text-sm w-[55%] text-[#2f466f]">: Yes, Hyper, 90W</p>
                </div>
                <div className="w-full flex justify-between">
                  <p className="text-sm text-[#2f466f]">Wireless Charging</p>
                  <p className="text-sm w-[55%] text-[#2f466f]">: No</p>
                </div>
              </div>
            </div>

            <div id="storage" className="w-full h-[fit-content] rounded-[6px] border border-[#e6e6ef] relative">
              <div className="w-full h-[40px] flex gap-2 items-center px-2 bg-[#f3f5fd]">
                <Microchip className="w-4" />
                <p className="text-sm font-medium text-[#073F6B]">Storage</p>
                <div className="py-[2px] px-2 bg-white text-[0.6em] flex items-center rounded-[50px] text-[#2A95E2] font-bold">--</div>
              </div>

              <div className="w-full h-full flex flex-col p-4 gap-3">
                <div className="w-full flex justify-between">
                  <p className="text-sm text-[#2f466f]">Internal Memory</p>
                  <p className="text-sm w-[55%] text-[#2f466f]">: 128 GB</p>
                </div>
                <div className="w-full flex justify-between">
                  <p className="text-sm text-[#2f466f]">Memory type</p>
                  <p className="text-sm w-[55%] text-[#2f466f]">: UFS 2.2</p>
                </div>
                <div className="w-full flex justify-between">
                  <p className="text-sm text-[#2f466f]">Expandable Memory</p>
                  <p className="text-sm w-[55%] text-[#2f466f]">: No</p>
                </div>
              </div>
            </div>

            <div id="software" className="w-full h-[fit-content] rounded-[6px] border border-[#e6e6ef] relative">
              <div className="w-full h-[40px] flex gap-2 items-center px-2 bg-[#f3f5fd]">
                <Bot className="w-4" />
                <p className="text-sm font-medium text-[#073F6B]">Software</p>
                <div className="py-[2px] px-2 bg-white text-[0.6em] flex items-center rounded-[50px] text-[#2A95E2] font-bold">8.0/10</div>
              </div>

              <div className="w-full h-full flex flex-col p-4 gap-3">
                <div className="w-full flex justify-between">
                  <p className="text-sm text-[#2f466f]">Operating System</p>
                  <p className="text-sm w-[55%] text-[#2f466f]">: Android v14</p>
                </div>
                <div className="w-full flex justify-between">
                  <p className="text-sm text-[#2f466f]">Custom UI</p>
                  <p className="text-sm w-[55%] text-[#2f466f]">: HyperOS</p>
                </div>
              </div>
            </div>

            <div id="connectivity" className="w-full h-[fit-content] rounded-[6px] border border-[#e6e6ef] relative">
              <div className="w-full h-[40px] flex gap-2 items-center px-2 bg-[#f3f5fd]">
                <Rss className="w-4" />
                <p className="text-sm font-medium text-[#073F6B]">Connectivity</p>
                <div className="py-[2px] px-2 bg-white text-[0.6em] flex items-center rounded-[50px] text-[#2A95E2] font-bold">--</div>
              </div>

              <div className="w-full h-full flex flex-col p-4 gap-3">
                <div className="w-full flex justify-between">
                  <p className="text-sm text-[#2f466f]">SIM Configuration</p>
                  <p className="text-sm w-[55%] text-[#2f466f]">: Dual SIM</p>
                </div>
                <div className="w-full flex justify-between">
                  <p className="text-sm text-[#2f466f]">SIM1</p>
                  <p className="text-sm w-[55%] text-[#2f466f]">: Nano, 5G, 4G</p>
                </div>
                <div className="w-full flex justify-between">
                  <p className="text-sm text-[#2f466f]">SIM2</p>
                  <p className="text-sm w-[55%] text-[#2f466f]">: Nano, 5G, 4G</p>
                </div>
                <div className="w-full flex justify-between">
                  <p className="text-sm text-[#2f466f]">SIM1 Bands</p>
                  <p className="text-sm w-[55%] text-[#2f466f]">: 5G: FDD N1/N3/N5/N8/N28, TDD N38/N40/N41/N77/N78, 4G: TD-LTE 2600/2300/2500, FD-LTE 2100/1800/900/700/850</p>
                </div>
                <div className="w-full flex justify-between">
                  <p className="text-sm text-[#2f466f]">SIM2 Bands</p>
                  <p className="text-sm w-[55%] text-[#2f466f]">: 5G: FDD N1/N3/N5/N8/N28, TDD N38/N40/N41/N77/N78, 4G: TD-LTE 2600/2300/2500, FD-LTE 2100/1800/900/700/850</p>
                </div>
                <div className="w-full flex justify-between">
                  <p className="text-sm text-[#2f466f]">Voice over LTE (VoLTE)</p>
                  <p className="text-sm w-[55%] text-[#2f466f]">: Yes</p>
                </div>
                <div className="w-full flex justify-between">
                  <p className="text-sm text-[#2f466f]">Wi-Fi</p>
                  <p className="text-sm w-[55%] text-[#2f466f]">: Yes, with a/ac/ax/ax 6GHz/b/g/n/n 5GHz, MIMO</p>
                </div>
                <div className="w-full flex justify-between">
                  <p className="text-sm text-[#2f466f]">Wi-Fi Features</p>
                  <p className="text-sm w-[55%] text-[#2f466f]">: Mobile Hotspot</p>
                </div>
                <div className="w-full flex justify-between">
                  <p className="text-sm text-[#2f466f]">USB</p>
                  <p className="text-sm w-[55%] text-[#2f466f]">: USB 2.0, USB Type-C, Mass storage device, USB charging, USB On-The-Go</p>
                </div>
                <div className="w-full flex justify-between">
                  <p className="text-sm text-[#2f466f]">Bluetooth</p>
                  <p className="text-sm w-[55%] text-[#2f466f]">: Bluetooth v5.4</p>
                </div>
                <div className="w-full flex justify-between">
                  <p className="text-sm text-[#2f466f]">USB OTG Support</p>
                  <p className="text-sm w-[55%] text-[#2f466f]">: Yes</p>
                </div>
                <div className="w-full flex justify-between">
                  <p className="text-sm text-[#2f466f]">GPS</p>
                  <p className="text-sm w-[55%] text-[#2f466f]">: Yes with A-GPS, Glonass</p>
                </div>
                <div className="w-full flex justify-between">
                  <p className="text-sm text-[#2f466f]">NFC Chipset</p>
                  <p className="text-sm w-[55%] text-[#2f466f]">: Yes</p>
                </div>
                <div className="w-full flex justify-between">
                  <p className="text-sm text-[#2f466f]">Infrared</p>
                  <p className="text-sm w-[55%] text-[#2f466f]">: Yes</p>
                </div>
              </div>
            </div>

            <div id="sound" className="w-full h-[fit-content] rounded-[6px] border border-[#e6e6ef] relative">
              <div className="w-full h-[40px] flex gap-2 items-center px-2 bg-[#f3f5fd]">
                <Volume2 className="w-4" />
                <p className="text-sm font-medium text-[#073F6B]">Sound</p>
                <div className="py-[2px] px-2 bg-white text-[0.6em] flex items-center rounded-[50px] text-[#2A95E2] font-bold">8.0/10</div>
              </div>

              <div className="w-full h-full flex flex-col p-4 gap-3">
                <div className="w-full flex justify-between">
                  <p className="text-sm text-[#2f466f]">Speaker</p>
                  <p className="text-sm w-[55%] text-[#2f466f]">: Yes</p>
                </div>
                <div className="w-full flex justify-between">
                  <p className="text-sm text-[#2f466f]">Speaker Features</p>
                  <p className="text-sm w-[55%] text-[#2f466f]">: Dolby Atmos</p>
                </div>
                <div className="w-full flex justify-between">
                  <p className="text-sm text-[#2f466f]">Audio Jack</p>
                  <p className="text-sm w-[55%] text-[#2f466f]">: Yes, USB Type-C</p>
                </div>
                <div className="w-full flex justify-between">
                  <p className="text-sm text-[#2f466f]">Video Player</p>
                  <p className="text-sm w-[55%] text-[#2f466f]">: Yes, Video Formats: MP4</p>
                </div>
              </div>
            </div>

            <div id="sensors" className="w-full h-[fit-content] rounded-[6px] border border-[#e6e6ef] relative">
              <div className="w-full h-[40px] flex gap-2 items-center px-2 bg-[#f3f5fd]">
                <ScanFace className="w-4" />
                <p className="text-sm font-medium text-[#073F6B]">Sensors</p>
                <div className="py-[2px] px-2 bg-white text-[0.6em] flex items-center rounded-[50px] text-[#2A95E2] font-bold">--</div>
              </div>

              <div className="w-full h-full flex flex-col p-4 gap-3">
                <div className="w-full flex justify-between">
                  <p className="text-sm text-[#2f466f]">Fingerprint sensor</p>
                  <p className="text-sm w-[55%] text-[#2f466f]">: Yes, On-screen</p>
                </div>
                <div className="w-full flex justify-between">
                  <p className="text-sm text-[#2f466f]">Face Unlock</p>
                  <p className="text-sm w-[55%] text-[#2f466f]">: Yes</p>
                </div>
                <div className="w-full flex justify-between">
                  <p className="text-sm text-[#2f466f]">Other Sensors</p>
                  <p className="text-sm w-[55%] text-[#2f466f]">: Light sensor, Proximity sensor, Accelerometer, Compass, Gyroscope</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-[80%] mt-[10px] h-[fit-content] bg-white relative border border-[#e6e6ef] rounded-[10px]">
          <div className="w-full h-[100px] bg-gradient-to-t from-[#e6eafa] to-white p-[14px] rounded-t-[10px]">
            <h1 className="font-semibold text-[1.1em] lg:text-xl text-[#253858] ">Alternatives</h1>
            <div className="flex gap-2 w-full mt-2 overflow-auto scrollbar-none">
              {['Popular', 'Cheaper', 'From Xiaomi', 'Other Brands'].map((id) => (
                <div key={id} className="hover:bg-blue-500 hover:text-white rounded-[50px] bg-white flex items-center whitespace-nowrap justify-center text-sm text-[#50617E] py-1 px-3 cursor-pointer" >
                  {id.charAt(0).toUpperCase() + id.slice(1)}
                </div>
              ))}
            </div>
          </div>

          <div id="compare" className="w-full h-[fit-content] overflow-hidden relative p-2">
            <PhoneComparison/>
          </div>
        </div>

        <div className="w-full lg:w-[80%] mt-[10px] h-[fit-content] bg-white p-[14px] relative">
          <MobileLinks/>
        </div>
      </main>

      <Footer/>
    </div>
    </>
  );
}