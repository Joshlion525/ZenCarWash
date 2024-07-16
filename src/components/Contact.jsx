import React, { useState } from "react";
import MailIcon from "../assets/Email.svg";
import CallIcon from "../assets/CallUs.svg";
import AddressIcon from "../assets/Adress.svg";

const Contact = () => {
	const [requestData, setRequestData] = useState({
		fullname: "",
		email: "",
		subject: "",
		briefdescription: "",
	});

	const [error, setError] = useState({});

	const handleInput = (e) => {
		const { id, value } = e.target;
		setRequestData((prevData) => ({
			...prevData,
			[id]: value,
		}));
	};

	const validate = () => {
		const errors = {};
		const emailPattern = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/;
		if (!requestData.fullname.trim()) {
			errors.fullname = "Please put in your fullname";
		}
		if (!requestData.email.trim()) {
			errors.email = "Please put in your email";
		} else if (!emailPattern.test(requestData.email)) {
			errors.email = "Invalid email";
		}
		if (!requestData.subject.trim()) {
			errors.subject = "Please put in a subject";
		}
		if (!requestData.briefdescription.trim()) {
			errors.briefdescription = "Please put in a description";
		}

		setError(errors);
		return Object.keys(errors).length === 0;
	};

	const handleRequestData = (e) => {
		e.preventDefault();
		if (validate()) {
			console.log("Form submitted successfully", requestData);
		} else {
			console.log("Validation failed");
		}
	};
	return (
		<div className="px-5 lg:px-16 py-10">
			<div className="mb-10">
				<h1 className="text-3xl md:text-4xl lg:text-5xl text-buttonBg">
					Contact Us
				</h1>
			</div>
			<div className="flex flex-col-reverse gap-10 lg:gap-20 lg:flex-row">
				<form
					action=""
					className="lg:w-1/2 flex flex-col gap-5 md:gap-10"
					onSubmit={handleRequestData}
				>
					<div>
						<input
							type="text"
							id="fullname"
							value={requestData.fullname}
							onChange={handleInput}
							placeholder="Fullname"
							className={`w-full rounded-full px-5 py-2 border md:text-lg ${
								error.fullname
									? "border-red-500"
									: "border-buttonBg "
							}`}
						/>
						{error.fullname && (
							<p className="text-red-500 text-sm">
								{error.fullname}
							</p>
						)}
					</div>
					<div>
						<input
							type="email"
							id="email"
							value={requestData.email}
							onChange={handleInput}
							placeholder="Email address"
							className={`w-full rounded-full px-5 py-2 border md:text-lg ${
								error.email
									? "border-red-500"
									: "border-buttonBg "
							}`}
						/>
						{error.email && (
							<p className="text-red-500 text-sm">
								{error.email}
							</p>
						)}
					</div>
					<div>
						<input
							type="text"
							id="subject"
							value={requestData.subject}
							onChange={handleInput}
							placeholder="Subject"
							className={`w-full rounded-full px-5 py-2 border md:text-lg ${
								error.subject
									? "border-red-500"
									: "border-buttonBg "
							}`}
						/>
						{error.subject && (
							<p className="text-red-500 text-sm">
								{error.subject}
							</p>
						)}
					</div>
					<div>
						<textarea
							name=""
							id="briefdescription"
							value={requestData.briefdescription}
							onChange={handleInput}
							placeholder="Write a brief description of your request"
							className={`resize-none w-full h-48 px-5 py-2 border  rounded-3xl md:text-lg ${
								error.briefdescription
									? "border-red-500"
									: "border-buttonBg"
							}`}
						></textarea>
						{error.briefdescription && (
							<p className="text-red-500 text-sm">
								{error.briefdescription}
							</p>
						)}
					</div>
					<div>
						<button
							type="submit"
							className="py-3 md:py-5 w-40 md:w-52 md:text-lg tracking-widest text-center text-white rounded-full bg-buttonBg hover:bg-buttonBgHover"
						>
							Send
						</button>
					</div>
				</form>
				<div className="lg:w-1/2 flex flex-col justify-start gap-5">
					<div className="flex items-center gap-3 w-full">
						<img
							src={MailIcon}
							alt=""
							className="w-8 h-8 lg:w-16 lg:h-16"
						/>
						<h1 className="md:text-xl text-buttonBg">
							valentingservice@gmail.com
						</h1>
					</div>
					<div className="flex items-center gap-3 w-full">
						<img
							src={CallIcon}
							alt=""
							className="w-8 h-8 lg:w-16 lg:h-16"
						/>
						<h1 className="md:text-xl text-buttonBg">
							09028272009
						</h1>
					</div>
					<div className="flex items-center gap-3 w-full">
						<img
							src={AddressIcon}
							alt=""
							className="w-8 h-8 lg:w-16 lg:h-16"
						/>
						<h1 className="md:text-xl text-buttonBg">
							Birmingham, United Kingdom
						</h1>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Contact;
