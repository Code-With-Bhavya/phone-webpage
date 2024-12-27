"use client"
import { History, Home, Search, User } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import Heart from "../Icons/Heart";

const MobileBottomBar = () => {
	const location = useLocation();

	return (
		<div className="fixed bottom-0 z-[99] w-full bg-white px-4 py-2 text-center font-medium text-[#23262FCC] lg:hidden">
			<div className="mx-auto flex items-end justify-between sm:w-[80%]">
				<Link to="/">
					<button
						className={`flex flex-col items-center gap-1 ${
							location.pathname === "/" && "text-orange"
						}`}
					>
						<Home className="size-5 ssm:size-6" />
						<span className="text-xs">Home</span>
					</button>
				</Link>

				<button className="flex flex-col items-center gap-1">
					<Search className="size-5 ssm:size-6" />
					<span className="text-xs">Search</span>
				</button>

				<Link to="/history">
					<button className="relative flex flex-col items-center gap-1">
						<div className="absolute -top-12 flex size-12 items-center justify-center rounded-full border-[3px] border-white bg-orange">
							<Heart className="size-5 text-white ssm:size-6" />
						</div>
						<span className="text-xs">Saved</span>
					</button>
				</Link>
				<Link to="/ggg">
					<button className="flex flex-col items-center gap-1">
						<History className="size-5 ssm:size-6" />
						<span className="text-xs">History</span>
					</button>
				</Link>
				<Link to="/ggg">
					<button className="flex flex-col items-center gap-1">
						<User className="size-5 ssm:size-6" />
						<span className="text-xs">Profile</span>
					</button>
				</Link>
			</div>
		</div>
	);
};

export default MobileBottomBar;
