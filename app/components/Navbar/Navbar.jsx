"use client"
import NavCategories from "./NavCategories";
import NavMiddle from "./NavMiddle";
import NavTop from "./NavTop";

const Navbar = () => {
	return (
		<nav>
			{/* Nav Top */}
			<NavTop />
			<NavMiddle />
			<NavCategories />
		</nav>
	);
};

export default Navbar;
