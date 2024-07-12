import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

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
	});
	const [services, setServices] = useState({
		service: "",
	});
	const [vechicleType, setVechicleType] = useState({
		carType: "",
	});
	const [errors, setErrors] = useState({});

	const handleRadioChange = (service) => {
		setServices({ service });
	};
	const handleRadioChangeTwo = (carType) => {
		setVechicleType({ carType });
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
				if (!services.service)
					newErrors.service = "Please select a plan";
				break;
			case 3:
				if (!vechicleType.carType)
					newErrors.carType = "Please pick your vechicle type";
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

	const renderForm = () => {
		switch (currentStep) {
			case 1:
				return (
					<>
						<div className="px-5 md:px-12 pt-5">
							<h1 className="font-bold text-2xl md:text-3xl">
								Contact details
							</h1>
							<p className="text-base md:text-xl mt-2">
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
							<p className="text-base md:text-xl mt-2">
								Please select which service you're interested in
							</p>
						</div>
						<div className="flex flex-col md:flex-row gap-5 mb-5">
							<div
								className={`flex justify-center items-center rounded-xl w-full py-7 md:py-12 border cursor-pointer ${
									services.service === "handwash"
										? "border-buttonBg"
										: "shadow-lg"
								}`}
								onClick={() => handleRadioChange("handwash")}
							>
								<h1 className="text-lg">Handwash</h1>
							</div>
							<div
								className={`flex justify-center items-center rounded-xl w-full py-7 md:py-12 border cursor-pointer ${
									services.service === "minivalet"
										? "border-buttonBg"
										: "shadow-lg"
								}`}
								onClick={() => handleRadioChange("minivalet")}
							>
								<h1 className="text-lg">Mini valet</h1>
							</div>
						</div>
						<div className="flex flex-col md:flex-row gap-5 mb-5">
							<div
								className={`flex justify-center items-center rounded-xl w-full py-7 md:py-12 border cursor-pointer ${
									services.service === "fullvalet"
										? "border-buttonBg"
										: "shadow-lg"
								}`}
								onClick={() => handleRadioChange("fullvalet")}
							>
								<h1 className="text-lg">Full valet</h1>
							</div>
							<div
								className={`flex justify-center items-center rounded-xl w-full py-7 md:py-12 border cursor-pointer ${
									services.service === "others"
										? "border-buttonBg"
										: "shadow-lg"
								}`}
								onClick={() => handleRadioChange("others")}
							>
								<h1 className="text-lg">Others</h1>
							</div>
						</div>
						{errors.service && (
							<span className="text-red-500 text-sm">
								{errors.service}
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
							<p className="text-sm md:text-xl mt-2 mb-5">
								Please select your vechicle type and date/time
							</p>
						</div>
						<div className="flex flex-col md:flex-row gap-5 mb-5">
							<div
								className={`flex justify-center items-center rounded-xl w-full py-7 md:py-12 border cursor-pointer ${
									vechicleType.carType === "car"
										? "border-buttonBg"
										: "shadow-lg"
								}`}
								onClick={() => handleRadioChangeTwo("car")}
							>
								<h1 className="text-lg">Car</h1>
							</div>
							<div
								className={`flex justify-center items-center rounded-xl w-full py-7 md:py-12 border cursor-pointer ${
									vechicleType.carType === "suv"
										? "border-buttonBg"
										: "shadow-lg"
								}`}
								onClick={() => handleRadioChangeTwo("suv")}
							>
								<h1 className="text-lg">SUV</h1>
							</div>
						</div>
						<div className="flex flex-col md:flex-row gap-5 mb-5">
							<div
								className={`flex justify-center items-center rounded-xl w-full py-7 md:py-12 border cursor-pointer ${
									vechicleType.carType === "van/pickup"
										? "border-buttonBg"
										: "shadow-lg"
								}`}
								onClick={() =>
									handleRadioChangeTwo("van/pickup")
								}
							>
								<h1 className="text-lg">Van/Pickup</h1>
							</div>
							<div
								className={`flex justify-center items-center rounded-xl w-full py-7 md:py-12 border cursor-pointer ${
									vechicleType.carType === "caravan"
										? "border-buttonBg"
										: "shadow-lg"
								}`}
								onClick={() => handleRadioChangeTwo("caravan")}
							>
								<h1 className="text-lg">Caravan</h1>
							</div>
						</div>
						{errors.carType && (
							<span className="text-red-500 text-sm">
								{errors.carType}
							</span>
						)}
						<div className="flex flex-col md:flex-row justify-center gap-5 my-5">
							<div>
								<input
									type="date"
									name=""
									id=""
									placeholder="Select date"
									className={`w-full rounded-full px-5 py-2 border text-sm md:text-lg ${
										errors.time
											? "border-red-500"
											: "border-buttonBg"
									}`}
								/>
							</div>
							<div>
								<input
									type="time"
									name=""
									id=""
									className={`w-full rounded-full px-5 py-2 border text-sm md:text-lg ${
										errors.time
											? "border-red-500"
											: "border-buttonBg"
									}`}
								/>
							</div>
						</div>
					</div>
				);
			case 4:
				return (
					<>
						<div className="px-5 md:px-12 pt-5">
							<h1 className="font-bold text-2xl md:text-3xl">
								Confirmation
							</h1>
							<p className="text-base md:text-xl mt-2">
								Please review and confirm your details
							</p>
						</div>
						<div className="px-5 md:px-12 pt-5">
							<p className="text-lg md:text-xl">
								Your contact and vehicle details will be
								displayed here for confirmation.
							</p>
						</div>
					</>
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
							Book a Wash
						</h1>
						<p className="md:text-xl mt-2">
							Please fill the form below to book a wash for your
							car
						</p>
					</div>
					<div className="bg-gray-100 rounded-2xl w-full max-w-4xl mt-10 p-5 md:p-10 flex flex-row md:flex-col items-start md:items-center gap-2">
						<div className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-4 md:mb-10 pt-5">
							<div
								className={`rounded-full h-12 w-12 flex justify-center items-center ${
									currentStep >= 1
										? "bg-buttonBg text-white"
										: "bg-gray-200"
								}`}
							>
								<p>1</p>
							</div>
							<span
								className={`hidden md:block w-12 h-[2px] ${
									currentStep >= 2
										? "bg-buttonBg"
										: "bg-gray-200"
								}`}
							></span>
							<span
								className={`block md:hidden w-[2px] h-12 ${
									currentStep >= 2
										? "bg-buttonBg"
										: "bg-gray-200"
								}`}
							></span>
							<div
								className={`rounded-full h-12 w-12 flex justify-center items-center ${
									currentStep >= 2
										? "bg-buttonBg text-white"
										: "bg-gray-200"
								}`}
							>
								<p>2</p>
							</div>
							<span
								className={`hidden md:block w-12 h-[2px] ${
									currentStep >= 3
										? "bg-buttonBg"
										: "bg-gray-200"
								}`}
							></span>
							<span
								className={`block md:hidden w-[2px] h-12 ${
									currentStep >= 3
										? "bg-buttonBg"
										: "bg-gray-200"
								}`}
							></span>
							<div
								className={`rounded-full h-12 w-12 flex justify-center items-center ${
									currentStep >= 3
										? "bg-buttonBg text-white"
										: "bg-gray-200"
								}`}
							>
								<p>3</p>
							</div>
							<span
								className={`hidden md:block w-12 h-[2px] ${
									currentStep >= 4
										? "bg-buttonBg"
										: "bg-gray-200"
								}`}
							></span>
							<span
								className={`block md:hidden w-[2px] h-12 ${
									currentStep >= 4
										? "bg-buttonBg"
										: "bg-gray-200"
								}`}
							></span>
							<div
								className={`rounded-full h-12 w-12 flex justify-center items-center ${
									currentStep >= 4
										? "bg-buttonBg text-white"
										: "bg-gray-200"
								}`}
							>
								<p>4</p>
							</div>
						</div>
						<form onSubmit={handleNextStep}>
							{renderForm()}
							<div
								className={`py-5 flex gap-5 ${
									currentStep <= 1
										? "justify-end"
										: "justify-between"
								}`}
							>
								<button
									className={`border border-buttonBg text-buttonBg w-full md:w-52 py-3 text-sm md:text-base rounded-full ${
										currentStep > 1 ? "block" : "hidden"
									}`}
								>
									Previous
								</button>
								<button
									type="submit"
									className="bg-buttonBg text-white w-full md:w-52 py-3 text-sm md:text-base rounded-full hover:bg-buttonBgHover"
								>
									{currentStep < 4 ? "Next Step" : "Submit"}
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
