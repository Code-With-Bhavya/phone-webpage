"use client"
import { ChevronRight } from "lucide-react";
import { useRef, useState } from "react";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { useDebounce } from "use-debounce";
import { Features, Items } from "../../db/db";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import PriceRangeSlider from "./PriceRangeSlider";

const SearchProduct = () => {
	const swiperRef = useRef(null);
	const [priceRange, setPriceRange] = useState({ min: 0, max: 45000 });
	const [value] = useDebounce(priceRange, 600);
	const [filteredItem, setFilteredItem] = useState("");
	const [selectedFeatures, setSelectedFeatures] = useState([]);

	// Function to set range
	const handlePrice = (e) => {
		const { value, name } = e.target;

		// check if value is not a number
		if (isNaN(value)) {
			return;
		}
		const newValue = Number(value);
		const min = Number(priceRange.min);
		const max = Number(priceRange.max);

		if (newValue === 0) {
			setPriceRange((prev) => ({ ...prev, [name]: "" }));
			return;
		}

		if (name === "min") {
			if (newValue < 0 || newValue > max) {
				setPriceRange((prev) => ({ ...prev, [name]: 0 }));
				return;
			}
		}

		if (name === "max") {
			if (newValue > 45000) {
				setPriceRange((prev) => ({ ...prev, [name]: 45000 }));
				return;
			}
		}

		setPriceRange((prev) => ({ ...prev, [name]: newValue }));
	};

	// Function to slide next on button click
	const handleNextClick = () => {
		if (swiperRef.current) {
			swiperRef.current.slideNext();
		}
	};

	const handleFeatures = (item) => {
		setSelectedFeatures((prev) => {
			if (prev.includes(item)) {
				return prev.filter((i) => i !== item);
			}
			return [...prev, item];
		});
	};

	return (
		<div className="relative flex w-full flex-col gap-4 rounded-lg bg-white p-4 lg:h-[22rem] lg:w-[50%] lg:justify-between lg:gap-[1.1rem] lg:p-8">
			<div className="relative w-full">
				{/* for desktop */}
				<div className="relative hidden select-none lg:block">
					{/* Swiper Container */}
					<Swiper
						spaceBetween={10}
						slidesPerView="auto"
						onSwiper={(swiper) => (swiperRef.current = swiper)}
						className="ml-0 lg:w-[89%] slg:w-[90%] xl:w-[92%]"
					>
						{Items.map((item, index) => (
							<SwiperSlide key={index + 1} className="w-fit">
								<button
									onClick={() => setFilteredItem(item.name)}
									className={` ${filteredItem === item.name && "border-orange bg-orange text-white"} flex w-fit items-center gap-2 rounded-md border-2 px-2 py-[5px] text-sm font-medium transition-colors duration-300`}
								>
									<img
										className="h-4 w-4"
										src={item.icon}
										alt={item.name}
										loading="lazy"
									/>
									{item.name}
								</button>
							</SwiperSlide>
						))}
					</Swiper>
				</div>
				<button
					onClick={handleNextClick}
					className=":bg-orange absolute right-0 top-1/2 z-50 hidden -translate-y-1/2 transform rounded-md border-2 border-orange bg-orange px-2 py-[5px] text-white transition-colors duration-300 hover:bg-white hover:text-orange lg:block"
				>
					<ChevronRight className="size-5" />
				</button>
				{/* for mobile */}
				<h1 className="w-full pb-3 text-center font-semibold lg:hidden lg:text-lg">
					Categories
				</h1>
				<div className="grid grid-cols-3 grid-rows-2 gap-2 lg:hidden">
					{Items.map((item, index) => (
						<button
							onClick={() => setFilteredItem(item.name)}
							key={index + 1}
							className={`${filteredItem === item.name && "border-orange bg-orange text-white"} flex w-full items-center justify-center gap-2 rounded-md border px-2 py-[5px] text-center text-xs font-medium transition-colors duration-300 ssm:text-sm ${
								index >= 5 && "hidden lg:flex"
							} `}
						>
							<img
								className="h-4 w-4"
								src={item.icon}
								alt={item.name}
								loading="lazy"
							/>
							<span>{item.name}</span>
						</button>
					))}
					<button className="flex w-full items-center justify-center rounded-md border px-4 py-[5px] text-center text-xs font-medium ssm:text-sm">
						More
					</button>
				</div>
			</div>
			{/* Price Range */}
			<div className="flex flex-col items-center justify-center gap-4">
				<div className="flex w-full flex-col lg:flex-row">
					<h1 className="text-nowrap text-center font-semibold lg:mb-auto lg:text-lg">
						Price Range
					</h1>
					<div className="mt-5 flex w-full flex-col items-center justify-center gap-7 lg:mt-3">
						<PriceRangeSlider
							min={0}
							max={45000}
							externalMinVal={value.min ? value.min : 0}
							externalMaxVal={value.max === 0 ? 0 : value.max ? value.max : 0}
							onChange={(data) => setPriceRange(data)}
						/>
						<div className="mt-2 flex w-full items-center justify-center gap-2 sm:flex-row sm:gap-4 lg:mt-6">
							<div className="flex items-center justify-center rounded-md border">
								<p className="flex h-8 items-center justify-center border-r px-3 py-1 text-sm">
									Rs
								</p>
								<Input
									className="h-8 w-20 border-none shadow-none focus-visible:ring-0"
									type="text"
									name="min"
									placeholder="Min"
									onChange={(e) => handlePrice(e)}
									value={priceRange.min}
								/>
							</div>
							<h1 className="text-center text-sm font-semibold">TO</h1>
							<div className="flex items-center justify-center rounded-md border">
								<p className="flex h-8 items-center justify-center border-r px-3 py-1 text-sm">
									Rs
								</p>
								<Input
									className="h-8 w-20 border-none shadow-none focus-visible:ring-0"
									type="text"
									name="max"
									placeholder="Max"
									onChange={(e) => handlePrice(e)}
									value={priceRange.max}
								/>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* Features */}
			<div className="flex select-none flex-col justify-center gap-4 max-lg:items-center lg:flex-row lg:justify-between">
				<div>
					<h1 className="mr-auto text-nowrap font-semibold lg:text-lg">
						Features
					</h1>
				</div>
				<div className="grid w-full grid-cols-3 grid-rows-2 flex-wrap gap-2 text-sm font-medium sm:grid-cols-5 lg:grid-cols-4 xl:grid-cols-5">
					{Features.map((item, index) => (
						<button
							onClick={() => handleFeatures(item.label)}
							key={index + 1}
							className={`${selectedFeatures.includes(item.label) && "border-orange bg-orange text-white"} ${index >= 6 && "hidden sm:flex"} flex w-full items-center justify-center gap-2 text-nowrap rounded-md border px-2 py-[5px] text-center text-xs font-medium transition-colors duration-300 ssm:text-sm`}
						>
							{item.label}
						</button>
					))}
				</div>
			</div>
			<div className="flex items-center justify-center gap-4">
				<Button className="border-2 border-orange bg-orange transition-colors duration-300 hover:bg-orange lg:ml-auto lg:w-28 lg:border-[#5DB506] lg:bg-[#5DB506] lg:hover:bg-[#5DB506]">
					Search
				</Button>
			</div>
		</div>
	);
};

export default SearchProduct;
