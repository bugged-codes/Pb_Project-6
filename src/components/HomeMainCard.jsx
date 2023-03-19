import React from 'react';
import { NavLink } from 'react-router-dom';

const HomeMainCard = (props) => {
	const { imgUrl, title, description, articleid, category } = props;
	return (
		<NavLink id={category + '-' + articleid} state={{ title: title, img: imgUrl, description: description, id: articleid }} to={`/${category + '/' + articleid}`}>
			<div className="Mcard-container">
				<div className="Mcard-img">
					<img src={imgUrl} alt="not found" />
				</div>
				<div className="Mcard-data">
					<h2>{title}</h2>
					<p>{description}....</p>
				</div>
			</div>
			<hr className="Mcard-hr" />
		</NavLink>
	);
};

export default HomeMainCard;
