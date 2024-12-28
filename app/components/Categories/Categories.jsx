"use client"
import { slides } from "../../db/db";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import { Grid, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Button } from "../ui/button";

const Categories = () => {
	return (
		<div className="relative my-4 select-none bg-white lg:px-6 lg:py-0">
			<Swiper
				modules={[Grid, Navigation, Pagination]}
				pagination={{ clickable: true, dynamicBullets: true }}
				slidesPerView="auto"
				spaceBetween={1}
				className="pb-5 lg:pb-0"
				grabCursor={true}
				touchRatio={1.5}
				breakpoints={{
					1024: {
						slidesPerView: "auto",
						spaceBetween: 20,
						pagination: {
							enabled: false,
						},
					},
				}}
				navigation={{
					nextEl: ".custom-next-arrow",
					prevEl: ".custom-prev-arrow",
				}}
				speed={500}
			>
				{slides.map((slide, i) => (
					<SwiperSlide
						key={i}
						id="slider"
						className="flex items-center justify-center "
					>
						<div className="flex h-full w-20 flex-col items-center justify-center gap-2">
							<img
								className="size-10 ssm:size-12 sm:size-14 xl:size-16"
								src={slide.icon}
								alt="img"
							/>
							<p className="text-center text-sm font-medium lg:text-base">
								{slide.label}
							</p>
						</div>
					</SwiperSlide>
				))}
			</Swiper>

			<Button className="custom-prev-arrow absolute left-2 top-1/2 z-50 hidden -translate-y-1/2 rounded-sm bg-orange px-1 py-6 shadow-lg transition-colors duration-300 hover:bg-orange/90">
				<ChevronLeft size={20} />
			</Button>
			<Button className="custom-next-arrow absolute right-2 top-1/2 z-50 hidden -translate-y-1/2 rounded-sm bg-orange px-1 py-6 shadow-lg transition-colors duration-300 hover:bg-orange/90 lg:flex">
				<ChevronRight size={20} />
			</Button>
		</div>
	);
};

export default Categories;
