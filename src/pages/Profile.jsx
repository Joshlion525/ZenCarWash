import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FallbackPhoto from "../assets/HENRY.jpeg";
import { useProfile } from "../context/ProfileDetailsContext";

const Profile = () => {
	const { userDetails } = useProfile();
	const handleImageError = (e) => {
		e.target.src = FallbackPhoto;
	};

	return (
		<div className="font-Poppins flex flex-col justify-between min-h-screen">
			<div className="px-5 lg:px-16">
				<Navbar />
				<div className="flex justify-center my-10 lg:my-20">
					<div className="bg-[#F9F9F9] rounded-lg p-1 md:p-10 w-full max-w-4xl">
						<div className="flex flex-col justify-center items-center gap-1 mb-5">
							<img
								src=""
								alt="display picture"
								onError={handleImageError}
								className="rounded-full w-24 lg:w-32 border-4 border-buttonBg"
							/>
							<p className="text-gray-600 text-sm lg:text-lg italic">
								Profile picture
							</p>
						</div>
						<div className="flex flex-col md:flex-row items-center gap-2 border p-5 rounded-xl border-buttonBg mb-3">
							<h1 className="text-base lg:text-xl font-semibold">
								Name:
							</h1>
							<h1 className="text-base lg:text-xl italic text-buttonBg capitalize">
								{userDetails.name}
							</h1>
						</div>
						<div className="flex flex-col md:flex-row items-center gap-2 border p-5 rounded-xl border-buttonBg mb-3">
							<h1 className="text-base lg:text-xl font-semibold">
								Email:
							</h1>
							<h1 className="text-base lg:text-xl italic text-buttonBg">
								{userDetails.email}
							</h1>
						</div>
						<div className="flex flex-col gap-2 border p-5 rounded-xl border-buttonBg mb-3">
							<h1 className="text-base lg:text-xl font-semibold">
								Booking history:
							</h1>
							<div className="overflow-x-auto">
								<table className="text-center md:text-left w-full">
									<thead>
										<tr className="border-b border-buttonBg text-sm lg:text-lg">
											<th className="py-2 px-3 lg:py-3">
												Services
											</th>
											<th>Price</th>
											<th>Date & time</th>
										</tr>
									</thead>
									<tbody className="text-buttonBg">
										<tr className="border-b border-buttonBg text-xs lg:text-lg italic">
											<td className="py-2 px-3 lg:py-3">
												Valet
											</td>
											<td>$100</td>
											<td>12 Jul, 2024 - 10:00am</td>
										</tr>
									</tbody>
								</table>
							</div>
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default Profile;
