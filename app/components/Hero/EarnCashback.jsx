"use client"
import { Button } from "../ui/button";

const EarnCashback = () => {
	return (
		<div className="hidden flex-col justify-between gap-2 rounded-lg bg-white p-4 lg:flex lg:h-[22rem] lg:w-[25%] lg:p-8">
			<h1 className="w-full text-center text-lg font-bold">
				HOW TO EARN CASHBACK
			</h1>
			<div className="flex flex-col gap-2 xl:gap-4">
				<div className="flex w-full items-center gap-2 rounded-md border-2">
					<div className="flex shrink-0 items-center justify-center border-r-2 p-2">
						<img className="size-5" src="/Monitor.svg" alt="svg" />
					</div>
					<p className="line-clamp-1 text-xs font-medium xl:text-sm">
						1. Join free
					</p>
				</div>
				<div className="flex w-full items-center gap-2 rounded-md border-2">
					<div className="flex shrink-0 items-center justify-center border-r-2 p-2">
						<img className="size-5 shrink-0" src="/CartLarge.svg" alt="svg" />
					</div>
					<p className="line-clamp-1 text-xs font-medium xl:text-sm">
						2. Visit Retailers via US & Shop
					</p>
				</div>
				<div className="flex w-full items-center gap-2 rounded-md border-2">
					<div className="flex shrink-0 items-center justify-center border-r-2 p-2">
						<img className="size-5 shrink-0" src="/HandHeart.svg" alt="svg" />
					</div>
					<p className="line-clamp-1 text-xs font-medium xl:text-sm">
						3. Earn Cashback
					</p>
				</div>
				<div className="flex w-full items-center gap-2 rounded-md border-2">
					<div className="flex shrink-0 items-center justify-center border-r-2 p-2">
						<img className="size-5 shrink-0" src="/Banknote.svg" alt="svg" />
					</div>
					<p className="line-clamp-1 text-xs font-medium xl:text-sm">
						4. Transfer to Bank
					</p>
				</div>
			</div>
			<div className="flex w-full items-center gap-2">
				<Button className="w-full bg-[#5DB506] text-xs hover:bg-[#5DB506] max-slg:px-2 xl:text-sm">
					Watch Video
				</Button>
				<Button className="w-full text-xs max-slg:px-2 xl:text-sm">
					Join Free
				</Button>
			</div>
		</div>
	);
};

export default EarnCashback;
