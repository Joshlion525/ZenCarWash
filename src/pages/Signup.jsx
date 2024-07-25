import React, { useState } from "react";
import { FaArrowLeft } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import { useProfile } from "../context/ProfileDetailsContext";

const Signup = () => {
	const navigate = useNavigate();
	const { userDetails, setUserDetails } = useProfile();

	const [error, setError] = useState({});

	const handleInput = (e) => {
		const { id, value } = e.target;
		setUserDetails((prevData) => ({
			...prevData,
			[id]: value,
		}));
	};

	const validate = () => {
		const errors = {};
		const emailPattern = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/;
		if (!userDetails.name.trim()) {
			errors.name = "Please put in your fullname";
		}
		if (!userDetails.email.trim()) {
			errors.email = "Please put in your email";
		} else if (!emailPattern.test(userDetails.email)) {
			errors.email = "Invalid email";
		}
		if (!userDetails.role.trim()) {
			errors.role = "Please pick your role";
		}
		if (!userDetails.password.trim()) {
			errors.password = "Please put in a password";
		}

		setError(errors);
		return Object.keys(errors).length === 0;
	};

	const handleUserDetails = (e) => {
		e.preventDefault();
		if (validate()) {
			console.log("Form submitted successfully", userDetails);
			toast.success("Account created");
			navigate("/profile");
		} else {
			console.log("Validation failed");
		}
	};

	return (
		<div className="login min-h-screen bg-buttonBg flex justify-center items-center font-Poppins">
			<Toaster position="top-right" />
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
				<form
					action=""
					className="flex flex-col gap-7"
					onSubmit={handleUserDetails}
				>
					<div className="flex flex-col gap-2">
						<label
							htmlFor="name"
							className="text-gray-500 text-xl font-medium"
						>
							Full name
						</label>
						<input
							type="text"
							id="name"
							value={userDetails.name}
							onChange={handleInput}
							placeholder="Enter your name"
							className={`w-full rounded-full px-5 py-3 border text-lg ${
								error.name
									? "border-red-500"
									: "border-buttonBg"
							}`}
						/>
						{error.name && (
							<p className="text-red-500 text-sm">{error.name}</p>
						)}
					</div>
					<div className="flex flex-col gap-2">
						<label
							htmlFor="email"
							className="text-gray-500 text-xl font-medium"
						>
							Email
						</label>
						<input
							type="email"
							id="email"
							value={userDetails.email}
							onChange={handleInput}
							placeholder="Enter your email"
							className={`w-full rounded-full px-5 py-3 border text-lg ${
								error.email
									? "border-red-500"
									: "border-buttonBg"
							}`}
						/>
						{error.email && (
							<p className="text-red-500 text-sm">
								{error.email}
							</p>
						)}
					</div>
					<div className="flex flex-col gap-2">
						<label
							htmlFor="password"
							className="text-gray-500 text-xl font-medium"
						>
							Password
						</label>
						<input
							type="password"
							id="password"
							value={userDetails.password}
							onChange={handleInput}
							placeholder="Enter your password"
							className={`w-full rounded-full px-5 py-3 border text-lg ${
								error.password
									? "border-red-500"
									: "border-buttonBg"
							}`}
						/>
						{error.password && (
							<p className="text-red-500 text-sm">
								{error.password}
							</p>
						)}
					</div>
					<div className="flex flex-col gap-2">
						<label
							htmlFor="role"
							className="text-gray-500 text-xl font-medium"
						>
							Your role
						</label>
						<select
							id="role"
							value={userDetails.role}
							onChange={handleInput}
							className={`w-full rounded-full px-5 py-3 text-lg border block ${
								error.role
									? "border-red-500"
									: "border-buttonBg"
							}`}
						>
							<option value="" disabled>
								Select your role
							</option>
							<option value="admin">Admin</option>
							<option value="user">User</option>
						</select>
						{error.role && (
							<p className="text-red-500 text-sm mt-1">
								{error.role}
							</p>
						)}
					</div>
					<div className="mt-5">
						<button
							type="submit"
							className="bg-buttonBg w-full rounded-full text-white py-5"
						>
							Submit
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Signup;
