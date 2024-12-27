"use client"
import { ArrowRight } from "lucide-react";
import { Button } from "../ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

const NewsCard = ({ item }) => {
	return (
		<div>
			<Card className="w-full max-lg:border-none max-lg:shadow-none">
				<CardHeader className="flex flex-row items-center justify-between pb-3 max-lg:px-0 max-lg:pt-2">
					<CardTitle className="font-semibold lg:text-lg">
						Latest News
					</CardTitle>
					<Button
						variant="outline"
						className="hidden text-xs font-semibold max-lg:border-none max-lg:shadow-none lg:inline-flex"
					>
						View All <ArrowRight />
					</Button>
				</CardHeader>
				<CardContent className="flex flex-col gap-3 max-lg:px-0">
					{item.map((item, index) => (
						<div
							key={item.id}
							className={`${
								(index >= 4 ? "hidden lg:flex" : "") ||
								(index >= 1 && "lg:hidden")
							} flex flex-row gap-2`}
						>
							<div className="shrink-0">
								<img
									className="h-[4.5rem] w-[4.5rem] rounded-md object-cover"
									src={item.image}
									alt={item.title}
								/>
							</div>
							<div className="flex flex-col">
								<h1 className="line-clamp-1 text-sm font-semibold">
									{item.title}
								</h1>
								<p className="line-clamp-3 text-xs font-medium text-[#23262F99] lg:font-semibold">
									{item.description}
								</p>
							</div>
						</div>
					))}
				</CardContent>
			</Card>
			<div className="flex items-center justify-center">
				<Button className="w-fit bg-orange hover:bg-orange/90 lg:hidden">
					See All
				</Button>
			</div>
		</div>
	);
};

export default NewsCard;
