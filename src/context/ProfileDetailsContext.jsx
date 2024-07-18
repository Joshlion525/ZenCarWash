import React, { createContext, useContext, useState } from "react";

const ProfileDetailsContext = createContext();

export const useProfile = () => {
	return useContext(ProfileDetailsContext);
};

export const ProfileProvider = ({ children }) => {
	const [userDetails, setUserDetails] = useState({
		name: "",
		email: "",
		role: "",
		password: "",
	});
	return (
		<ProfileDetailsContext.Provider value={{ userDetails, setUserDetails }}>
			{children}
		</ProfileDetailsContext.Provider>
	);
};
