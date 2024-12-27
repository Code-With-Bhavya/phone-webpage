"use client"
import { Card, CardContent } from "../ui/card";
import { ArrowDown, Star } from "lucide-react";
import { Button } from "../ui/button";
import { Checkbox } from "../ui/checkbox";
import { Separator } from "../ui/separator";
const ProductCard = ({ item }) => {
	return (
		<div className="w-[16rem] select-none">
			<Card className="h-full w-full">
				<CardContent className="flex h-full flex-col p-0">
					<div className="flex h-40 items-center justify-center gap-2 rounded-se-xl rounded-ss-xl border-b-2 bg-[#FCFCFD] p-4 lg:justify-between lg:p-6">
						<img
							className="h-full w-full object-contain"
							src={item?.img}
							loading="lazy"
						/>
					</div>

					<div className="flex w-full flex-col p-2 py-4 lg:p-4">
						{/* name */}
						<div className="h-12">
							<h1 className="line-clamp-2 text-center text-sm font-semibold">
								{item?.name}
							</h1>
						</div>

						{/* features */}
						<div className="px-5">
							<div className="flex items-center justify-start gap-2">
								<img className="size-4" src="/cpu.svg" alt="cpu" />
								<p className="line-clamp-1 text-sm font-medium text-gray-600">
									{item?.processor}
								</p>
							</div>
							<div className="flex items-center justify-start gap-2">
								<img
									className="size-4 stroke-[4px]"
									src="/camera.svg"
									alt="cpu"
								/>
								<p className="line-clamp-1 text-sm font-medium text-gray-600">
									{item?.camera}
								</p>
							</div>
							<div className="flex items-center justify-start gap-2">
								<img className="size-4" src="/battery.svg" alt="cpu" />
								<p className="line-clamp-1 text-sm font-medium text-gray-600">
									{item?.battery}
								</p>
							</div>
						</div>
						{/* rating and price */}
						<div className="flex items-center justify-between gap-2 px-5 py-3">
							<div className="flex items-center justify-center gap-1 rounded-full bg-green-100 px-3 py-1 text-xs">
								<span className="text-green-800">{item?.rating}</span>
								<span>
									<Star className="size-3 fill-green-600 stroke-green-600" />
								</span>
							</div>
							<Separator orientation="vertical" className="h-5" />
							<div className="rounded-md border border-darkBlue px-4 py-1 text-sm font-semibold text-darkBlue">
								{item?.price}
							</div>
						</div>
						{/* discount , score , add to compare */}
						<div className="space-y-3 px-5">
							{/* discount */}
							<div>
								<p className="flex items-center justify-center gap-4 text-sm font-medium">
									<span className="flex items-center gap-1">
										<ArrowDown className="size-4 text-green-500" />
										<span className="text-green-500">{item?.discount}</span>
									</span>
									<span className="text-gray-600">in last 30 days</span>
								</p>
							</div>
							{/* score */}
							<div className="flex items-center justify-center gap-4 text-sm font-medium">
								<span
									className={` ${item?.score >= 70 ? "bg-green-600" : item?.score >= 50 ? "bg-orange" : "bg-red-600"} flex items-center gap-1 rounded-sm px-2 py-1 text-xs leading-none text-white`}
								>
									{item?.score}
								</span>
								<span className="text-gray-600">Our score</span>
							</div>
							{/* add to compare */}
							<div className="flex items-center justify-center gap-2">
								<Checkbox
									id={item?.id}
									className="border-gray-600 data-[state=checked]:border-orange data-[state=checked]:bg-orange"
								/>
								<label
									htmlFor={item?.id}
									className="cursor-pointer text-sm font-medium text-gray-600"
								>
									Add to Compare
								</label>
							</div>
							<div>
								<Button onClick={() => console.log(item)} className="w-full bg-orange hover:bg-orange/90">
									See Details
								</Button>
							</div>
						</div>
					</div>
				</CardContent>
			</Card>
		</div>
	);
};

export default ProductCard;
