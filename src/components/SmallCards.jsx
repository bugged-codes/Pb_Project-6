import React from 'react';
import { Link } from 'react-router-dom';

const SmallCards = (props) => {
	const { imgUrl, title, description, articleId } = props;
	return (
		<Link state={{ title: title, img: imgUrl, description: description, id: articleId }} to={`${articleId}`}>
			<div className="card__small">
				<div className="card__data">
					<div className="smallCard__image">
						<img src={imgUrl} alt="not found" />
					</div>
					<div className="small">
						<h3>{title}</h3>
					</div>
				</div>
			</div>
		</Link>
	);
};
export default SmallCards;
