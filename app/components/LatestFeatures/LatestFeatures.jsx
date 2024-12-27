"use client"
import { SmartphoneFeatures } from "../../db/db";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "swiper/css";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Button } from "../ui/button";
import TopSlider from "./TopSlider";
const LatestFeatures = () => {
	return (
		<div className="select-none px-4 lg:my-6 lg:px-6">
			<h1 className="font-semibold lg:text-xl">Search By Latest Features</h1>
			<TopSlider />
			<div className="relative mt-4">
				<Swiper
					modules={[Navigation]}
					slidesPerView="auto"
					spaceBetween={10}
					touchRatio={1.2}
					speed={500}
					grabCursor={true}
					navigation={{
						nextEl: ".next-arrow",
						prevEl: ".custom-prev-arrow",
					}}
				>
					{SmartphoneFeatures.map((item) => (
						<SwiperSlide key={item.id} className="w-40 lg:w-48">
							<div>
								<img
									className="h-28 rounded-lg object-cover lg:h-32"
									src={item.image}
									alt={item.title}
								/>
								<div className="mt-1 text-center">
									<h1 className="text-sm font-bold lg:text-base">
										{item.title}
									</h1>
									<p className="text-xs font-semibold text-[#23262FCC] lg:text-sm">
										{item.category}
									</p>
								</div>
							</div>
						</SwiperSlide>
					))}
				</Swiper>
				<Button className="prev-arrow absolute left-2 top-1/2 z-50 hidden -translate-y-1/2 rounded-sm bg-orange px-1 py-6 shadow-lg transition-colors duration-300 hover:bg-orange/90">
					<ChevronLeft size={20} />
				</Button>
				<Button className="next-arrow absolute -right-4 top-[38%] z-50 hidden -translate-y-1/2 rounded-sm bg-orange px-1 py-6 shadow-lg transition-colors duration-300 hover:bg-orange/90 lg:flex">
					<ChevronRight size={20} />
				</Button>
			</div>
		</div>
	);
};

export default LatestFeatures;
