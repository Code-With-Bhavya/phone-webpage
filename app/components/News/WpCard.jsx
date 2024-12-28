"use client"
import Link from 'next/link';
import Whatsapp from "../Icons/Whatsapp";
import { Card, CardContent } from "../ui/card";
import { Separator } from "../ui/separator";

const WpCard = () => {
	return (
		<Card className="w-full border border-[#70bc47] bg-[#E6FCDA] sm:h-24">
			<CardContent className="h-full p-0 px-1 lg:px-4">
				<div className="flex h-full items-center justify-between gap-3 p-2 2xl:gap-10">
					<img
						className="h-9 w-28 object-contain xl:w-36"
						src="/logo.png"
						alt="logo"
					/>
					<Separator orientation="vertical" className="hidden sm:block" />
					<div className="hidden sm:block">
						<h1 className="text-wrap text-xs font-semibold 2xl:text-sm">
							join now for cashback, coupon and price drop alerts
						</h1>
					</div>
					<Separator orientation="vertical" className="hidden sm:block" />
					<div className="flex items-center justify-center max-ssm:gap-2 ssm:gap-4">
						<Link href="https://wa.me/+1234567890" target="_blank">
							<div className="flex flex-col items-center gap-2 text-center">
								<Whatsapp className="size-7 xl:size-8" />
								<p className="text-xs font-semibold 2xl:text-sm">Whatsapp</p>
							</div>
						</Link>
						<Link href="https://t.me/yourtelegramusername" target="_blank">
							<div className="flex flex-col items-center gap-2 text-center">
								<img
									className="size-7 xl:size-8"
									src="/telegram.svg"
									alt="telegram"
								/>
								<p className="text-xs font-semibold 2xl:text-sm">Telegram</p>
							</div>
						</Link>
					</div>
				</div>
				<Separator orientation="horizontal" className="sm:hidden" />
				<div className="p-2 text-center sm:hidden">
					<h1 className="text-xs font-semibold lg:text-sm">
						join now for cashback, coupon and price drop alerts
					</h1>
				</div>
			</CardContent>
		</Card>
	);
};

export default WpCard;
