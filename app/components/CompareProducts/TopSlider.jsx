"use client"
import { slides } from "../../db/db";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";

const TopSlider = ({ selected, setSelected }) => {
	const handleSelect = (item) => {
		if (selected === item) {
			setSelected("");
			return;
		}
		setSelected(item);
	};
	return (
		<div className="relative select-none bg-white pt-3 lg:pt-4">
			<Swiper
				slidesPerView="auto"
				spaceBetween={10}
				className="flex items-center border-b-2"
				touchRatio={1.2}
				speed={500}
			>
				{slides.map((slide, index) => (
					<SwiperSlide
						key={index}
						className="z-50 flex w-fit items-center justify-center"
					>
						<button
							onClick={() => handleSelect(slide.label)}
							className={` ${selected === slide.label ? "border-orange bg-orange text-white" : "bg-[#FCFCFD]"} flex w-fit items-center justify-center gap-2 rounded-lg rounded-ee-none rounded-es-none border-2 border-b-0 px-3 py-[5px] transition-colors duration-300`}
						>
							<img className="size-5" src={slide.icon} alt={slide.label} />
							<p className="text-sm font-medium"> {slide.label}</p>
						</button>
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	);
};

export default TopSlider;
