"use client"
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "../ui/accordion";
import { CategoriesAccordionData } from "../../db/db";
import { Fragment } from "react";
import { Link } from "react-router-dom";
import { Separator } from "../ui/separator";

const CategoriesAccordion = () => {
	return (
		<Accordion type="single" collapsible className="w-full space-y-3 py-3">
			{CategoriesAccordionData.map((category) => (
				<AccordionItem
					value={category.label}
					key={category.label}
					className="rounded-lg border-none bg-[#F1F6FC] px-2 font-medium"
				>
					<AccordionTrigger className="rounded-lg bg-[#F1F6FC] px-2 py-2 hover:no-underline">
						<div className="flex items-center gap-2 sm:text-lg">
							<img
								className="mr-2 size-6"
								src={category.icon}
								alt={category.label}
							/>
							<span>{category.label}</span>
						</div>
					</AccordionTrigger>
					<AccordionContent className="px-2 py-2">
						<ul className="sm:text-base">
							{category.options.map((subCategory, index) => (
								<Fragment key={index}>
									<Link to={subCategory.link}>
										<li>{subCategory.name}</li>
									</Link>
									<Separator
										orientation="horizontal"
										className={`${
											index !== category.options.length - 1 ? "my-2" : "hidden"
										}`}
									/>
								</Fragment>
							))}
						</ul>
					</AccordionContent>
				</AccordionItem>
			))}
		</Accordion>
	);
};

export default CategoriesAccordion;
