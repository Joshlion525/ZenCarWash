import React, { useState} from "react";
import Logo from "../assets/Logo.svg";
import MobileMenu from "../assets/Menu.svg";
import MobileNav from "./MobileNav";

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);
        const mobileToggle = () => {
			setIsOpen(!isOpen);
		};
	return (
		<div>
			<div className="flex items-center justify-between md:py-5">
				<div>
					<a href="#">
						<img src={Logo} className="w-full" alt="ZenCarWash" />
					</a>
				</div>
				<div className="hidden md:block">
					<ul className="flex gap-5 lg:gap-10 text-lg font-medium text-blackText tracking-widest">
						<li>
							<a href="" className="hover:text-buttonBg">
								Home
							</a>
						</li>
						<li>
							<a href="" className="hover:text-buttonBg">
								About us
							</a>
						</li>
						<li>
							<a href="" className="hover:text-buttonBg">
								Services
							</a>
						</li>
						<li>
							<a
								href=""
								className="bg-buttonBg text-white px-5 py-3 rounded-3xl font-normal hover:bg-buttonBgHover"
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
