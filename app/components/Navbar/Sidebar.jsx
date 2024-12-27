"use client"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "../ui/sheet";
import AboutUsAccordion from "./AboutUsSide";
import CategoriesAccordion from "./CategoriesAccordion";
import SideBarTopLinks from "./SideBarTopLinks";

const Sidebar = ({ open, setOpen }) => {
	return (
		<Sheet open={open} onOpenChange={setOpen} className="z-[9999]">
			<SheetContent
				side="left"
				className="bottom-0 z-[9999] w-[80%] overflow-y-scroll scroll-smooth px-3"
				aria-label="Sidebar"
				aria-describedby="Sidebar"
			>
				<div className="flex h-full flex-col">
					<SheetHeader>
						<SheetTitle className="sr-only">Menu</SheetTitle>
						<SideBarTopLinks />
					</SheetHeader>

					{/* Sidebar content */}

					<Tabs defaultValue="category" className="mt-5 w-full">
						<TabsList className="w-full justify-between bg-white">
							<TabsTrigger
								value="category"
								className="h-10 w-full rounded-none rounded-s-lg border py-2 data-[state=active]:border-orange data-[state=active]:bg-orange data-[state=active]:text-white sm:text-base"
							>
								All Categories
							</TabsTrigger>
							<TabsTrigger
								value="about"
								className="h-10 w-full rounded-none rounded-e-lg border py-2 data-[state=active]:border-orange data-[state=active]:bg-orange data-[state=active]:text-white sm:text-base"
							>
								About Us
							</TabsTrigger>
						</TabsList>
						<TabsContent value="category" className="px-1">
							<CategoriesAccordion />
						</TabsContent>
						<TabsContent value="about">
							<AboutUsAccordion />
						</TabsContent>
					</Tabs>
				</div>
			</SheetContent>
		</Sheet>
	);
};

export default Sidebar;
