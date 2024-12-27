"use client"
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const AboutUsSide = () => {
	return (
		<div className="flex w-full flex-col gap-3 py-3">
			<Link to="/about-us" className="w-full">
				<div className="flex h-10 items-center justify-between gap-2 rounded-lg bg-[#F1F6FC] px-2 py-2 text-sm font-medium">
					<div className="flex items-center gap-2 py-1">
						<img
							className="size-5"
							src="/sidebar/Info Circle.svg"
							alt="about-us"
						/>
						<span>About Us</span>
					</div>
					<div>
						<ChevronRight className="size-4" />
					</div>
				</div>
			</Link>
			<Link to="/contact-us" className="w-full">
				<div className="flex h-10 items-center justify-between gap-2 rounded-lg bg-[#F1F6FC] px-2 py-2 text-sm font-medium">
					<div className="flex items-center gap-2 py-1">
						<img className="size-5" src="/sidebar/Letter.svg" alt="about-us" />
						<span>Contact Us</span>
					</div>
					<div>
						<ChevronRight className="size-4" />
					</div>
				</div>
			</Link>
			<Link to="/contact-us" className="w-full">
				<div className="flex h-10 items-center justify-between gap-2 rounded-lg bg-[#F1F6FC] px-2 py-2 text-sm font-medium">
					<div className="flex items-center gap-2 py-1">
						<img
							className="size-5"
							src="/sidebar/Question Circle.svg"
							alt="about-us"
						/>
						<span>FAQs</span>
					</div>
					<div>
						<ChevronRight className="size-4" />
					</div>
				</div>
			</Link>
			<Link to="/contact-us" className="w-full">
				<div className="flex h-10 items-center justify-between gap-2 rounded-lg bg-[#F1F6FC] px-2 py-2 text-sm font-medium">
					<div className="flex items-center gap-2 py-1">
						<img
							className="size-5"
							src="/sidebar/Users Group Two Rounded.svg"
							alt="about-us"
						/>
						<span>Testimonial</span>
					</div>
					<div>
						<ChevronRight className="size-4" />
					</div>
				</div>
			</Link>
			<Link to="/contact-us" className="w-full">
				<div className="flex h-10 items-center justify-between gap-2 rounded-lg bg-[#F1F6FC] px-2 py-2 text-sm font-medium">
					<div className="flex items-center gap-2 py-1">
						<img
							className="size-5"
							src="/sidebar/Download-Square.svg"
							alt="about-us"
						/>
						<span>Download Mobile App</span>
					</div>
					<div>
						<ChevronRight className="size-4" />
					</div>
				</div>
			</Link>
			<Link to="/contact-us" className="w-full">
				<div className="flex h-10 items-center justify-between gap-2 rounded-lg bg-[#F1F6FC] px-2 py-2 text-sm font-medium">
					<div className="flex items-center gap-2 py-1">
						<img className="size-5" src="/sidebar/Help.svg" alt="about-us" />
						<span>Download Browser Extension</span>
					</div>
					<div>
						<ChevronRight className="size-4" />
					</div>
				</div>
			</Link>
		</div>
	);
};

export default AboutUsSide;
