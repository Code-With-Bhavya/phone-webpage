"use client"
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
const TopStories = ({ stories }) => {
	return (
		<div>
			<Card className="flex h-full w-full select-none flex-col justify-between max-lg:border-none max-lg:shadow-none lg:h-[23rem] lg:bg-[#778899]">
				<CardHeader className="p-0 py-4 lg:p-4">
					<CardTitle className="flex justify-start text-center font-semibold lg:justify-center lg:p-1 lg:text-[1.7rem] lg:text-white">
						Top Stories
					</CardTitle>
				</CardHeader>
				{/* For Desktop */}
				<CardContent className="hidden gap-3 lg:grid lg:grid-cols-2 xl:grid-cols-3">
					{stories.map((item, index) => (
						<div
							key={index}
							className={` ${index >= 4 ? "lg:hidden" : ""} ${index >= 4 ? "xl:flex" : ""} ${
								index >= 6 ? "xl:hidden" : ""
							}`}
						>
							<div className="relative h-[8rem] w-full rounded-lg border-[3px] border-white">
								<img
									className="absolute left-0 top-0 h-full w-full rounded-lg object-cover"
									src="/stories.png"
									alt={item.title}
									loading="lazy"
								/>
								<div className="absolute bottom-0 left-1/2 flex h-2/4 w-full -translate-x-1/2 items-center justify-center bg-[#FCFCFDCC] px-2 text-center text-xs font-bold text-black">
									<h1 className="line-clamp-2">{item.title}</h1>
								</div>
							</div>
						</div>
					))}
				</CardContent>
				{/* For Mobile */}
				<CardContent className="p-0 lg:hidden">
					<Swiper
						slidesPerView="auto"
						spaceBetween={10}
						touchRatio={1.2}
						speed={500}
					>
						{stories.map((item, index) => (
							<SwiperSlide key={index} className="w-48">
								<div className="relative h-[8rem] w-full rounded-lg border-[3px] border-white">
									<img
										className="absolute left-0 top-0 h-full w-full rounded-lg object-cover"
										src="/stories.png"
										alt={item.title}
										loading="lazy"
									/>
									<div className="absolute bottom-0 left-1/2 flex h-2/4 w-full -translate-x-1/2 items-center justify-center bg-[#FCFCFDCC] px-1 text-center text-[0.7rem] font-bold text-black">
										<h1 className="line-clamp-2">{item.title}</h1>
									</div>
								</div>
							</SwiperSlide>
						))}
					</Swiper>
				</CardContent>
			</Card>
		</div>
	);
};

export default TopStories;
