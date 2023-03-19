import React from 'react';
import { Link } from 'react-router-dom';
import '../style/Components.css';

const CardBig = (props) => {
	// console.log('Card props are: ', props);
	const { imgUrl, title, description, articleid } = props;
	return (
		<div>
			<Link
				to={`${props.articleid}`}
				state={{
					title: title,
					img: imgUrl,
					description: description,
					id: articleid,
				}}
			>
				<div>
					<div className="card__container cardBig">
						<div className="card__image cardBig-img">
							<img src={props.imgUrl} alt="React Logo" height={250} width={450} />
							<h2 className="cardBig-title">{props.title}</h2>
						</div>
						<p className="cardBig-desc">{props.description}....</p>
					</div>
					<hr className="cardBig-hr" />
				</div>
				{/* <img src="../data/logo.svg" alt="" /> */}
			</Link>
		</div>
	);
};

export default CardBig;
