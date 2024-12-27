"use client"
import { Menu, SearchIcon } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Search from "../Icons/Search";
import { Input } from "../ui/input";
import SelectMenu from "./SeleteMenu";
import Sidebar from "./Sidebar";

const NavMiddle = () => {
	const [open, setOpen] = useState(false);
	const options = ["Option 1", "Option 2", "Option 3", "Option 4"];

	const handleSelectionChange = (selectedItem) => {
		console.log("Selected item:", selectedItem);
	};

	return (
		<>
			<Sidebar open={open} setOpen={setOpen} />
			<div className="flex w-full items-center justify-between bg-darkBlue max-lg:p-2 lg:bg-white lg:pr-4">
				<div className="flex items-center gap-6 bg-white px-5 py-2 max-lg:w-full max-lg:justify-between max-lg:rounded-lg max-lg:px-3">
					<button onClick={() => setOpen(true)} className="lg:hidden">
						<Menu className="size-7 text-darkBlue lg:hidden" />
						<span className="sr-only">Open Sidebar</span>
					</button>
					<Link to="/">
						<div>
							<img className="h-9 w-40" src="/logo.png" alt="logo" />
						</div>
					</Link>
					<button className="lg:hidden">
						<SearchIcon className="size-6 text-darkBlue" />
					</button>
					<div className="relative hidden lg:block">
						<form action="#" className="flex items-center justify-center">
							<SelectMenu items={options} onChange={handleSelectionChange} />
							<Input
								type="text"
								className="h-10 w-[15rem] rounded-none border-l-0 shadow-sm focus-visible:ring-0 xl:w-[30rem]"
								placeholder="Search..."
								required
							/>
							<button
								type="submit"
								className="h-10 rounded-none rounded-ee-md rounded-se-md bg-darkBlue px-3 hover:bg-darkBlue/95"
							>
								<Search className="size-5" />
							</button>
						</form>
					</div>
				</div>
				<div className="hidden lg:block">
					<div className="flex h-10 items-center gap-3 rounded-md border-2 px-5 py-1 text-xs font-semibold 2xl:text-sm">
						<div className="flex items-center gap-2">
							<p>Mobile App</p>
							<Link to="/">
								<img
									className="size-5 object-cover"
									src="/apple.svg"
									alt="apple"
								/>
							</Link>
							<Link to="/">
								<img
									className="size-6 object-cover"
									src="/android.svg"
									alt="android"
								/>
							</Link>
						</div>
						<div className="flex items-center gap-2">
							<p>Browser Extension</p>
							<Link to="/">
								<img
									className="size-5 object-cover"
									src="/chrome.svg"
									alt="chrome"
								/>
							</Link>
							<Link to="/">
								<img className="size-6" src="/firefox.svg" alt="Firefox" />
							</Link>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default NavMiddle;
