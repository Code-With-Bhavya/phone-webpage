"use client"
import {
	Accordion,
	AccordionContent,
	AccordionItem,
} from "../ui/accordion";
import { ChevronDownIcon, ChevronRightIcon } from "lucide-react";
import { useState } from "react";

const SpecialPagesAccordion = () => {
	const [open, setOpen] = useState(null);
	return (
		<div>
			<Accordion
				type="single"
				collapsible
				className="mt-3 w-full lg:hidden"
				value={open}
			>
				<AccordionItem value="item-1" className="border-none">
					<div
						className="flex cursor-pointer items-center justify-between"
						onClick={() => {
							setOpen(open === "item-1" ? "" : "item-1");
						}}
					>
						<span className="font-semibold">Special Pages</span>
						{open === "item-1" ? (
							<ChevronDownIcon className="h-5 w-5 transition-transform duration-200" />
						) : (
							<ChevronRightIcon className="h-5 w-5 transition-transform duration-200" />
						)}
					</div>
					<AccordionContent>
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
					</AccordionContent>
				</AccordionItem>
			</Accordion>
		</div>
	);
};

export default SpecialPagesAccordion;
