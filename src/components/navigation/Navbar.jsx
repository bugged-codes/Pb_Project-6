import React from 'react';
import { NavLink } from 'react-router-dom';
import '../../styling/Navbar.css';

const Navbar = () => {
	return (
		<>
			<nav>
				<ul className="nav-list">
					<li>
						<NavLink to={'/'} className={({ isActive }) => (isActive ? 'active-nav' : 'nonActive-nav')}>
							Home
						</NavLink>
					</li>
					<li>
						<NavLink to={'/Bollywood'} className={({ isActive }) => (isActive ? 'active-nav' : 'nonActive-nav')}>
							Bollywood
						</NavLink>
					</li>
					<li>
						<NavLink to={'/Hollywood'} className={({ isActive }) => (isActive ? 'active-nav' : 'nonActive-nav')}>
							Hollywood
						</NavLink>
					</li>
					<li>
						<NavLink to={'/Technology'} className={({ isActive }) => (isActive ? 'active-nav' : 'nonActive-nav')}>
							Technology
						</NavLink>
					</li>
					<li>
						<NavLink to={'/Food'} className={({ isActive }) => (isActive ? 'active-nav' : 'nonActive-nav')}>
							Food
						</NavLink>
					</li>
					<li>
						<NavLink to={'/Fashion'} className={({ isActive }) => (isActive ? 'active-nav' : 'nonActive-nav')}>
							Fashion
						</NavLink>
					</li>
				</ul>
				<center>
					<div className="hr-div"></div>
				</center>
			</nav>
		</>
	);
};

export default Navbar;
