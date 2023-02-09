import React, { useContext } from 'react';
import CardSmall from '../components/CardSmall';
import CardBig from '../components/CardBig';
import { context } from '../data/DataContext';
import Sidebar from '../components/Sidebar';
import '../styling/Pages.css';

const Food = () => {
	const [contextData] = useContext(context);
	// console.log('contextData is: ', contextData);
	return (
		<div className="food pages">
			<div>
				<h1 className="page-heading">Food</h1>
				{contextData
					.filter((post) => {
						// console.log('Bollywood Cat: ', post.cat === 'Bollywood');
						return post.cat === 'Food';
					})
					.map((article) => {
						return <CardBig key={article.id} articleId={article.id} title={article.title} imgUrl={article.img} description={article.des} />;
					})}
			</div>
			<Sidebar />
		</div>
	);
};

export default Food;
