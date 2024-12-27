"use client"
import {
	Accordion,
	AccordionContent,
	AccordionItem,
} from "../ui/accordion";
import { ChevronDownIcon, ChevronRightIcon } from "lucide-react";
import { useState } from "react";

const CustomerListAccordion = () => {
	const [open, setOpen] = useState(null);
	return (
		<div>
			<Accordion
				type="single"
				collapsible
				className="mt-3 w-full lg:hidden"
				value={open}
			>
				<AccordionItem value="item-2" className="border-none">
					<div
						className="flex cursor-pointer items-center justify-between"
						onClick={() => {
							setOpen(open === "item-2" ? "" : "item-2");
						}}
					>
						<span className="font-semibold">Customer List</span>
						{open === "item-2" ? (
							<ChevronDownIcon className="h-5 w-5 transition-transform duration-200" />
						) : (
							<ChevronRightIcon className="h-5 w-5 transition-transform duration-200" />
						)}
					</div>
					<AccordionContent>
						<ul className="mt-2 space-y-2 text-sm font-medium text-[#FCFCFDCC]">
							<li>User Login</li>
							<li>User Signup</li>
							<li>Dealer Login</li>
							<li>Dealer Signup</li>
							<li>Become a Partner</li>
							<li>Student Program</li>
						</ul>
					</AccordionContent>
				</AccordionItem>
			</Accordion>
		</div>
	);
};

export default CustomerListAccordion;
