import React from "react";
import { FaArrowLeft } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const Signup = () => {
	const navigate = useNavigate();

	return (
		<div className="login min-h-screen bg-buttonBg flex justify-center items-center font-Poppins">
			<div className="bg-white w-full max-w-2xl rounded-2xl px-5 md:px-16 py-10 mx-4 md:mx-0">
				<div className="mb-5">
					<button
						className="p-2 border border-buttonBg rounded-full hover:bg-gray-300"
						onClick={() => navigate("/")}
					>
						<FaArrowLeft size={24} className="text-buttonBg" />
					</button>
				</div>
				<div className="my-12">
					<h1 className="font-bold text-center text-2xl">
						Create an account
					</h1>
				</div>
				<form action="" className="flex flex-col gap-7">
					<div className="flex flex-col gap-3">
						<label
							htmlFor="name"
							className="text-gray-500 text-xl font-medium"
						>
							First name
						</label>
						<input
							type="text"
							id="name"
							placeholder="Enter your name"
							className="w-full rounded-full px-5 py-3 border border-buttonBg text-lg"
						/>
					</div>
					<div className="flex flex-col gap-3">
						<label
							htmlFor="email"
							className="text-gray-500 text-xl font-medium"
						>
							Email
						</label>
						<input
							type="email"
							id="email"
							placeholder="Enter your email"
							className="w-full rounded-full px-5 py-3 border border-buttonBg text-lg"
						/>
					</div>
					<div className="flex flex-col gap-3">
						<label
							htmlFor="password"
							className="text-gray-500 text-xl font-medium"
						>
							Password
						</label>
						<input
							type="password"
							id="password"
							placeholder="Enter your password"
							className="w-full rounded-full px-5 py-3 border border-buttonBg text-lg"
						/>
					</div>
					<div className="mt-5">
						<button
							type="submit"
							className="bg-buttonBg w-full rounded-full text-white py-5"
						>
							Sign up
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Signup;
