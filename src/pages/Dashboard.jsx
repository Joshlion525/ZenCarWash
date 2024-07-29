import React from "react";
import Logo from "../assets/Logo.svg";
import Camera from "../assets/Cameraicon.svg";
import ProfilePhoto from "../assets/man-438081_960_720.svg";
import { Link as RouterLink } from "react-router-dom";
import { IoIosSearch } from "react-icons/io";
import { MdKeyboardArrowDown } from "react-icons/md";

const Dashboard = () => {
	return (
		<div className="font-Poppins px-5 md:px-10">
			<div className="flex items-center justify-between gap-4 py-2 md:py-5">
				<div className="flex items-center gap-4 md:gap-16">
					<RouterLink to="/">
						<img
							src={Logo}
							className="w-32 md:w-40"
							alt="ZenCarWash"
						/>
					</RouterLink>
					<div className="hidden md:block">
						<div className="flex items-center border gap-2 rounded-full px-4 bg-[#F5F6FA] w-full md:w-96">
							<IoIosSearch className="text-2xl text-gray-400" />
							<input
								type="text"
								placeholder="Search"
								className="rounded-full w-full py-2 border-none outline-none bg-[#F5F6FA]"
							/>
						</div>
					</div>
				</div>
				<div className="flex items-center gap-2 md:gap-5">
					<div className="hidden md:block">
						<img
							src={Camera}
							alt="Camera Icon"
							className="w-full"
						/>
					</div>
					<div className="w-10 md:w-12">
						<img
							src={ProfilePhoto}
							alt="Profile"
							className="w-full"
						/>
					</div>
					<div className="flex flex-col items-center md:items-start">
						<h1 className="font-medium md:font-bold text-sm md:text-base">
							Moni Roy
						</h1>
						<p className="italic text-sm text-buttonBg">Admin</p>
					</div>
					<div className="border rounded-full p-1">
						<MdKeyboardArrowDown className="text-lg md:text-xl" />
					</div>
				</div>
			</div>
			<div className="block md:hidden mt-1">
				<div className="flex items-center gap-2">
					<div className="flex items-center border gap-2 rounded-full px-4 bg-[#F5F6FA] flex-1">
						<IoIosSearch className="text-2xl text-gray-400" />
						<input
							type="text"
							placeholder="Search"
							className="rounded-full w-full py-2 border-none outline-none bg-[#F5F6FA]"
						/>
					</div>
					<div className="w-10">
						<img
							src={Camera}
							alt="Camera Icon"
							className="w-full"
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Dashboard;
