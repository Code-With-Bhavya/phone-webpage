"use client"
import { Link } from "react-router-dom";
import Facebook from "../Icons/Facebook";
import GooglePlus from "../Icons/GooglePlus";
import Instagram from "../Icons/Instagram";
import Linkedin from "../Icons/Linkedin";
import Pinterest from "../Icons/Pinterest";
import Rss from "../Icons/Rss";
import Twitter from "../Icons/Twitter";
const SocialMediaLinks = () => {
	return (
		<div className="flex items-center gap-3">
			<Link to="/" target="_blank">
				<Facebook className="size-6" />
			</Link>
			<Link to="/" target="_blank">
				<Twitter className="size-6" />
			</Link>
			<Link to="/" target="_blank">
				<Linkedin className="size-6" />
			</Link>
			<Link to="/" target="_blank">
				<GooglePlus className="size-6" />
			</Link>
			<Link to="/" target="_blank">
				<Pinterest className="size-6" />
			</Link>
			<Link to="/" target="_blank">
				<Instagram className="size-6" />
			</Link>
			<Link to="/" target="_blank">
				<Rss className="size-6" />
			</Link>
		</div>
	);
};

export default SocialMediaLinks;
