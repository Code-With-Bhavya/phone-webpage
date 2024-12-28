"use client"
import { comparisonDataByCategory } from "../../db/db";
import { useEffect, useState } from "react";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import CompareCard from "./CompareCard";
import TopSlider from "./TopSlider";

const CompareProducts = () => {
	const [selected, setSelected] = useState("");
	const [filterData, setFilterData] = useState([]);
	useEffect(() => {
		const displayData = selected
			? comparisonDataByCategory.filter((item) => item.category === selected)
			: comparisonDataByCategory;
		setFilterData(displayData);
	}, [selected]);
	return (
		<div className="my-5 px-4 lg:px-6">
			<h1 className="font-semibold lg:text-xl">Compare Price and Features</h1>
			<div>
				<TopSlider selected={selected} setSelected={setSelected} />
			</div>
			<div className="mt-4">
				<Swiper
					slidesPerView="auto"
					spaceBetween={20}
					touchRatio={1.2}
					speed={500}
					grabCursor={true}
					className="pb-2"
				>
					{filterData?.map((item) => (
						<SwiperSlide id="slider" key={item.id} className="w-fit">
							<CompareCard item={item} />
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</div>
	);
};

export default CompareProducts;
