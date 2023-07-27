import React, { useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { context } from '../data/DataContext';
import '../style/Pages.css';

function FocusedPage() {
	const location = useLocation();
	const { id } = location.state;
	// console.log('Foucused page Title: ', title);
	const [contextData] = useContext(context);
	const Navigate = useNavigate();
	const GoBack = () => {
		Navigate(-1);
	};

	// console.log(
	// 	'FocusedPage context: ',
	// 	contextData.filter((item) => {
	// 		return id === item.id;
	// 	})
	// );
	return contextData
		.filter((item) => {
			return id === item.id;
		})
		.map((article) => {
			return (
				<div className="focused-page" key={article.id}>
					<div className="main-blog">
						<h1>{article.title}</h1>
						<img src={article.img} alt=" " />
						<div className="blog-info">
							<p>Date: __/__/____</p>
							<p>tags: </p>
						</div>
						<p>{article.description}</p>
					</div>
					<button className="focusedPage-back-btn" onClick={GoBack}>
						Back
					</button>
				</div>
			);
		});
}

export default FocusedPage;
