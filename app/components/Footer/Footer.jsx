"use client"
import { Link } from "react-router-dom";
import { Separator } from "../ui/separator";
import AboutUsAccordion from "./AboutUsAccordion";
import CustomerListAccordion from "./CustomerListAccordion";
import SocialMediaLinks from "./SocialMediaLinks";
import SpecialPagesAccordion from "./SpecialPagesAccordion";
import SubscribeForm from "./SubscribeForm";

const Footer = () => {
	return (
		<footer className="mt-5 flex w-full flex-col justify-between bg-darkBlue p-4 pb-24 text-white lg:flex-row lg:p-6 lg:pb-16">
			<div className="flex flex-col justify-between gap-3 lg:w-[20%]">
				<Link to="/" className="flex w-fit">
					<div className="flex w-fit items-center justify-center gap-6 rounded-md bg-white px-4 py-2">
						<img
							className="h-9 w-40 object-contain"
							src="/logo.png"
							alt="logo"
						/>
					</div>
				</Link>
				<div className="hidden text-[#FCFCFDCC] lg:block">
					<p className="text-sm font-medium">
						Our portal combining more than 250 online stores lets you compare
						prices of a wide variety of products, creates price alert, and in
						addition to that give back Munafa points which can be redeemed in
						various forms.
					</p>
				</div>
				<div className="hidden lg:block">
					<SocialMediaLinks />
				</div>
			</div>
			<div className="lg:w-[20%]">
				<SpecialPagesAccordion />
				<div className="hidden lg:block">
					<h1 className="text-lg font-semibold">Special Pages</h1>
					<ul className="mt-2 space-y-2 text-sm font-medium text-[#FCFCFDCC]">
						<li>Invite Friends</li>
						<li>Corporate Gifting</li>
						<li>Deals Near Me</li>
						<li>Citywise Directory</li>
						<li>Alphabetical Directory</li>
						<li>Refer & Earn</li>
						<li>Careers</li>
						<li>Donate Cashback</li>
					</ul>
				</div>
			</div>
			<div className="lg:w-[20%]">
				<AboutUsAccordion />
				<div className="hidden lg:block">
					<h1 className="text-lg font-semibold">About</h1>
					<ul className="mt-2 space-y-2 text-sm font-medium text-[#FCFCFDCC]">
						<li>About Us</li>
						<li>Contact Us</li>
						<li>Press</li>
						<li>Blog</li>
						<li>Testimonials</li>
						<li>FAQ</li>
						<li>Sitemap</li>
					</ul>
				</div>
			</div>
			<div className="lg:w-[20%]">
				<CustomerListAccordion />
				<div className="hidden lg:block">
					<h1 className="text-lg font-semibold">Customer List</h1>
					<ul className="mt-2 space-y-2 text-sm font-medium text-[#FCFCFDCC]">
						<li>User Login</li>
						<li>User Signup</li>
						<li>Dealer Login</li>
						<li>Dealer Signup</li>
						<li>Become a Partner</li>
						<li>Student Program</li>
					</ul>
				</div>
			</div>
			<Separator className="my-3 w-full bg-[#FFFFFF3D] lg:hidden" />
			<div className="lg:hidden">
				<SubscribeForm />
			</div>
			<Separator className="my-3 w-full bg-[#FFFFFF3D] lg:hidden" />
			<div className="lg:hidden">
				<SocialMediaLinks />
			</div>
		</footer>
	);
};

export default Footer;
