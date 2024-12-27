"use client"
import { ChevronDown } from "lucide-react";
import { useState } from "react";

const SelectMenu = ({ items = [], onChange }) => {
	const [isOpen, setIsOpen] = useState(false);
	const [selectedOption, setSelectedOption] = useState("All Categories");

	const toggleDropdown = () => setIsOpen(!isOpen);

	const handleOptionClick = (option) => {
		setSelectedOption(option);
		setIsOpen(false);
		onChange(option);
	};

	return (
		<div className="relative w-[145px] text-sm font-medium slg:w-[160px]">
			<button
				onClick={toggleDropdown}
				type="button"
				className={`flex w-full items-center justify-between rounded-md rounded-ee-none rounded-se-none border-2 border-darkBlue bg-darkBlue px-3 py-2 text-left text-white shadow-sm focus:outline-none`}
			>
				{selectedOption}
				<span>
					<ChevronDown className="size-4" />
				</span>
			</button>

			{/* Dropdown menu */}
			<div
				className={`absolute z-10 mt-1 w-full rounded-md border border-gray-300 bg-white shadow-lg transition-transform duration-200 ease-out ${
					isOpen
						? "scale-100 opacity-100"
						: "pointer-events-none scale-95 opacity-0"
				} `}
			>
				<ul className="py-1">
					{items.map((item, index) => (
						<li
							key={index}
							onClick={() => handleOptionClick(item)}
							className="cursor-pointer px-4 py-2 hover:bg-gray-100"
						>
							{item}
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};

export default SelectMenu;
