import React from "react";
import AboutLogo from "../assets/Group.svg";

const AboutUs = () => {
	return (
		<div className="mt-20 px-5 py-10 md:py-20 lg:px-16 bg-buttonBg text-white">
			<div>
				<h1 className="text-3xl md:text-4xl lg:text-5xl">
					About us
				</h1>
			</div>
			<div className="flex flex-col md:flex-row md:items-center gap-5 md:gap-10 my-10 md:my-16">
				<div className="flex justify-start">
					<img
						src={AboutLogo}
						className="w-36 md:w-64 lg:w-80"
						alt="About Us Logo"
					/>
				</div>
				<span className="hidden md:block w-[1px] h-28 bg-blackText"></span>
				<span className="block md:hidden w-48 h-[1px] bg-blackText"></span>
				<div>
					<p className="md:text-xl leading-relaxed">
						At ZenCarWash, we're passionate about making your car
						shine inside and out. We don't just wash cars, we bring
						them back to life. Our team of experts uses
						top-of-the-line equipment and eco-friendly products to
						deliver a fast, efficient, and sparkling clean every
						time.
					</p>
				</div>
			</div>
		</div>
	);
};

export default AboutUs;
