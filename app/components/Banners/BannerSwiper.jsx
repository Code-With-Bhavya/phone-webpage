"use client"
import { ChevronLeft, ChevronRight } from "lucide-react";
import "swiper/css";
import "swiper/css/pagination";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Button } from "../ui/button";

const BannerSwiper = () => {
	return (
		<div className="relative hidden select-none bg-white pt-5 lg:block lg:px-6">
			<Swiper
				modules={[Navigation]}
				slidesPerView={3}
				spaceBetween={10}
				grabCursor={true}
				navigation={{
					nextEl: ".banner-next-arrow",
					prevEl: ".banner-prev-arrow",
				}}
			>
				{/* Each image in its own SwiperSlide */}
				<SwiperSlide className="flex items-center justify-center">
					<img
						className="h-36 w-full rounded-lg xl:h-48"
						src="/banner/1.png"
						alt="Banner 1"
					/>
				</SwiperSlide>
				<SwiperSlide className="flex items-center justify-center">
					<img
						className="h-36 w-full rounded-lg xl:h-48"
						src="/banner/2.png"
						alt="Banner 2"
					/>
				</SwiperSlide>
				<SwiperSlide className="flex items-center justify-center">
					<img
						className="h-36 w-full rounded-lg xl:h-48"
						src="/banner/3.png"
						alt="Banner 3"
					/>
				</SwiperSlide>
				<SwiperSlide className="flex items-center justify-center">
					<img
						className="h-36 w-full rounded-lg xl:h-48"
						src="/banner/1.png"
						alt="Banner 1"
					/>
				</SwiperSlide>
				<SwiperSlide className="flex items-center justify-center">
					<img
						className="h-36 w-full rounded-lg xl:h-48"
						src="/banner/2.png"
						alt="Banner 2"
					/>
				</SwiperSlide>
				<SwiperSlide className="flex items-center justify-center">
					<img
						className="h-36 w-full rounded-lg xl:h-48"
						src="/banner/3.png"
						alt="Banner 3"
					/>
				</SwiperSlide>
			</Swiper>

			{/* Prev Arrow */}
			<Button className="banner-prev-arrow absolute left-2 top-1/2 z-50 hidden -translate-y-1/2 rounded-sm bg-orange px-1 py-6 shadow-lg transition-colors duration-300 hover:bg-orange/90">
				<ChevronLeft size={20} />
			</Button>

			{/* Next Arrow */}
			<Button className="banner-next-arrow absolute right-2 top-1/2 z-50 flex -translate-y-1/2 rounded-sm bg-orange px-1 py-6 shadow-lg transition-colors duration-300 hover:bg-orange/90">
				<ChevronRight size={20} />
			</Button>
		</div>
	);
};

export default BannerSwiper;
