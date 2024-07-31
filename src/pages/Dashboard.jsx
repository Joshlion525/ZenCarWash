import React, { useState } from "react";
import Logo from "../assets/Logo.svg";
import Camera from "../assets/Cameraicon.svg";
import ProfilePhoto from "../assets/man-438081_960_720.svg";
import { Link as RouterLink } from "react-router-dom";
import { IoIosSearch } from "react-icons/io";
import { MdKeyboardArrowDown } from "react-icons/md";
import { RxClock } from "react-icons/rx";
import { PiListChecks } from "react-icons/pi";

const Dashboard = () => {
	const [selectedBooking, setSelectedBooking] = useState(null);
	const [isModalOpen, setIsModalOpen] = useState(false);

	const Bookings = [
		{
			id: 1,
			name: "Adebanjo Joshua",
			vechicleRegNo: "122ewc35",
			date: "31 July 2024",
			Time: "3:00pm",
			Amount: "$100",
			email: "joshlion525@gmail.com",
			vechicleType: "Car",
			service: "Handwash",
			description: "Don't wash the engine",
		},
		{
			id: 2,
			name: "Adebanjo Joshua",
			vechicleRegNo: "122ewc35",
			date: "31 July 2024",
			Time: "3:00pm",
			Amount: "$100",
			email: "joshlion525@gmail.com",
			vechicleType: "Car",
			service: "Handwash",
			description: "Don't wash the engine",
		},
		{
			id: 3,
			name: "Adebanjo Joshua",
			vechicleRegNo: "122ewc35",
			date: "31 July 2024",
			Time: "3:00pm",
			Amount: "$100",
			email: "joshlion525@gmail.com",
			vechicleType: "Car",
			service: "Handwash",
			description: "Don't wash the engine",
		},
		{
			id: 4,
			name: "Adebanjo Joshua",
			vechicleRegNo: "122ewc35",
			date: "31 July 2024",
			Time: "3:00pm",
			Amount: "$100",
			email: "joshlion525@gmail.com",
			vechicleType: "Car",
			service: "Handwash",
			description: "Don't wash the engine",
		},
		{
			id: 5,
			name: "Adebanjo Joshua",
			vechicleRegNo: "122ewc35",
			date: "31 July 2024",
			Time: "3:00pm",
			Amount: "$100",
			email: "joshlion525@gmail.com",
			vechicleType: "Car",
			service: "Handwash",
			description: "Don't wash the engine",
		},
	];

	const handleRowClick = (booking) => {
		setSelectedBooking(booking);
		setIsModalOpen(true);
	};

	const closeModal = () => {
		setIsModalOpen(false);
		setSelectedBooking(null);
	};

	return (
		<div className="font-Poppins md:px-10">
			<div className="flex items-center justify-between gap-4 py-2 md:py-5 px-3 md:px-0">
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
					<div className="flex flex-col items-left md:items-start">
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
			<div className="block md:hidden mt-1 px-3 md:px-0">
				<div className="flex items-center gap-2 pb-5">
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
			<div className="flex">
				<div className="border-r min-h-screen pt-8 pr-8 hidden md:block">
					<div className="flex items-center gap-5 w-52 p-4 rounded-md cursor-pointer text-buttonBg hover:bg-buttonBg hover:text-white mb-5">
						<div className="hover:text-white">
							<RxClock className="text-xl" />
						</div>
						<p className="font-medium hover:text-white">
							Dashboard
						</p>
					</div>
					<div className="flex items-center gap-5 w-52 p-4 rounded-md text-buttonBg cursor-pointer hover:bg-buttonBg hover:text-white">
						<div>
							<PiListChecks className="text-xl" />
						</div>
						<p className="font-medium hover:text-white">Bookings</p>
					</div>
				</div>
				<div className="bg-[#F5F6FA] flex-1 p-3 md:p-8 w-full">
					<div className="block md:hidden mb-10 w-full">
						<div className="flex justify-between gap-5">
							<div className="flex items-center gap-2 md:gap-5 w-52 p-4 rounded-md cursor-pointer text-buttonBg bg-white hover:bg-buttonBg hover:text-white">
								<div className="hover:text-white">
									<RxClock className="text-xl" />
								</div>
								<p className="font-medium hover:text-white">
									Dashboard
								</p>
							</div>
							<div className="flex items-center gap-2 md:gap-5 w-52 p-4 rounded-md text-buttonBg cursor-pointer bg-white hover:bg-buttonBg hover:text-white">
								<div>
									<PiListChecks className="text-xl" />
								</div>
								<p className="font-medium hover:text-white">
									Bookings
								</p>
							</div>
						</div>
					</div>
					<h1 className="font-semibold text-4xl mb-10">Bookings</h1>
					<div className="border rounded-2xl">
						<div className="overflow-x-auto">
							<table className="min-w-full bg-white rounded-2xl">
								<thead className="font-semibold text-left border-b">
									<tr>
										<th className="py-5 px-4 md:px-10 font-semibold">
											ID
										</th>
										<th className="py-5 px-4 md:px-10 font-semibold">
											NAME
										</th>
										<th className="py-5 px-4 md:px-10 font-semibold">
											VEHICLE REGISTRATION NO
										</th>
										<th className="py-5 px-4 md:px-10 font-semibold">
											Date
										</th>
										<th className="py-5 px-4 md:px-10 font-semibold">
											Time
										</th>
										<th className="py-5 px-4 md:px-10 font-semibold text-center">
											Amount
										</th>
									</tr>
								</thead>
								<tbody>
									{Bookings.map((Booking) => (
										<tr
											className="border-b cursor-pointer"
											key={Booking.id}
											onClick={() =>
												handleRowClick(Booking)
											}
										>
											<td className="py-5 px-4 md:px-10">
												{Booking.id}
											</td>
											<td className="py-5 px-4 md:px-10">
												{Booking.name}
											</td>
											<td className="py-5 px-4 md:px-10">
												{Booking.vechicleRegNo}
											</td>
											<td className="py-5 px-4 md:px-10">
												{Booking.date}
											</td>
											<td className="py-5 px-4 md:px-10">
												{Booking.Time}
											</td>
											<td className="py-5 px-4 md:px-10 text-center">
												<p className="border py-1 text-buttonBg font-bold bg-[#86bc87] rounded-md">
													{Booking.Amount}
												</p>
											</td>
										</tr>
									))}
								</tbody>
							</table>
						</div>
					</div>
				</div>
			</div>

			{isModalOpen && selectedBooking && (
				<div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
					<div className="bg-white p-6 rounded-lg">
						<h2 className="text-2xl font-medium mb-4 text-buttonBg italic">
							Booking Summary
						</h2>
						<div className="flex flex-col md:flex-row md:items-center md:gap-3">
							<h1 className="font-medium text-xl">Name -</h1>
							<p className="text-lg text-buttonBg font-light italic">
								{selectedBooking.name}
							</p>
						</div>
						<div className="flex flex-col md:flex-row md:items-center md:gap-3">
							<h1 className="font-medium text-xl">
								Email address -
							</h1>
							<p className="text-lg text-buttonBg font-light italic">
								{selectedBooking.email}
							</p>
						</div>
						<div className="flex flex-col md:flex-row md:items-center md:gap-3">
							<h1 className="font-medium text-xl">
								Vechicle type -
							</h1>
							<p className="text-lg text-buttonBg font-light italic">
								{selectedBooking.vechicleType}
							</p>
						</div>
						<div className="flex flex-col md:flex-row md:items-center md:gap-3">
							<h1 className="font-medium text-xl">
								Vechicle registration number -
							</h1>
							<p className="text-lg text-buttonBg font-light italic">
								{selectedBooking.vechicleRegNo}
							</p>
						</div>
						<div className="flex flex-col md:flex-row md:items-center md:gap-3">
							<h1 className="font-medium text-xl">Service -</h1>
							<p className="text-lg text-buttonBg font-light italic">
								{selectedBooking.service}
							</p>
						</div>
						<div className="flex flex-col md:flex-row md:items-center md:gap-3">
							<h1 className="font-medium text-xl">
								Date & time -
							</h1>
							<p className="text-lg text-buttonBg font-light italic">
								{selectedBooking.date} - {selectedBooking.Time}
							</p>
						</div>
						<div className="flex flex-col md:flex-row md:items-center md:gap-3">
							<h1 className="font-medium text-xl">
								Description -
							</h1>
							<p className="text-lg text-buttonBg font-light italic">
								{selectedBooking.description}
							</p>
						</div>

						<button
							onClick={closeModal}
							className="mt-4 py-2 px-4 bg-buttonBg text-white rounded"
						>
							Close
						</button>
					</div>
				</div>
			)}
		</div>
	);
};

export default Dashboard;
