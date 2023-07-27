import React from 'react';
import { Link } from 'react-router-dom';
import '../style/Components.css';

const CardBig = (props) => {
	// console.log('Card props are: ', props);
	const { imgUrl, title, description, articleId, category, elementId } = props;
	return (
		<div className="cardBig">
			<Link
				className="card2pages-link"
				to={`${props.articleId}`}
				state={{
					title: title,
					img: imgUrl,
					description: description,
					id: articleId,
					category: category,
				}}
			>
				<div className="cardBig-flexHr">
					<div className="cardBig-img-container">
						<img className="cardBig-img" src={props.imgUrl} alt="React Logo" height="180px" width="300px" />
					</div>
					<div className="cardBig-flexVr">
						<h2 className="cardBig-title">{props.title}</h2>
						<p className="cardBig-desc">{props.description.slice(0, 200)}</p>
						<p className="cardBig-descTags">{`${props.category} / ${props.articleId}`}</p>
					</div>
				</div>
				<hr className="cardBig-hr" id={`cardBig-hr-${props.elementId}`} />
				{/* <img src="../data/logo.svg" alt="" /> */}
			</Link>
		</div>
	);
};

export default CardBig;
// const CardBig = (props) => {
// 	// console.log('Card props are: ', props);
// 	const { imgUrl, title, description, articleId } = props;
// 	return (
// 		<div>
// 			<Link
// 				className="cardBig2pages-link"
// 				to={`${props.articleId}`}
// 				state={{
// 					title: title,
// 					img: imgUrl,
// 					description: description,
// 					id: articleId,
// 				}}
// 			>
// 				<div>
// 					<div className="cardBig">
// 						<div className="cardBig-img-container">
// 							<img className="cardBig-img" src={props.imgUrl} alt="React Logo" height={250} width={450} />
// 							<h2 className="cardBig-title">{props.title}</h2>
// 						</div>
// 						<p className="cardBig-desc">{props.description}</p>
// 					</div>
// 					<hr className="cardBig-hr" />
// 				</div>
// 				{/* <img src="../data/logo.svg" alt="" /> */}
// 			</Link>
// 		</div>
// 	);
// };

// export default CardBig;
