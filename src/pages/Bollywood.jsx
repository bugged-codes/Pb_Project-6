import React, { useContext } from 'react';
import CardSmall from '../components/CardSmall';
import CardBig from '../components/CardBig';
import { context } from '../data/DataContext';
import Sidebar from '../components/Sidebar';
import '../styling/Pages.css';

const Bollywood = () => {
	const [contextData] = useContext(context);
	// console.log('contextData is: ', contextData);
	return (
		<div className="bollywood pages">
			<div>
				<h1 className="page-heading">Bollywood</h1>
				{contextData
					.filter((post) => {
						// console.log('Bollywood Cat: ', post.cat === 'Bollywood');
						return post.cat === 'Bollywood';
					})
					.map((article) => {
						return <CardBig key={article.id} articleId={article.id} title={article.title} imgUrl={article.img} description={article.des} />;
					})}
			</div>
			<Sidebar />
		</div>
	);
};

export default Bollywood;
