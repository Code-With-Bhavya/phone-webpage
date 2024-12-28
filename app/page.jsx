import BannerSwiper from "./components/Banners/BannerSwiper";
import BestAppliances from "./components/BestAppliances/BestAppliances";
import BottomToolBar from "./components/BottomToolbar/BottomToolBar";
import MobileBottomBar from "./components/BottomToolbar/MobileBottomBar";
import Cashback from "./components/Cashback/Cashback";
import Categories from "./components/Categories/Categories";
import CompareProducts from "./components/CompareProducts/CompareProducts";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import LatestFeatures from "./components/LatestFeatures/LatestFeatures";
import Navbar from "./components/Navbar/Navbar";
import LatestNews from "./components/News/LatestNews";
import PopularProducts from "./components/PopularProducts/PopularProducts";
import TrendingProducts from "./components/TrendingProducts/TrendingProducts";

const Home = () => {
	return (
		<div className="poppins">
			{/*<Navbar />*/}
			<Hero />
			<Categories />
			<LatestFeatures />
			<TrendingProducts />
			<CompareProducts />
			<BannerSwiper />
			<PopularProducts />
			<LatestNews />
			<Cashback />
			<BestAppliances />
			<Footer />
			<BottomToolBar />
			{/*<MobileBottomBar />*/}
		</div>
	);
};

export default Home;
