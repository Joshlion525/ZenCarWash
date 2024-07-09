import React from "react";
import Navbar from "../components/Navbar";
import One from "../assets/HeroSection1.svg";
import Two from "../assets/HeroSection2.svg";
import Three from "../assets/HeroSection3.svg";

const Home = () => {
	return (
		<div>
			<div className="px-5 lg:px-16">
				<Navbar />
				<div className="flex flex-col md:flex-row items-center mt-20">
					<div className="md:w-1/2">
						<h1 className=" text-5xl md:text-8xl text-buttonBg">
							Washing your car has never{" "}
							<span className="text-blackText">been</span> easier.
						</h1>
						<p className="text-2xl md:text-4xl my-5 md:my-10">
							We providing high-quality car wash services.{" "}
						</p>
						<div className="flex flex-col md:flex-row items-start md:items-center gap-5">
							<a
								href=""
								className="bg-buttonBg text-white md:text-lg tracking-widest text-center w-40 md:w-52 py-3 md:py-5 rounded-full hover:bg-buttonBgHover"
							>
								Book service
							</a>
							<a
								href=""
								className="py-3 md:py-5 w-40 md:w-52 md:text-lg tracking-widest text-center rounded-full border-2 border-buttonBg hover:bg-gray-400"
							>
								Login
							</a>
						</div>
					</div>
					<div className="md:w-1/2">
						<div>
							<div>
								<img src="" alt="" />
							</div>
						</div>
						<div>
							<div>
								<img src="" alt="" />
							</div>
							<div>
								<img src="" alt="" />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;
