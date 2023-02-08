import React from 'react';
import FooterComp from './components/FooterComp';
import Header from './components/Header';
import MasterRoutes from './components/navigation/MasterRoutes';
import Navbar from './components/navigation/Navbar';

function App() {
	return (
		<>
			<Header />
			<Navbar />
			<MasterRoutes />
			<FooterComp />
		</>
	);
}
export default App;
