"use client"
import Link from 'next/link';
import Facebook from "../Icons/Facebook";
import GooglePlus from "../Icons/GooglePlus";
import Instagram from "../Icons/Instagram";
import Key from "../Icons/Key";
import Linkedin from "../Icons/Linkedin";
import Pinterest from "../Icons/Pinterest";
import Rss from "../Icons/Rss";
import Telegram from "../Icons/Telegram";
import Twitter from "../Icons/Twitter";
import User from "../Icons/User";
import Whatsapp from "../Icons/Whatsapp";

const NavTop = () => {
	return (
		<div className="hidden w-full justify-between overflow-hidden bg-darkBlue px-2 text-white lg:flex">
			{/* Social Media Icons Section */}
			<div className="flex items-center gap-3 border-r-2 border-white py-[5px] pr-3">
				<Link href="/" target="_blank">
					<Facebook className="size-4 2xl:size-6" />
				</Link>
				<Link href="/" target="_blank">
					<Twitter className="size-4 2xl:size-6" />
				</Link>
				<Link href="/" target="_blank">
					<Linkedin className="size-4 2xl:size-6" />
				</Link>
				<Link href="/" target="_blank">
					<GooglePlus className="size-4 2xl:size-6" />
				</Link>
				<Link href="/" target="_blank">
					<Pinterest className="size-4 2xl:size-6" />
				</Link>
				<Link href="/" target="_blank">
					<Instagram className="size-4 2xl:size-6" />
				</Link>
				<Link href="/" target="_blank">
					<Rss className="size-4 2xl:size-6" />
				</Link>
			</div>
			{/* WhatsApp & Telegram Section */}
			<div className="flex w-fit items-center gap-3 px-2 py-[5px]">
				<p className="text-xs font-medium xl:text-sm">
					Join Whatsapp & Telegram Channel for Cashback & PriceDrop Alerts
				</p>
				<div className="flex items-center gap-2">
					<Link
						href="https://wa.me/+91xxxxxxxxx"
						target="_blank"
						rel="noopener noreferrer"
					>
						<Whatsapp className="size-4 2xl:size-6" />
					</Link>
					<Link
						href="https://t.me/yourtelegramusername"
						target="_blank"
						rel="noopener noreferrer"
					>
						<Telegram className="size-4 2xl:size-6" />
					</Link>
				</div>
			</div>

			{/* Right Side Links */}
			<div className="flex border-l-2 border-white text-xs font-medium 2xl:text-sm">
				<Link href="/" className="flex items-center border-r-2 border-white px-2 text-center hover:text-white">
					Refer & Earn
				</Link>

				<Link href="/" className="flex items-center gap-1 border-r-2 border-white px-2 text-center text-[#FFA500]">
					<Key className="size-4" /> <span>Login</span>
				</Link>

				<Link href="/" className="flex items-center gap-1 border-r-2 border-white px-2 text-center text-[#FFA500]">
					<User className="size-4" /> <span>Register</span>
				</Link>

				<Link href="/" className="flex items-center border-r-2 border-white px-2 text-center">
					Become a Partner
				</Link>

				<Link href="/" className="flex items-center justify-center px-2 text-center">
					Dealer Inquiry
				</Link>
			</div>
		</div>
	);
};

export default NavTop;
