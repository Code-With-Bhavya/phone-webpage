"use client"
import { priceRanges } from "../../db/db";
import { useState } from "react";
import { Button } from "../ui/button";
import TopSlider from "./TopSlider";

const TrendingProducts = () => {
	const [selected, setSelected] = useState(null);
	const handleSelect = (item) => {
		if (selected === item.id) {
			setSelected(null);
		} else {
			setSelected(item.id);
		}
	};

	return (
		<div className="px-4 my-5 lg:px-6">
			<h1 className="font-semibold lg:text-xl">Trending Products</h1>
			<div>
				<TopSlider />
			</div>
			<div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
				{priceRanges.map((item) => (
					<Button
						key={item.id}
						onClick={() => handleSelect(item)}
						className={`${
							selected === item.id
								? "bg-orange text-white"
								: "bg-[#FCFCFD] text-black"
						} flex items-center justify-center p-4 py-6 text-xs font-semibold transition-colors duration-300 hover:bg-orange hover:text-white lg:text-sm`}
					>
						<h1>{item.label}</h1>
					</Button>
				))}
			</div>
		</div>
	);
};

export default TrendingProducts;
