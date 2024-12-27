"use client"
import { Link } from "react-router-dom";

const SideBarTopLinks = () => {
	return (
		<div className="flex items-center justify-between gap-3 px-1 pt-5 font-medium">
			<Link to="/login">
				<div className="flex flex-col items-center justify-center gap-1">
					<div className="flex items-center justify-center rounded-full bg-[#F1F6FC] p-2">
						<img
							className="size-6 object-contain"
							src="/sidebar/Login.svg"
							alt="login"
						/>
					</div>
					<span className="text-xs sssm:text-sm">Login</span>
				</div>
			</Link>
			<Link to="/login">
				<div className="flex flex-col items-center justify-center gap-1">
					<div className="flex items-center justify-center rounded-full bg-[#F1F6FC] p-2">
						<img
							className="size-6 object-contain"
							src="/sidebar/user.svg"
							alt="login"
						/>
					</div>
					<span className="text-xs sssm:text-sm">Sign Up</span>
				</div>
			</Link>

			<Link to="/login">
				<div className="flex flex-col items-center justify-center gap-1">
					<div className="flex items-center justify-center rounded-full bg-[#F1F6FC] p-2">
						<img
							className="size-6 object-contain"
							src="/sidebar/Transfer Horizontal.svg"
							alt="login"
						/>
					</div>
					<span className="text-xs sssm:text-sm">Compare</span>
				</div>
			</Link>
			<Link to="/login">
				<div className="flex flex-col items-center justify-center gap-1">
					<div className="flex items-center justify-center rounded-full bg-[#F1F6FC] p-2">
						<img
							className="size-6 object-contain"
							src="/sidebar/Hand Money.svg"
							alt="login"
						/>
					</div>
					<span className="text-xs sssm:text-sm">Cashback</span>
				</div>
			</Link>
		</div>
	);
};

export default SideBarTopLinks;
