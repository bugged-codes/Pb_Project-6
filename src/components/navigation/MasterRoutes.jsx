import React from 'react';
import { Route, Routes } from 'react-router-dom';
import DataContext from '../../data/DataContext';
import Home from '../../pages/Home';
import Bollywood from '../../pages/Bollywood';
import Hollywood from '../../pages/Hollywood';
import Technology from '../../pages/Technology';
import Travel from '../../pages/Travel';
import Food from '../../pages/Food';
import FocusedPage from '../../pages/FocusedPage';

const MasterRoutes = () => {
	return (
		<DataContext>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/Bollywood" element={<Bollywood />} />
				<Route path="/Hollywood" element={<Hollywood />} />
				<Route path="/Technology" element={<Technology />} />
				<Route path="/Travel" element={<Travel />} />
				<Route path="/Food" element={<Food />} />
				<Route path=":category/:articleId" element={<FocusedPage />} />
			</Routes>
		</DataContext>
	);
};

export default MasterRoutes;
