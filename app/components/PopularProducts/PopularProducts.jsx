
"use client"
import { ProductData } from "../../db/db";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import ProductCard from "./ProductCard";
import TopSlider from "./TopSlider";

const PopularProducts = () => {
	return (
		<div className="my-5 px-4 lg:px-6">
			<h1 className="font-semibold lg:text-xl">Latest & Popular Products</h1>
			<div>
				<TopSlider />
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
					{ProductData.map((item) => (
						<SwiperSlide key={item.id} className="w-fit">
							<ProductCard item={item} />
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</div>
	);
};

export default PopularProducts;
