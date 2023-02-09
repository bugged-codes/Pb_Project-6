import React from 'react';
import { Link } from 'react-router-dom';

const CardBig = (props) => {
	console.log('card prop', props);
	return (
		// <Link to="/DetailPage">
		<div>
			<Link
				to={`${props.articleid}`}
				state={{
					title: props.title,
					// img: props.imgUrl,
					description: props.desc,
					id: props.articleid,
				}}
			>
				<div>
					<div className="card__container">
						<div className="card__image">
							<img src={props.imgUrl} alt="React Logo" />
						</div>
						<div className="bigcard__data">
							<h5>{props.title}</h5>
							<p>{props.description}....</p>
						</div>
					</div>
					<hr style={{ fontWeigth: '40px', color: 'black' }} />
				</div>
				{/* <img src="../data/logo.svg" alt="" /> */}
			</Link>
		</div>
	);
};

export default CardBig;
