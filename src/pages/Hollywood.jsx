import React, { useContext } from 'react';
import CardSmall from '../components/CardSmall';
import CardBig from '../components/CardBig';
import TopPostCard from '../components/TopPostCard';
import { context } from '../data/DataContext';
import Sidebar from '../components/Sidebar';
import '../style/Pages.css';
import '../style/Components.css';

const Hollywood = () => {
	const [contextData] = useContext(context);
	// console.log('contextData is: ', contextData);
	const filterdData = contextData.filter((post) => {
		return post.category === 'Hollywood';
	});
	// console.log('filterdData is: ', filterdData);
	const newArr = [];
	const reversedData = (filterdData) => {
		for (let i = filterdData.length - 1; i > Number(filterdData.length - 5); i--) {
			newArr.push(filterdData[i]);
		}
		// console.log(newArr);
		return newArr;
	};
	reversedData(filterdData);
	return (
		<div className="hollywood-page pages">
			<div className="page-main-container">
				<h1 className="page-heading">Hollywood</h1>
				{filterdData.map((article, index) => {
					return <CardBig key={article.id} elementId={index} articleId={article.id} title={article.title} imgUrl={article.img} description={article.description} category={article.category} />;
				})}
			</div>
			<div className="page-side-container">
				<div className="topPost-heading">Top Posts</div>
				{newArr.map((article, index, arr) => {
					return <TopPostCard elementId={index} key={article.id} articleId={article.id} title={article.title} imgUrl={article.img} description={article.description} category={article.category} />;
				})}

				<Sidebar className="sidebar-2" text={'Space for Advertisement'} />
			</div>
		</div>
	);
};

export default Hollywood;
