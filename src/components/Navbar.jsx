import React, { useState } from "react";
import Logo from "../assets/Logo.svg";
import MobileMenu from "../assets/Menu.svg";
import MobileNav from "./MobileNav";
import { Link as ScrollLink } from "react-scroll";
import { Link, Link as RouterLink } from "react-router-dom";
import { IoPerson } from "react-icons/io5";
import { MdKeyboardArrowDown } from "react-icons/md";
import { useProfile } from "../context/ProfileDetailsContext";
import { RxCross2 } from "react-icons/rx";

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);
	const mobileToggle = () => {
		setIsOpen(!isOpen);
	};
	const { userDetails } = useProfile();
	const [isDropdownOpen, setIsDropdownOpen] = useState(false);

	const toggleDropdown = () => {
		setIsDropdownOpen(!isDropdownOpen);
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
					<ul className="flex items-center gap-5 lg:gap-10 text-lg font-medium text-blackText tracking-widest">
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
								className={`bg-buttonBg text-white px-5 py-3 rounded-3xl font-normal hover:bg-buttonBgHover ${
									userDetails.name ? "hidden" : "block"
								}`}
							>
								Book service
							</RouterLink>
						</li>
						<li
							className={`flex items-center gap-1 ${
								userDetails.name ? "block" : "hidden"
							}`}
						>
							<div className="border border-buttonBg p-2 rounded-full">
								<IoPerson
									className="text-buttonBg text-3xl cursor-pointer"
									onClick={toggleDropdown}
								/>
							</div>
							<MdKeyboardArrowDown className="font-bold text-lg" />
						</li>
						{isDropdownOpen && (
							<div className="absolute right-[5%] mt-44 w-fit bg-white rounded-md shadow-lg z-50 py-3 px-5 border border-buttonBg">
								<div className="flex justify-end mb-2">
									<RxCross2
										className="cursor-pointer font-bold text-red-500"
										onClick={() => setIsDropdownOpen(false)}
									/>
								</div>
								<div className="flex items-center gap-4">
									<div>
										<IoPerson className="text-buttonBg text-4xl cursor-pointer" />
									</div>
									<div>
										<h1 className="italic text-sm capitalize">
											{userDetails.name}
										</h1>
										<RouterLink to={"/profile"} className="italic text-buttonBg text-sm">
											Go to profile
										</RouterLink>
									</div>
								</div>
							</div>
						)}
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
