import React, { useContext } from 'react';
import SmallCards from '../components/SmallCards';
import Sidebar from '../components/Sidebar';
import CardSmall from '../components/CardSmall';
import { context } from '../data/DataContext';

export default function Home() {
	const [contextData] = useContext(context);
	return (
		<>
			<div className="Home">
				<SmallCards img="https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8VGVjaG5vbG9neXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60" h1="Heading-1" para1="Para1" />
				<Sidebar />
				<div className="sidebar2">
					{contextData
						.filter((article) => {
							return article.category === 'mix';
						})
						.map((item) => (
							<CardSmall key={item.id} articleid={item.id} imgUrl={item.img} description={item.description.slice(0, 200)} title={item.title.slice(0, 25)} author={item.author} />
						))}
				</div>
			</div>
		</>
	);
}
