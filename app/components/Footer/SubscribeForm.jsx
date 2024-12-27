"use client"
import { Button } from "../ui/button";
import { Input } from "../ui/input";

const SubscribeForm = () => {
	return (
		<div className="relative flex flex-col gap-3">
			<h1 className="font-semibold">Subscribe</h1>
			<p className="text-sm font-medium text-[#FFFFFFCC]">
				Sign up to receive Latest Offers, Cashback & Pricedrop Alerts.
			</p>
			<form action="">
				<div className="relative h-10 w-full max-w-[20rem]">
					<Input
						type="email"
						id="email"
						name="email"
						autoComplete="on"
						placeholder="Enter Your Email.."
						className="absolute h-full w-full border-none bg-white px-4 py-3 text-black placeholder:text-gray-400 focus-visible:outline-none"
						required
					/>
					<Button className="absolute right-0 h-full bg-orange text-white hover:bg-orange/90">
						Subscribe
					</Button>
				</div>
			</form>
		</div>
	);
};

export default SubscribeForm;
