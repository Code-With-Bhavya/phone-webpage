"use client"
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { ChevronDownIcon, ChevronLeftIcon, ChevronUpIcon } from "lucide-react";
import { useState } from "react";

const BottomToolBar = () => {
	const [isOpen, setIsOpen] = useState(true);
	return (
		<div
			className={` ${!isOpen ? "w-14 translate-y-0 justify-start rounded-ee-full rounded-se-full transition-all duration-300" : "w-full justify-center px-6 transition-all duration-300"} fixed bottom-0 z-[999] hidden h-12 items-center gap-4 bg-darkBlue lg:flex`}
		>
			<Button
				onClick={() => setIsOpen(!isOpen)}
				variant="ghost"
				className={` ${isOpen ? "p-0" : ""} select-none font-bold text-white hover:bg-transparent hover:text-white`}
			>
				{isOpen && <span>Hide</span>}
				<span className="rounded-full bg-orange p-[2px] text-white">
					<ChevronLeftIcon
						strokeWidth={3}
						className={`${!isOpen ? "rotate-180" : "rotate-0"} transition-all duration-700`}
					/>
				</span>
			</Button>

			{isOpen ? (
				<div
					className={`mx-auto flex w-[98%] items-center justify-between gap-4 transition-all duration-300 2xl:w-[80%]`}
				>
					<div>
						<Button
							variant="ghost"
							className="p-0 font-bold text-white hover:bg-transparent hover:text-white"
						>
							<span>Compare</span>
							<ChevronDownIcon strokeWidth={4} />
						</Button>
					</div>

					<div className="flex shrink-0 items-center gap-3">
						<Button
							variant="ghost"
							className="w-fit p-0 font-bold text-white hover:bg-transparent hover:text-white"
						>
							<img
								className="size-8 rounded-full border-2 object-cover"
								src="/footer/flight.png"
								alt="flight"
							/>
						</Button>
						<Button
							variant="ghost"
							className="w-fit p-0 font-bold text-white hover:bg-transparent hover:text-white"
						>
							<img
								className="size-8 rounded-full border-2 object-cover"
								src="/footer/hotel.png"
								alt="flight"
							/>
						</Button>
						<Button
							variant="ghost"
							className="w-fit p-0 font-bold text-white hover:bg-transparent hover:text-white"
						>
							<img
								className="size-8 rounded-full border-2 object-cover"
								src="/footer/mobile.png"
								alt="flight"
							/>
						</Button>
						<Button
							variant="ghost"
							className="w-fit p-0 font-bold text-white hover:bg-transparent hover:text-white"
						>
							<img
								className="size-8 rounded-full border-2 object-cover"
								src="/footer/car.png"
								alt="flight"
							/>
						</Button>
						<Button
							variant="ghost"
							className="w-fit p-0 font-bold text-white hover:bg-transparent hover:text-white"
						>
							<img
								className="size-8 rounded-full border-2 object-cover"
								src="/footer/bike.png"
								alt="flight"
							/>
						</Button>
						<Button
							variant="ghost"
							className="w-fit p-0 font-bold text-white hover:bg-transparent hover:text-white"
						>
							<img
								className="size-8 rounded-full border-2 object-cover"
								src="/footer/laptop.png"
								alt="flight"
							/>
						</Button>
						<Button
							variant="ghost"
							className="w-fit p-0 font-bold text-white hover:bg-transparent hover:text-white"
						>
							<img
								className="size-8 rounded-full border-2 object-cover"
								src="/footer/tab.png"
								alt="flight"
							/>
						</Button>
					</div>
					<div>
						<Button
							variant="ghost"
							className="p-0 font-bold text-white hover:bg-transparent hover:text-white"
						>
							<span>Saved Item</span>
							<ChevronUpIcon strokeWidth={4} />
						</Button>
					</div>

					<div className="flex h-10 w-[30rem]">
						<Button className="h-full rounded-ee-none rounded-se-none bg-orange text-white hover:bg-orange/90">
							SUBSCRIBE
						</Button>
						<form
							action=""
							className="flex h-full w-full items-center justify-center"
						>
							<div className="flex h-10 w-full items-center justify-center">
								<Input
									type="email"
									id="email"
									name="email"
									autoComplete="on"
									placeholder="Enter Your Email.."
									className="h-full w-full rounded-none border-none bg-white px-4 py-3 text-black placeholder:text-gray-400 focus-visible:outline-none focus-visible:ring-0"
									required
								/>
								<Button
									type="submit"
									className="h-full rounded-es-none rounded-ss-none bg-orange text-white hover:bg-orange/90"
								>
									Subscribe
								</Button>
							</div>
						</form>
					</div>
				</div>
			) : (
				""
			)}
		</div>
	);
};

export default BottomToolBar;
