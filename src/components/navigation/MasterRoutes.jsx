import React from "react";
import { Route, Routes } from "react-router-dom";
import Bollywood from "../../pages/Bollywood";
import Home from "../../pages/Home";

const MasterRoutes = () => {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/Bollywood" element={<Bollywood />} />
		</Routes>
	);
};

export default MasterRoutes;
