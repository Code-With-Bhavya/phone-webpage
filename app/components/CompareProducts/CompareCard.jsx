"use client"
import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";

const CompareCard = ({ item }) => {
	return (
		<div className="w-[270px] select-none lg:w-[280px]">
			<Card className="w-full">
				<CardContent className="flex flex-col gap-4 p-0">
					<div className="flex items-center justify-between p-4 pb-2">
						<img
							className="size-20 object-contain text-xs"
							src={item?.product1.imageUrl}
							alt={item?.product1.name}
							loading="lazy"
						/>
						<div className="w-1/2 space-y-2">
							<h1 className="line-clamp-2 text-sm font-semibold lg:text-base">
								{item?.product1.name}
							</h1>
							<p className="text-sm font-semibold text-gray-600">
								{item?.product1.price}
							</p>
						</div>
					</div>
					<div className="relative h-[1px] w-full bg-gray-300">
						<button className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 bg-white p-[6px] text-center text-xs font-semibold text-black lg:p-2">
							VS
						</button>
					</div>
					<div className="flex items-center justify-between p-4 pt-2">
						<div className="w-1/2 space-y-2">
							<h1 className="line-clamp-2 text-sm font-semibold lg:text-base">
								{item?.product2.name}
							</h1>
							<p className="text-sm font-semibold text-gray-600">
								{item?.product2.price}
							</p>
						</div>
						<img
							className="size-20 object-contain text-xs"
							src={item?.product2.imageUrl}
							alt={item?.product2.name}
							loading="lazy"
						/>
					</div>
				</CardContent>
			</Card>
			<Button
				variant="outline"
				onClick={() => {
					console.log(item);
				}}
				className="mt-2 w-full rounded-lg font-semibold shadow transition-colors duration-300 hover:border-orange hover:bg-orange hover:text-white"
			>
				Compare
			</Button>
		</div>
	);
};

export default CompareCard;
