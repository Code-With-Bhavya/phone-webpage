"use client"
import dynamic from 'next/dynamic'
const NavCategories = dynamic(() => import('./NavCategories'), { ssr: false });
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
