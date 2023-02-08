import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../../pages/Home';
import Bollywood from '../../pages/Bollywood';
import Hollywood from '../../pages/Hollywood';
import Technology from '../../pages/Technology';
import Fashion from '../../pages/Fashion';
import Food from '../../pages/Food';
import DataContext from '../../data/DataContext';

const MasterRoutes = () => {
	return (
		<DataContext>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/Bollywood" element={<Bollywood />} />
				<Route path="/Hollywood" element={<Hollywood />} />
				<Route path="/Technology" element={<Technology />} />
				<Route path="/Fashion" element={<Fashion />} />
				<Route path="/Food" element={<Food />} />
			</Routes>
		</DataContext>
	);
};

export default MasterRoutes;
