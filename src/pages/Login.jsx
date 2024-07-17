import React from "react";
import { FaArrowLeft } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Login = () => {
	const navigate = useNavigate();

	return (
		<div className="login min-h-screen bg-buttonBg flex justify-center items-center font-Poppins">
			<div className="bg-white w-full max-w-xl rounded-2xl px-5 md:px-16 py-10 mx-4 md:mx-0">
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
						Login to your account
					</h1>
				</div>
				<form action="" className="flex flex-col gap-6">
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
					<div className="flex flex-col items-end gap-1">
						<a href="" className="text-buttonBg">
							Forgot password?
						</a>
						<p>
							Don't have an account?{" "}
							<Link to={"/signup"} className="text-buttonBg">
								Sign up
							</Link>
						</p>
					</div>
					<div>
						<button
							type="submit"
							className="bg-buttonBg w-full rounded-full text-white py-3"
						>
							Login
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Login;
