import React from "react";
import MailIcon from "../assets/Email.svg";
import CallIcon from "../assets/CallUs.svg";
import AddressIcon from "../assets/Adress.svg";

const Contact = () => {
	return (
		<div className="px-5 lg:px-16 py-10">
			<div className="mb-10">
				<h1 className="text-3xl md:text-4xl lg:text-5xl text-buttonBg">
					Contact Us
				</h1>
			</div>
			<div className="flex flex-col-reverse gap-10 lg:gap-20 lg:flex-row">
				<form action="" className="lg:w-1/2 flex flex-col gap-10">
					<div>
						<input
							type="text"
							placeholder="Fullname"
							className="w-full rounded-full px-5 py-2 border border-buttonBg md:text-lg"
						/>
					</div>
					<div>
						<input
							type="email"
							placeholder="Email address"
							className="w-full rounded-full px-5 py-2 border border-buttonBg md:text-lg"
						/>
					</div>
					<div>
						<input
							type="text"
							placeholder="Subject"
							className="w-full rounded-full px-5 py-2 border border-buttonBg md:text-lg"
						/>
					</div>
					<div>
						<textarea
							name=""
							id=""
							placeholder="Write a brief description of your request"
							className="resize-none w-full h-48 px-5 py-2 border border-buttonBg rounded-3xl md:text-lg"
						></textarea>
					</div>
					<div>
						<button
							type="submit"
							className="py-3 md:py-5 w-40 md:w-52 md:text-lg tracking-widest text-center text-white rounded-full bg-buttonBg hover:bg-buttonBgHover"
						>
							Send
						</button>
					</div>
				</form>
				<div className="lg:w-1/2 flex flex-col justify-start gap-5">
					<div className="flex items-center gap-3 w-full">
						<img
							src={MailIcon}
							alt=""
							className="w-8 h-8 lg:w-16 lg:h-16"
						/>
						<h1 className="md:text-xl text-buttonBg">
							valentingservice@gmail.com
						</h1>
					</div>
					<div className="flex items-center gap-3 w-full">
						<img
							src={CallIcon}
							alt=""
							className="w-8 h-8 lg:w-16 lg:h-16"
						/>
						<h1 className="md:text-xl text-buttonBg">
							09028272009
						</h1>
					</div>
					<div className="flex items-center gap-3 w-full">
						<img
							src={AddressIcon}
							alt=""
							className="w-8 h-8 lg:w-16 lg:h-16"
						/>
						<h1 className="md:text-xl text-buttonBg">
							Birmingham, United Kingdom
						</h1>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Contact;
