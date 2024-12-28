"use client"
import { brands, NavCategoriesLinks } from "../../db/db";
import { ChevronDownIcon, PartyPopper } from "lucide-react";
import { Fragment } from "react";
import Marquee from "react-fast-marquee";
import Link from 'next/link';
import { Separator } from "../ui/separator";

const NavCategories = () => {
	return (
		<div>
			<div className="hidden h-10 items-center bg-darkBlue px-1 lg:flex 2xl:px-4 2xl:pl-0">
				<div className="flex w-full items-center justify-between pr-2 text-xs font-medium 2xl:text-sm">
					{NavCategoriesLinks?.map((link, index) => (
						<Fragment key={index}>
							<Link
								href="/"
								className="flex h-10 items-center justify-center gap-2 px-2 py-1 font-medium text-white"
							>
								{link.label}
							</Link>
							<Separator
								className={`h-4 bg-white/40 ${index === NavCategoriesLinks.length - 1 ? "hidden" : ""}`}
								orientation="vertical"
							/>
						</Fragment>
					))}
				</div>

				{/* Compare & Offers Section */}
				<div className="ml-auto hidden w-fit items-center justify-center text-xs lg:flex 2xl:text-sm">
					<Link
						href="/"
						className="flex h-10 items-center justify-center bg-[#DC4F45] px-2 py-1 font-medium text-white"
					>
						Compare
					</Link>
					<Link
						href="/"
						className="flex h-10 items-center justify-center bg-[#C8DD16] px-2 py-1 font-medium text-black"
					>
						Coupons
					</Link>
					<Link
						href="/"
						className="flex h-10 items-center justify-center gap-2 px-2 py-1 font-medium text-white"
					>
						<PartyPopper className="size-4 text-orange lg:size-5" />
						<p className="text-nowrap">Best Offers</p>
					</Link>
				</div>
			</div>
			<div className="flex h-12 w-full items-center bg-white">
				<div className="hidden h-10 w-[20%] items-center justify-center bg-orange px-5 text-white lg:flex">
					<h1 className="text-nowrap text-sm font-medium">
						Popular Cashback Stores
					</h1>
				</div>

				{/* Brand Logos */}
				<Marquee autoFill={true} speed={20}>
					{brands.map((brand) => (
						<img
							key={brand.alt}
							className="mx-3 h-12 w-16 object-contain lg:w-[4rem] xl:w-32"
							src={brand.img}
							alt={brand.alt}
						/>
					))}
				</Marquee>

				<button className="hidden h-10 w-[10%] items-center justify-center gap-2 bg-orange px-5 text-white lg:flex">
					<span className="text-nowrap text-sm font-medium">More</span>
					<ChevronDownIcon className="size-5 text-white" strokeWidth={3} />
				</button>
			</div>
		</div>
	);
};

export default NavCategories;
