import React from "react";
import FooterLogo from "../assets/LogoFooter.svg";
import LogoInst from "../assets/LogoInstagram.svg";
import LogoFace from "../assets/LogoFacebook.svg";
import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";

const Footer = () => {
	return (
		<div className="px-5 lg:px-16 py-20 bg-buttonBg text-white">
			<div className="flex flex-col lg:flex-row items-start justify-between">
				<div className="lg:w-1/2 mb-10 lg:mb-0">
					<img src={FooterLogo} alt="" className="w-full max-w-xs" />
				</div>
				<div className="flex flex-col lg:flex-row gap-10 lg:gap-20 tracking-widest">
					<div>
						<h1 className="font-bold text-2xl mb-5">Menu</h1>
						<ul className="flex flex-col gap-3 text-lg font-extralight">
							<li>
								<RouterLink to="/">Home</RouterLink>
							</li>
							<li>
								<ScrollLink
									to="aboutus"
									smooth={true}
									duration={500}
									className="cursor-pointer"
								>
									About us
								</ScrollLink>
							</li>
							<li>
								<ScrollLink
									to="services"
									smooth={true}
									duration={500}
									className="cursor-pointer"
								>
									Our Services
								</ScrollLink>
							</li>
							<li>
								<ScrollLink
									to="contact"
									smooth={true}
									duration={500}
									className=" cursor-pointer"
								>
									Contact us
								</ScrollLink>
							</li>
						</ul>
					</div>
					<div>
						<h1 className="font-bold text-2xl mb-5">Account</h1>
						<ul className="flex flex-col gap-3 text-lg font-extralight">
							<li>
								<RouterLink to="/login">Log in</RouterLink>
							</li>
							<li>
								<RouterLink to="/signup">Sign up</RouterLink>
							</li>
						</ul>
					</div>
					<div>
						<h1 className="font-bold text-2xl mb-5">Follow us</h1>
						<div className="flex gap-3">
							<img src={LogoFace} alt="" className="w-8 h-8" />
							<img src={LogoInst} alt="" className="w-8 h-8" />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Footer;
