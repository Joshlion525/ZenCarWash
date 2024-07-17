import React, { useRef } from "react";
import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";
import ServiceImage2 from "../assets/Rectangle11.svg";
import CheckLogo from "../assets/Frame.svg";
import Checkbox from "../assets/Frame2.svg";

const Services = () => {
	const carouselRef = useRef(null);

	const services = [
		{
			id: 1,
			image: ServiceImage2,
			title: "Silver mini valet",
			description: "+ 2 more",
			price: "$13",
		},
		{
			id: 2,
			image: ServiceImage2,
			title: "Good mini valet",
			description: "+ 3 more",
			price: "$23",
		},
		{
			id: 3,
			image: ServiceImage2,
			title: "Mini valet & Polish",
			description: "+ 7 more",
			price: "$25",
		},
		{
			id: 4,
			image: ServiceImage2,
			title: "Full valet",
			description: "+ 12 more",
			price: "$39",
		},
	];

	const scrollLeft = () => {
		carouselRef.current.scrollBy({ left: -300, behavior: "smooth" });
	};

	const scrollRight = () => {
		carouselRef.current.scrollBy({ left: 300, behavior: "smooth" });
	};

	return (
		<div className="relative flex flex-col items-center mt-20 px-5 lg:px-16">
			<div className="flex justify-between gap-5 items-center w-full mb-10">
				<div>
					<h1 className="text-3xl md:text-4xl lg:text-5xl text-buttonBg">
						Our Services
					</h1>
				</div>
				<div className="flex gap-5">
					<button
						onClick={scrollLeft}
						className="p-2 border border-buttonBg rounded-full hover:bg-gray-300"
					>
						<FaArrowLeft size={24} className="text-buttonBg" />
					</button>
					<button
						onClick={scrollRight}
						className="p-2 border border-buttonBg rounded-full hover:bg-gray-300"
					>
						<FaArrowRight size={24} className="text-buttonBg" />
					</button>
				</div>
			</div>
			<div
				ref={carouselRef}
				className="flex gap-5 space-x-4 overflow-x-auto scrollbar-hide w-full"
			>
				{services.map((service) => (
					<div
						key={service.id}
						className="min-w-[300px] w-full md:w-[400px]  bg-cardBackground p-4 rounded-3xl shadow-lg flex-shrink-0"
					>
						<img
							src={service.image}
							alt={service.title}
							className="w-full h-64 object-cover rounded-md mb-4"
						/>
						<div className="flex flex-col gap-4">
							<div className="flex items-center justify-between">
								<h3 className="text-xl md:text-2xl font-bold">
									{service.title}
								</h3>
								<p className="text-buttonBg md:text-lg font-bold">
									{service.price}
								</p>
							</div>
							<div className="flex items-center gap-5">
								<div>
									<img src={CheckLogo} alt="" />
								</div>
								<div>
									<p className="md:text-lg">Hand Wash</p>
								</div>
							</div>
							<div className="flex items-center gap-5">
								<div>
									<img src={CheckLogo} alt="" />
								</div>
								<div>
									<p className="md:text-lg">Tyre Shine</p>
								</div>
							</div>
							<div className="flex items-center gap-5">
								<div>
									<img src={CheckLogo} alt="" />
								</div>
								<div>
									<p className="md:text-lg">
										Wax & Dry Door Shuts{" "}
										<span className="text-buttonBg">
											{service.description}
										</span>
									</p>
								</div>
							</div>
							<div>
								<p className="text-buttonBg md:text-lg">
									Add-ons
								</p>
								<div className="flex items-center gap-3">
								    <img src={Checkbox} alt="" />
									<p className="text-buttonBg md:text-lg">
										Polish
									</p>
								</div>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Services;
