"use client"
import { Search, Menu, ThumbsUp, ThumbsDown } from "lucide-react"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import Slider from "react-slick";

export default function Home() {
  const settings = {
    customPaging: function(i: number) {
      return (
        <a>
          <div className="relative w-[40px] h-[40px] flex items-center justify-center bg-[#E3EEFF] p-1 rounded-[6px]">
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

  return (
    <>
    <div className="w-screen relative ">
      <nav className="w-full bg-[#023359] h-[64px] flex items-center px-6 justify-between">
        <Menu className="text-white cursor-pointer"/>
        <h1 className="text-[1.6em] text-white font-semibold">Logo</h1>
        <Search className="text-white cursor-pointer"/>
      </nav>

      <main className="bg-[#f2f7ff] w-full pt-[10px] px-[10px]">
        {/*container*/}
        <div className="w-full  h-full h-screen bg-white p-[14px] relative">
          <div id="name" className="w-full relative h-[83px] border-b border-zinc-300">
            <h1 className="trunk txt-heading font-semibold text-xl text-[#253858]">Xiaomi Redmi Note 14 Pro+ 5G</h1>
            <p className="text-xs text-[#7b879b]">Market Satus: <span className="text-[#2f466f]"> Available </span> | Released On:<span className="text-[#2f466f]"> 09 Dec 2024 </span> </p>

            <div className="w-full mt-1 flex">
              <div className="rounded-[50px] rounded-tl-[0px] p-1 text-xs w-[fit-content] px-3 bg-[#d5eaff] text-[#5085c5]">NEW</div>
              <div className="text-xs rounded-full p-1 px-4 ml-4 bg-[#eefffc]">8/10 <span className="opacity-[0.6]">By Expert</span></div>
            </div>
          </div>
          <div className="w-full relative h-full">
            <div id="product" className="w-full flex">
              <div className="w-[34%] relative h-full relative flex items-center justify-center">
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
              <div className="w-1/2 h-full bg-red-400"></div>
            </div>
            <div className="w-full relative h-[140px] border-t border-zinc-300">
              <h1 className="font-medium mt-2 text-[#253858]">Xiaomi Redmi Note 14 Pro 5G Prices</h1>
              <div className="w-full h-[50px] mt-3 rounded-[12px] px-4 border border-zinc-300 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Image width={14} height={14} src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/flipkart-icon.png" alt="Flipkart icon"/>
                  <p className="text-xs text-zinc-600">Flipkart</p>
                </div>

                <p className="font-medium text-sm text-[#2f466f]">₹30,999</p>

                <button className="text-white font-medium px-4 py-[0.4em] text-sm rounded-[50px] bg-[#007fdb]">Go to store</button>
              </div>          
            </div>
          </div>
        </div>

        <div className="w-full mt-[10px] h-full h-screen bg-white p-[14px] relative">
          <div className="relative w-full flex gap-2 mt-4 h-[210px]">
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
        </div>
      </main>  
    </div>
    </>
  );
}