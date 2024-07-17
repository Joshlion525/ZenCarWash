import React from "react";
import FooterLogo from "../assets/LogoFooter.svg";
import LogoInst from "../assets/LogoInstagram.svg";
import LogoFace from "../assets/LogoFacebook.svg";
import { Link } from "react-scroll";
import { useNavigate } from "react-router-dom";

const Footer = () => {
	const navigate = useNavigate();

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
								<a href="#" onClick={() => navigate("/")}>
									Home
								</a>
							</li>
							<li>
								<Link
									to="aboutus"
									smooth={true}
									duration={500}
									className="cursor-pointer"
								>
									About us
								</Link>
							</li>
							<li>
								<Link
									to="services"
									smooth={true}
									duration={500}
									className="cursor-pointer"
								>
									Our Services
								</Link>
							</li>
							<li>
								<Link
									to="contact"
									smooth={true}
									duration={500}
									className=" cursor-pointer"
								>
									Contact us
								</Link>
							</li>
						</ul>
					</div>
					<div>
						<h1 className="font-bold text-2xl mb-5">Account</h1>
						<ul className="flex flex-col gap-3 text-lg font-extralight">
							<li>
								<a href="#" onClick={() => navigate("/login")}>
									Log in
								</a>
							</li>
							<li>
								<a href="#" onClick={() => navigate("/signup")}>
									Sign up
								</a>
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
