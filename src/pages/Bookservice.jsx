import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ConfirmedLogo from "../assets/Group37301.svg";
import MoneyLogo from "../assets/money.svg";
import { Input } from "@/components/ui/input";


const Bookservice = () => {
	const [currentStep, setCurrentStep] = useState(1);
	const [formData, setFormData] = useState({
		firstname: "",
		lastname: "",
		email: "",
		phonenumber: "",
		description: "",
		vechicleNo: "",
		date: "",
		time: "",
		services: "",
		vechicleType: "",
	});

	const [errors, setErrors] = useState({});
	const today = new Date().toISOString().split("T")[0];

	const handlePreviousStep = () => {
		setCurrentStep((prevStep) => prevStep - 1);
	};

	const handleRadioChange = (e) => {
		const { name, value } = e.target;
		setFormData((prevData) => ({
			...prevData,
			[name]: value,
		}));
	};
	const handleInputChange = (e) => {
		const { id, value } = e.target;
		setFormData((prevData) => ({
			...prevData,
			[id]: value,
		}));
	};

	const validateStep = () => {
		let newErrors = {};
		switch (currentStep) {
			case 1:
				if (!formData.firstname)
					newErrors.firstname = "First name is required";
				if (!formData.lastname)
					newErrors.lastname = "Last name is required";
				if (!formData.email) newErrors.email = "Email is required";
				if (!formData.phonenumber)
					newErrors.phonenumber = "Phone number is required";
				if (!formData.description)
					newErrors.description = "Description is required";
				if (!formData.vechicleNo)
					newErrors.vechicleNo = "Vechicle number is needed";
				break;
			case 2:
				if (!formData.services)
					newErrors.services = "Please select a plan";
				break;
			case 3:
				if (!formData.vechicleType)
					newErrors.vechicleType = "Please pick your vechicle type";
				if (!formData.time)
					newErrors.time = "Please pick a time for your booking";
				if (!formData.date)
					newErrors.date = "Please pick a date for your booking";
				break;
			default:
				break;
		}
		setErrors(newErrors);
		return Object.keys(newErrors).length === 0;
	};

	const handleNextStep = (e) => {
		e.preventDefault();
		if (validateStep()) {
			if (currentStep < 4) {
				setCurrentStep(currentStep + 1);
			} else {
				handleSubmit();
			}
		}
	};

	const handleSubmit = () => {
		console.log("Form Data Submitted: ", formData);
	};

	const formatDate = (date) => {
		const options = { day: "numeric", month: "short", year: "numeric" };
		return new Date(date)
			.toLocaleDateString("en-US", options)
			.replace(/,/, "");
	};

	const formatTime = (time) => {
		const [hours, minutes] = time.split(":");
		const hour = parseInt(hours);
		const period = hour >= 12 ? "PM" : "AM";
		const formattedHour = hour % 12 || 12;
		return `${formattedHour}:${minutes} ${period}`;
	};

	const isValidTime = (time) => {
		const [hours, minutes] = time.split(":");
		const hour = parseInt(hours);
		return hour >= 8 && hour <= 17;
	};

	const renderForm = () => {
		switch (currentStep) {
			case 1:
				return (
					<>
						<div className="px-5 md:px-12 pt-5">
							<h1 className="font-bold text-2xl md:text-3xl">
								Contact details
							</h1>
							<p className="text-base md:text-lg mt-2 text-[#6F6C90]">
								Please fill out your contact details
							</p>
						</div>
						<div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-5 px-5 md:px-12 pt-5">
							<div className="flex flex-col md:gap-1">
								<label
									htmlFor="firstname"
									className="text-buttonBg text-base md:text-lg font-medium"
								>
									First name
								</label>
								<input
									type="text"
									id="firstname"
									placeholder="Enter your First name"
									value={formData.firstname}
									onChange={handleInputChange}
									className={`w-full rounded-full px-5 py-2 border text-sm md:text-lg ${
										errors.firstname
											? "border-red-500"
											: "border-buttonBg"
									}`}
								/>
								{errors.firstname && (
									<span className="text-red-500 text-sm">
										{errors.firstname}
									</span>
								)}
							</div>
							<div className="flex flex-col md:gap-1">
								<label
									htmlFor="lastname"
									className="text-buttonBg text-base md:text-lg font-medium"
								>
									Last name
								</label>
								<input
									type="text"
									id="lastname"
									value={formData.lastname}
									onChange={handleInputChange}
									placeholder="Enter your Last name"
									className={`w-full rounded-full px-5 py-2 border text-sm md:text-lg ${
										errors.lastname
											? "border-red-500"
											: "border-buttonBg"
									}`}
								/>
								{errors.lastname && (
									<span className="text-red-500 text-sm">
										{errors.lastname}
									</span>
								)}
							</div>
						</div>
						<div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-5 px-5 md:px-12 pt-2 md:pt-5">
							<div className="flex flex-col md:gap-1">
								<label
									htmlFor="email"
									className="text-buttonBg text-base md:text-lg font-medium"
								>
									Email
								</label>
								<input
									type="email"
									id="email"
									placeholder="Enter your email"
									value={formData.email}
									onChange={handleInputChange}
									className={`w-full rounded-full px-5 py-2 border text-sm md:text-lg ${
										errors.email
											? "border-red-500"
											: "border-buttonBg"
									}`}
								/>
								{errors.email && (
									<span className="text-red-500 text-sm">
										{errors.email}
									</span>
								)}
							</div>
							<div className="flex flex-col md:gap-1">
								<label
									htmlFor="phonenumber"
									className="text-buttonBg text-base md:text-lg font-medium"
								>
									Phone number
								</label>
								<input
									type="tel"
									id="phonenumber"
									value={formData.phonenumber}
									onChange={handleInputChange}
									placeholder="Enter your Phone number"
									className={`w-full rounded-full px-5 py-2 border text-sm md:text-lg ${
										errors.phonenumber
											? "border-red-500"
											: "border-buttonBg"
									} `}
								/>
								{errors.phonenumber && (
									<span className="text-red-500 text-sm">
										{errors.phonenumber}
									</span>
								)}
							</div>
						</div>
						<div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-5 px-5 md:px-12 pt-2 md:pt-5">
							<div className="flex flex-col md:gap-1">
								<label
									htmlFor="description"
									className="text-buttonBg text-base md:text-lg font-medium"
								>
									Descripton
								</label>
								<input
									type="text"
									id="description"
									value={formData.description}
									onChange={handleInputChange}
									placeholder="e.g Wash gently"
									className={`w-full rounded-full px-5 py-2 border text-sm md:text-lg ${
										errors.description
											? "border-red-500"
											: "border-buttonBg"
									}`}
								/>
								{errors.description && (
									<span className="text-red-500 text-sm">
										{errors.description}
									</span>
								)}
							</div>
							<div className="flex flex-col md:gap-1">
								<label
									htmlFor="vechicleNo"
									className="text-buttonBg text-base md:text-lg font-medium"
								>
									Vechicle Registration No.
								</label>
								<input
									type="text"
									id="vechicleNo"
									placeholder="e.g 5DRJKJW7"
									value={formData.vechicleNo}
									onChange={handleInputChange}
									className={`w-full rounded-full px-5 py-2 border text-sm md:text-lg ${
										errors.vechicleNo
											? "border-red-500"
											: "border-buttonBg"
									}`}
								/>
								{errors.vechicleNo && (
									<span className="text-red-500 text-sm">
										{errors.vechicleNo}
									</span>
								)}
							</div>
						</div>
					</>
				);
			case 2:
				return (
					<div>
						<div className="px-5 md:px-12 pt-5 mb-10">
							<h1 className="font-bold text-2xl md:text-3xl">
								Our Services
							</h1>
							<p className="text-base md:text-xl mt-2 text-[#6F6C90]">
								Please select which service you're interested in
							</p>
						</div>
						<div className="flex flex-col md:flex-row gap-5 mb-5">
							<div
								className={`flex justify-center items-center rounded-xl w-full py-7 md:py-12 border cursor-pointer ${
									formData.services === "handwash"
										? "border-buttonBg"
										: "shadow-lg"
								}`}
								onClick={() =>
									handleRadioChange({
										target: {
											name: "services",
											value: "handwash",
										},
									})
								}
							>
								<h1 className="text-lg">Handwash</h1>
							</div>
							<div
								className={`flex justify-center items-center rounded-xl w-full py-7 md:py-12 border cursor-pointer ${
									formData.services === "minivalet"
										? "border-buttonBg"
										: "shadow-lg"
								}`}
								onClick={() =>
									handleRadioChange({
										target: {
											name: "services",
											value: "minivalet",
										},
									})
								}
							>
								<h1 className="text-lg">Mini valet</h1>
							</div>
						</div>
						<div className="flex flex-col md:flex-row gap-5 mb-5">
							<div
								className={`flex justify-center items-center rounded-xl w-full py-7 md:py-12 border cursor-pointer ${
									formData.services === "fullvalet"
										? "border-buttonBg"
										: "shadow-lg"
								}`}
								onClick={() =>
									handleRadioChange({
										target: {
											name: "services",
											value: "fullvalet",
										},
									})
								}
							>
								<h1 className="text-lg">Full valet</h1>
							</div>
							<div
								className={`flex justify-center items-center rounded-xl w-full py-7 md:py-12 border cursor-pointer ${
									formData.services === "others"
										? "border-buttonBg"
										: "shadow-lg"
								}`}
								onClick={() =>
									handleRadioChange({
										target: {
											name: "services",
											value: "others",
										},
									})
								}
							>
								<h1 className="text-lg">Others</h1>
							</div>
						</div>
						{errors.services && (
							<span className="text-red-500 text-sm">
								{errors.services}
							</span>
						)}
					</div>
				);
			case 3:
				return (
					<div>
						<div className="px-5 md:px-12 pt-5">
							<h1 className="font-bold text-xl md:text-3xl">
								Select your vechicle type and date/time
							</h1>
							<p className="text-sm md:text-xl mt-2 mb-5 text-[#6F6C90]">
								Please select your vechicle type and date/time
							</p>
						</div>
						<div className="flex flex-col md:flex-row gap-5 mb-5">
							<div
								className={`flex justify-center items-center rounded-xl w-full py-7 md:py-12 border cursor-pointer ${
									formData.vechicleType === "car"
										? "border-buttonBg"
										: "shadow-lg"
								}`}
								onClick={() =>
									handleRadioChange({
										target: {
											name: "vechicleType",
											value: "car",
										},
									})
								}
							>
								<h1 className="text-lg">Car</h1>
							</div>
							<div
								className={`flex justify-center items-center rounded-xl w-full py-7 md:py-12 border cursor-pointer ${
									formData.vechicleType === "suv"
										? "border-buttonBg"
										: "shadow-lg"
								}`}
								onClick={() =>
									handleRadioChange({
										target: {
											name: "vechicleType",
											value: "suv",
										},
									})
								}
							>
								<h1 className="text-lg">SUV</h1>
							</div>
						</div>
						<div className="flex flex-col md:flex-row gap-5 mb-5">
							<div
								className={`flex justify-center items-center rounded-xl w-full py-7 md:py-12 border cursor-pointer ${
									formData.vechicleType === "van/pickup"
										? "border-buttonBg"
										: "shadow-lg"
								}`}
								onClick={() =>
									handleRadioChange({
										target: {
											name: "vechicleType",
											value: "van/pickup",
										},
									})
								}
							>
								<h1 className="text-lg">Van/Pickup</h1>
							</div>
							<div
								className={`flex justify-center items-center rounded-xl w-full py-7 md:py-12 border cursor-pointer ${
									formData.vechicleType === "caravan"
										? "border-buttonBg"
										: "shadow-lg"
								}`}
								onClick={() =>
									handleRadioChange({
										target: {
											name: "vechicleType",
											value: "caravan",
										},
									})
								}
							>
								<h1 className="text-lg">Caravan</h1>
							</div>
						</div>
						{errors.vechicleType && (
							<span className="text-red-500 text-sm">
								{errors.vechicleType}
							</span>
						)}
						<div className="flex flex-col md:flex-row justify-center gap-5 my-5">
							<div>
								<Input
									type="date"
									id="date"
									min={today}
									value={formData.date}
									onChange={handleInputChange}
									className={`w-full rounded-full px-5 py-2 border text-sm md:text-lg ${
										errors.time
											? "border-red-500"
											: "border-buttonBg"
									}`}
									style={{
										appearance: "none",
										WebkitAppearance: "none",
										MozAppearance: "none",
									}}
								/>
								{errors.date && (
									<span className="text-red-500 text-sm">
										{errors.date}
									</span>
								)}
							</div>
							<div>
								<Input
									type="time"
									id="time"
									value={formData.time}
									onChange={(e) => {
										const { value } = e.target;
										if (isValidTime(value)) {
											handleInputChange(e);
										}
									}}
									className={`w-full rounded-full px-5 py-2 border text-sm md:text-lg ${
										errors.time
											? "border-red-500"
											: "border-buttonBg"
									}`}
									style={{
										appearance: "none",
										WebkitAppearance: "none",
										MozAppearance: "none",
									}}
								/>
								{errors.time && (
									<span className="text-red-500 text-sm">
										{errors.time}
									</span>
								)}
							</div>
						</div>
					</div>
				);
			case 4:
				return (
					<div className="pl-1 md:px-0">
						<div className="flex flex-col items-center text-center gap-5 px-5 md:px-12 pt-1">
							<img src={ConfirmedLogo} alt="" className="w-36" />
							<p className="text-base md:text-2xl font-semibold text-[#170F49]">
								Proceed to pay for your booking
							</p>
						</div>
						<div className="mt-2 flex flex-col md:flex-row">
							<div className="w-full">
								<h1 className="font-semibold text-lg">
									Firstname -
								</h1>
								<p className="text-buttonBg capitalize">
									{formData.firstname}
								</p>
							</div>
							<div className="w-full">
								<h1 className="font-semibold text-lg">
									Lastname -
								</h1>
								<p className="text-buttonBg capitalize">
									{formData.lastname}
								</p>
							</div>
						</div>
						<div className="mt-2 flex flex-col md:flex-row">
							<div className="w-full">
								<h1 className="font-semibold text-lg">
									Date & Time -
								</h1>
								<p className="text-buttonBg capitalize">
									{formatDate(formData.date)} -{" "}
									{formatTime(formData.time)}
								</p>
							</div>
							<div className="w-full">
								<h1 className="font-semibold text-lg">
									Description -
								</h1>
								<p className="text-buttonBg">
									{formData.description}
								</p>
							</div>
						</div>
						<div className="mt-2 flex flex-col md:flex-row">
							<div className="w-full">
								<h1 className="font-semibold text-lg">
									Email -
								</h1>
								<p className="text-buttonBg">
									{formData.email}
								</p>
							</div>
							<div className="w-full">
								<h1 className="font-semibold text-lg">
									Vechicle type -
								</h1>
								<p className="text-buttonBg capitalize">
									{formData.vechicleType}
								</p>
							</div>
						</div>
						<div className="mt-2 flex flex-col md:flex-row">
							<div className="w-full">
								<h1 className="font-semibold text-lg">
									Phone number -
								</h1>
								<p className="text-buttonBg capitalize">
									{formData.phonenumber}
								</p>
							</div>
							<div className="w-full">
								<h1 className="font-semibold text-lg">
									Vechicle Registration number -
								</h1>
								<p className="text-buttonBg capitalize">
									{formData.vechicleNo}
								</p>
							</div>
						</div>
						<div className="mt-2 flex flex-col md:flex-row">
							<div className="w-full">
								<h1 className="font-semibold text-lg">
									Service -
								</h1>
								<p className="text-buttonBg capitalize">
									{formData.services}
								</p>
							</div>
							<div className="w-full">
								<div className="flex gap-3">
									<img src={MoneyLogo} alt="" />
									<h1 className="font-semibold text-lg">
										Price
									</h1>
								</div>
								<p className="text-buttonBg capitalize">$100</p>
							</div>
						</div>
					</div>
				);
			default:
				return null;
		}
	};

	return (
		<div className="flex flex-col justify-between font-Poppins min-h-screen">
			<div className="px-5 lg:px-16">
				<Navbar />
				<div className="flex flex-col items-center my-10 md:my-20">
					<div className="text-center">
						<h1 className="font-bold text-3xl lg:text-4xl">
							{currentStep === 4
								? "Booking Summary"
								: "Book a Wash"}
						</h1>
						<p
							className={`md:text-xl mt-2 ${
								currentStep === 4 ? "hidden" : "block"
							} `}
						>
							Please fill the form below to book a wash for your
							car
						</p>
					</div>
					<div className="bg-[#F9F9F9] rounded-2xl w-full max-w-4xl mt-10 p-5 md:p-10 flex flex-row md:flex-col items-start md:items-center gap-2">
						<div className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-4 md:mb-10 pt-5">
							<div
								className={`rounded-full h-12 w-12 flex justify-center items-center ${
									currentStep >= 1
										? "bg-buttonBg text-white"
										: "bg-[#EFF0F6]"
								}`}
							>
								<p>1</p>
							</div>
							<span
								className={`hidden md:block w-12 h-[2px] ${
									currentStep >= 2
										? "bg-buttonBg"
										: "bg-[#EFF0F6]"
								}`}
							></span>
							<span
								className={`block md:hidden w-[2px] h-12 ${
									currentStep >= 2
										? "bg-buttonBg"
										: "bg-[#EFF0F6]"
								}`}
							></span>
							<div
								className={`rounded-full h-12 w-12 flex justify-center items-center ${
									currentStep >= 2
										? "bg-buttonBg text-white"
										: "bg-[#EFF0F6]"
								}`}
							>
								<p>2</p>
							</div>
							<span
								className={`hidden md:block w-12 h-[2px] ${
									currentStep >= 3
										? "bg-buttonBg"
										: "bg-[#EFF0F6]"
								}`}
							></span>
							<span
								className={`block md:hidden w-[2px] h-12 ${
									currentStep >= 3
										? "bg-buttonBg"
										: "bg-[#EFF0F6]"
								}`}
							></span>
							<div
								className={`rounded-full h-12 w-12 flex justify-center items-center ${
									currentStep >= 3
										? "bg-buttonBg text-white"
										: "bg-[#EFF0F6]"
								}`}
							>
								<p>3</p>
							</div>
							<span
								className={`hidden md:block w-12 h-[2px] ${
									currentStep >= 4
										? "bg-buttonBg"
										: "bg-[#EFF0F6]"
								}`}
							></span>
							<span
								className={`block md:hidden w-[2px] h-12 ${
									currentStep >= 4
										? "bg-buttonBg"
										: "bg-[#EFF0F6]"
								}`}
							></span>
							<div
								className={`rounded-full h-12 w-12 flex justify-center items-center ${
									currentStep >= 4
										? "bg-buttonBg text-white"
										: "bg-[#EFF0F6]"
								}`}
							>
								<p>4</p>
							</div>
						</div>
						<form onSubmit={handleNextStep}>
							{renderForm()}
							<div
								className={`py-5 flex gap-3 ${
									currentStep <= 1
										? "justify-end"
										: "justify-between"
								}`}
							>
								<button
									className={`border border-buttonBg text-buttonBg w-full md:w-52 py-3 text-sm md:text-base rounded-full ${
										currentStep > 1 ? "block" : "hidden"
									}`}
									onClick={handlePreviousStep}
								>
									Previous
								</button>
								<button
									type="submit"
									className="bg-buttonBg text-white w-full md:w-52 py-3 text-sm md:text-base rounded-full hover:bg-buttonBgHover"
								>
									{currentStep < 4
										? "Next Step"
										: "Submit"}
								</button>
							</div>
						</form>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default Bookservice;
