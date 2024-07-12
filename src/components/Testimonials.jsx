import React from "react";
import Icon from "../assets/Vector.svg";

const Testimonials = () => {
	const testimonials = [
		{
			id: 1,
			Name: "John Doe",
			Image: Icon,
			Testimony:
				"“I cannot praise Mat highly enough for his hard work, passion and enthusiasm in the way he dealt with my car.“",
		},
		{
			id: 2,
			Name: "Matthew Age",
			Image: Icon,
			Testimony:
				"“I can't commend Mat enough for his dedication, passion, and enthusiasm in handling my car.“",
		},
		{
			id: 3,
			Name: "John Second",
			Image: Icon,
			Testimony:
				"“I can't speak highly enough of Mat's hard work, passion, and enthusiasm in taking care of my car.“",
		},
	];

	return (
		<div className="px-5 lg:px-16 py-10">
			<div className="mb-10">
				<h1 className="text-3xl md:text-4xl lg:text-5xl text-buttonBg">
					Testimonials
				</h1>
			</div>
			<div className="grid gap-10 lg:gap-20 grid-cols-1 lg:grid-cols-3">
				{testimonials.map((testimonial) => (
					<div
						key={testimonial.id}
						className="flex flex-col items-start"
					>
						<div className="flex items-center gap-5 mb-2">
							<img
								src={testimonial.Image}
								className="w-12 h-12 lg:w-16 lg:h-16"
								alt={testimonial.Name}
							/>
							<h1 className="text-xl md:text-2xl text-buttonBg">
								{testimonial.Name}
							</h1>
						</div>
						<div className="bg-buttonBg rounded-3xl px-5 md:px-10 py-5 w-full">
							<p className="text-sm md:text-lg text-white">
								{testimonial.Testimony}
							</p>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Testimonials;
