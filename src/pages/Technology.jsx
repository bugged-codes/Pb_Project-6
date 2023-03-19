import React, { useContext } from 'react';
import CardSmall from '../components/CardSmall';
import CardBig from '../components/CardBig';
import { context } from '../data/DataContext';
import Sidebar from '../components/Sidebar';
import '../style/Pages.css';

const Technology = () => {
	const [contextData] = useContext(context);
	// console.log('contextData is: ', contextData);
	return (
		<div className="technology pages">
			<div>
				<h1 className="page-heading">Technology</h1>
				{contextData
					.filter((post) => {
						// console.log('Bollywood Category: ', post.category === 'Bollywood');
						return post.category === 'Technology';
					})
					.map((article) => {
						return <CardBig key={article.id} articleId={article.id} title={article.title} imgUrl={article.img} description={article.description.slice(0, 120)} category={article.category} />;
					})}
			</div>
			<Sidebar />
		</div>
	);
};

export default Technology;
