import React from "react";
import CancelBtn from "../assets/CloseIcon.svg";
import Instagram from "../assets/instagram.svg";
import Facebook from "../assets/facebook.svg";

const MobileNav = ({ isOpen, setIsOpen }) => {
	const mobileToggle = () => {
		setIsOpen(!isOpen);
	};

	return (
		<div>
			<div
				className={`fixed top-0 left-0 w-full h-full bg-black transition-opacity duration-500 z-40 ${
					isOpen ? "opacity-60" : "opacity-0 pointer-events-none"
				}`}
				onClick={mobileToggle}
			></div>
			<div
				className={`fixed top-0 right-0 h-screen bg-white transition-transform duration-500 p-5 z-50 font-medium tracking-widest ${
					isOpen ? "translate-x-0" : "translate-x-full"
				}`}
				style={{ width: "70%" }}
			>
				<div className="flex justify-end">
					<img
						src={CancelBtn}
						alt=""
						onClick={mobileToggle}
						className="w-7"
					/>
				</div>
				<div className="mt-10">
					<ul className="flex flex-col gap-3 text-lg">
						<li>
							<a href="" className="text-buttonBg">
								Home.
							</a>
						</li>
						<li>
							<a href="">Our services.</a>
						</li>
						<li>
							<a href="">Testimonials.</a>
						</li>
						<li>
							<a href="">About us.</a>
						</li>
						<li>
							<a href="">Get in touch.</a>
						</li>
					</ul>
				</div>
				<div className="mt-10">
					<a
						href=""
						className="bg-buttonBg text-white px-5 py-3 rounded-3xl hover:bg-buttonBgHover"
					>
						Book service
					</a>
				</div>
				<div className="mt-14">
					<h1>socials.</h1>
					<div className="flex gap-3">
						<div>
							<img src={Instagram} alt="" />
						</div>
						<div>
							<img src={Facebook} alt="" />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default MobileNav;
