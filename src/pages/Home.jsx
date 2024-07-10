import React from "react";
import Navbar from "../components/Navbar";
import One from "../assets/HeroSection1.svg";
import Two from "../assets/HeroSection2.svg";
import Three from "../assets/HeroSection3.svg";
import AboutUs from "./AboutUs";
import Services from "../components/Services";

const Home = () => {
	return (
		<div>
			<div className="px-5 lg:px-16">
				<Navbar />
				<div className="flex flex-col xl:flex-row gap-10 xl:gap-0 justify-between items-center mt-20">
					<div className="xl:w-1/2">
						<h1 className="text-5xl md:text-8xl text-buttonBg">
							Washing your car has never{" "}
							<span className="text-blackText">been</span> easier.
						</h1>
						<p className="text-2xl md:text-4xl my-5 md:my-10">
							We provide high-quality car wash services.
						</p>
						<div className="flex flex-col md:flex-row items-start md:items-center gap-5">
							<a
								href="#"
								className="bg-buttonBg text-white md:text-lg tracking-widest text-center w-40 md:w-52 py-3 md:py-5 rounded-full hover:bg-buttonBgHover"
							>
								Book service
							</a>
							<a
								href="#"
								className="py-3 md:py-5 w-40 md:w-52 md:text-lg tracking-widest text-center rounded-full border-2 border-buttonBg hover:bg-gray-400"
							>
								Login
							</a>
						</div>
					</div>
					<div className="flex gap-2 md:gap-5 p-5 backGround">
						<div className="flex items-center">
							<img
								src={Three}
								className="w-72 md:w-64"
								alt="Hero Image 3"
							/>
						</div>
						<div className="flex flex-col gap-2 md:gap-5">
							<img
								src={Two}
								className="w-72 md:w-64"
								alt="Hero Image 1"
							/>
							<img
								src={One}
								className="w-72 md:w-64"
								alt="Hero Image 2"
							/>
						</div>
					</div>
				</div>
			</div>
			<AboutUs />
			<Services />
			<div className="flex justify-center my-10">
				<a
					href=""
					className="bg-buttonBg text-white px-5 py-3 rounded-3xl font-normal hover:bg-buttonBgHover"
				>
					Book service
				</a>
			</div>
		</div>
	);
};

export default Home;
