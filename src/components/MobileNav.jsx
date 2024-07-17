import React from "react";
import CancelBtn from "../assets/CloseIcon.svg";
import Instagram from "../assets/instagram.svg";
import Facebook from "../assets/facebook.svg";
import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";

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
							<RouterLink to="/" className="text-buttonBg">
								Home.
							</RouterLink>
						</li>
						<li>
							<ScrollLink
								to="services"
								smooth={true}
								duration={500}
								className="hover:text-buttonBg cursor-pointer"
							>
								Our Services.
							</ScrollLink>
						</li>
						<li>
							<ScrollLink
								to="testimonials"
								smooth={true}
								duration={500}
								className="hover:text-buttonBg cursor-pointer"
							>
								Testimonials.
							</ScrollLink>
						</li>
						<li>
							<ScrollLink
								to="aboutus"
								smooth={true}
								duration={500}
								className="hover:text-buttonBg cursor-pointer"
							>
								About us.
							</ScrollLink>
						</li>
						<li>
							<ScrollLink
								to="contact"
								smooth={true}
								duration={500}
								className="hover:text-buttonBg cursor-pointer"
							>
								Get in touch.
							</ScrollLink>
						</li>
					</ul>
				</div>
				<div className="mt-10">
					<RouterLink
						to="/bookservice"
						className="bg-buttonBg text-white px-5 py-3 rounded-3xl hover:bg-buttonBgHover"
					>
						Book service
					</RouterLink>
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
