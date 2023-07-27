import React from 'react';
import '../style/Components.css';

const Sidebar = (props) => {
	return (
		<div className={`comp-sidebar ${props.className}`}>
			<div>{props.text}</div>
		</div>
	);
};

export default Sidebar;
