import React, { useState } from "react";
import Logo from "../assets/Logo.svg";
import MobileMenu from "../assets/Menu.svg";
import MobileNav from "./MobileNav";
import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);
	const mobileToggle = () => {
		setIsOpen(!isOpen);
	};

	return (
		<div>
			<div className="flex items-center justify-between md:py-5">
				<div>
					<RouterLink to="/">
						<img src={Logo} className="w-full" alt="ZenCarWash" />
					</RouterLink>
				</div>
				<div className="hidden md:block">
					<ul className="flex gap-5 lg:gap-10 text-lg font-medium text-blackText tracking-widest">
						<li>
							<RouterLink to="/" className="hover:text-buttonBg">
								Home
							</RouterLink>
						</li>
						<li>
							<ScrollLink
								to="aboutus"
								smooth={true}
								duration={500}
								className="hover:text-buttonBg cursor-pointer"
							>
								About us
							</ScrollLink>
						</li>
						<li>
							<ScrollLink
								to="services"
								smooth={true}
								duration={500}
								className="hover:text-buttonBg cursor-pointer"
							>
								Services
							</ScrollLink>
						</li>
						<li>
							<RouterLink
								to="/bookservice"
								className="bg-buttonBg text-white px-5 py-3 rounded-3xl font-normal hover:bg-buttonBgHover"
							>
								Book service
							</RouterLink>
						</li>
					</ul>
				</div>
				<div className="block md:hidden">
					<button href="" onClick={mobileToggle}>
						<img src={MobileMenu} alt="" />
					</button>
				</div>
			</div>
			<MobileNav isOpen={isOpen} setIsOpen={setIsOpen} />
		</div>
	);
};

export default Navbar;
