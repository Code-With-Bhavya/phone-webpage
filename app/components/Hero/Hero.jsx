"use client"
import CompareProducts from "./CompareProducts";
import EarnCashback from "./EarnCashback";
import SearchProduct from "./SearchProduct";

const Hero = () => {
	return (
		<div className="flex h-auto w-full items-center justify-center gap-2 bg-darkBlue px-2 py-2 lg:px-2">
			<CompareProducts />
			<SearchProduct />
			<EarnCashback />
		</div>
	);
};

export default Hero;
