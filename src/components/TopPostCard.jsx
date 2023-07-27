import React from 'react';
import { Link } from 'react-router-dom';

const TopPostCard = (props) => {
	const { imgUrl, title, description, articleId, category, elementId } = props;
	return (
		<div className="topPost-container">
			<Link
				className="card2pages-link"
				to={`${articleId}`}
				state={{
					title: title,
					img: imgUrl,
					description: description,
					id: articleId,
					category: category,
				}}
			>
				<div className="topPost-flexHr">
					<div className="topPost-img-container">
						<img className="topPost-img" id={`topPost-img-${props.elementId}`} src={props.imgUrl} alt="Not found" height="105px" width="100px" />
					</div>
					<div className="topPost-flexVr" id={`topPost-Vr-${props.elementId}`}>
						<h2 className="topPost-title">{props.title}</h2>
						<p className="topPost-descTags">{`${props.category} / ${props.articleId}`}</p>
					</div>
				</div>
				<hr className="topPost-hr" />
			</Link>
		</div>
	);
};

export default TopPostCard;
