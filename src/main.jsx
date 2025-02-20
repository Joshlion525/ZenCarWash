import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./pages/Login.jsx";
import Signup from "./pages/Signup.jsx";
import Bookservice from "./pages/Bookservice.jsx";
import Profile from "./pages/Profile.jsx";
import { ProfileProvider } from "./context/ProfileDetailsContext.jsx";
import Dashboard from "./pages/Dashboard.jsx";

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
	},
	{
		path: "/login",
		element: <Login />,
	},
	{
		path: "/signup",
		element: <Signup />,
	},
	{
		path: "/bookservice",
		element: <Bookservice />,
	},
	{
		path: "/profile",
		element: <Profile />,
	},
	{
		path: "/dashboard",
		element: <Dashboard />,
	},
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<ProfileProvider>
			<RouterProvider router={router} />
		</ProfileProvider>
	</React.StrictMode>
);
