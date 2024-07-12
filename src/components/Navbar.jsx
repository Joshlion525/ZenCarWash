import React, { useState } from "react";
import Logo from "../assets/Logo.svg";
import MobileMenu from "../assets/Menu.svg";
import MobileNav from "./MobileNav";
import { Link } from "react-scroll";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);
	const mobileToggle = () => {
		setIsOpen(!isOpen);
	};
	const navigate = useNavigate();

	return (
		<div>
			<div className="flex items-center justify-between md:py-5">
				<div>
					<a href="" onClick={() => navigate("/")}>
						<img src={Logo} className="w-full" alt="ZenCarWash" />
					</a>
				</div>
				<div className="hidden md:block">
					<ul className="flex gap-5 lg:gap-10 text-lg font-medium text-blackText tracking-widest">
						<li>
							<a
								href=""
								className="hover:text-buttonBg"
								onClick={() => navigate("/")}
							>
								Home
							</a>
						</li>
						<li>
							<Link
								to="aboutus"
								smooth={true}
								duration={500}
								className="hover:text-buttonBg cursor-pointer"
							>
								About us
							</Link>
						</li>
						<li>
							<Link
								to="services"
								smooth={true}
								duration={500}
								className="hover:text-buttonBg cursor-pointer"
							>
								Services
							</Link>
						</li>
						<li>
							<a
								href=""
								className="bg-buttonBg text-white px-5 py-3 rounded-3xl font-normal hover:bg-buttonBgHover"
								onClick={() => navigate("/bookservice")}
							>
								Book service
							</a>
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
