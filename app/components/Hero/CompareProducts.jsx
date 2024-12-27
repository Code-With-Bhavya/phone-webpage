"use client"
import { ArrowDownUp } from "lucide-react";
import SelectMenu from "./SeleteMenu";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

const CompareProducts = () => {
	const options = ["Option 1", "Option 2", "Option 3", "Option 4"];

	const handleSelectionChange = (selectedItem) => {
		console.log("Selected item:", selectedItem);
	};

	return (
		<div className="relative hidden h-[22rem] w-[25%] flex-col justify-between rounded-lg bg-white p-8 lg:flex">
			<h1 className="text-center text-lg font-bold">COMPARE PRODUCTS</h1>
			<form action="#" className="flex flex-col gap-4 xl:gap-5">
				<SelectMenu items={options} onChange={handleSelectionChange} />
				<Input
					type="text"
					className="h-10 w-full border-2 focus-visible:ring-0"
					placeholder="Type Product 1 Name"
					name="product1"
					required
				/>
				<div className="flex w-full items-center justify-center">
					<ArrowDownUp className="size-4" />
				</div>
				<Input
					type="text"
					className="h-10 w-full border-2 focus-visible:ring-0"
					placeholder="Type Product 2 Name"
					name="product2"
					required
				/>

				<Button
					type="submit"
					className="border-2 border-[#5DB506] bg-[#5DB506] transition-colors duration-300 hover:bg-[#5DB506]"
				>
					Compare Features
				</Button>
			</form>
		</div>
	);
};

export default CompareProducts;
