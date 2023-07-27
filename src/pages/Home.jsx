import React, { useContext } from 'react';
// import SmallCards from '../components/SmallCards';
// import Sidebar from '../components/Sidebar';
import CardSmall from '../components/CardSmall';
import { context } from '../data/DataContext';
import { Link } from 'react-router-dom';
import HomeMainCard from '../components/HomeMainCard';
import CardBig from '../components/CardBig';
import '../style/Pages.css';
import '../style/Components.css';
import Sidebar from '../components/Sidebar';

export default function Home() {
	const [contextData] = useContext(context);
	// const [] = useContext(store);
	return (
		<>
			<div className="Home">
				{/* <h1 className="page-heading" style={{ marginLeft: '5.4rem' }}>
					Home
				</h1> */}
				<div className="home-grid-container">
					<div id="home-grid-div-1">
						{/* {console.log(
							contextData.filter((item) => {
								return item.id === 14;
							})
						)} */}
						{contextData
							.filter((item) => {
								return item.id === 14;
							})
							.map((item) => {
								return (
									<Link to="/Technology">
										<img id="home-grid-img-1" className="home-grid-img" src={'https://static.digit.in/default/tr:w-2048/14649samsungs23-ultra1-2-20231280x720-7e165d4c68.jpeg'} alt="not found" />
										<span id="grid-heading-1" className="home-grid-blogs-heading">
											{item.title}
										</span>
									</Link>
								);
							})}
					</div>
					<div id="home-grid-div-2">
						{contextData
							.filter((item) => {
								return item.id === 26;
							})
							.map((item) => {
								return (
									<Link to="/Travel">
										<img id="home-grid-img-2" className="home-grid-img" src={'https://wallpapercave.com/dwp1x/wp2003930.jpg'} alt="not found" />
										<span id="grid-heading-2" className="home-grid-blogs-heading">
											{item.title}
										</span>
									</Link>
								);
							})}
					</div>

					<div id="home-grid-div-3">
						{contextData
							.filter((item) => {
								return item.id === 19;
							})
							.map((item) => {
								return (
									<Link to="/Travel">
										<img id="home-grid-img-3" className="home-grid-img" src={'https://wallpapercave.com/wp/wp11979548.jpg'} alt="not found" />
										<span id="grid-heading-3" className="home-grid-blogs-heading">
											{item.title}
										</span>
									</Link>
								);
							})}
					</div>
				</div>

				<h1 className="home-heading heading">Latest on The Siren🚨</h1>
				<hr className="home-main-hr" />
				<div className="home-latest-flex-container">
					<div id="home-bolly-main" className="home-left home-latest-blogs">
						{contextData
							.filter((article) => {
								// Bollywood articles range from 1 to 6
								if (article.id >= 1 && article.id <= 3) return article.category === 'Bollywood';
							})
							.map((item) => (
								<HomeMainCard key={item.id} articleId={item.id} imgUrl={item.img} title={item.title} description={item.description} author={item.author} category={item.category} />
							))}
					</div>
					{/* <div id="home-tech-main" className="home-left home-latest-blogs">
						{contextData
							.filter((article) => {
								// Technology articles from 13 to 18
								if (article.id >= 13 && article.id <= 15) return article.category === 'Technology';
							})
							.map((item) => (
								<HomeMainCard key={item.id} articleId={item.id} imgUrl={item.img} title={item.title} description={item.description} author={item.author} category={item.category}/>
							))}
					</div> */}
					<div id="home-food-main" className="home-left home-latest-blogs">
						{contextData
							.filter((article) => {
								// Food articles from 19 to 24
								if (article.id >= 19 && article.id <= 21) return article.category === 'Food';
							})
							.map((item) => (
								<HomeMainCard key={item.id} articleId={item.id} imgUrl={item.img} title={item.title} description={item.description} author={item.author} category={item.category} />
							))}
					</div>
				</div>
				<Sidebar text={'Space for Advertisement'} />
				<h1 className="home-heading heading">Latest Articles</h1>

				<h1 className="home-heading heading Top">Top Posts</h1>
				<hr className="home-main-hr" />

				<div className="rightbar2">
					{contextData
						.filter((article) => {
							return article.category === 'Travel';
						})
						.map((item) => (
							<CardBig key={item.id} articleId={item.id} imgUrl={item.img} title={item.title} description={item.description} author={item.author} />
						))}
				</div>
				<div className="sidebar2">
					{contextData
						.filter((article) => {
							return article.category === 'mix';
						})
						.map((item) => (
							<CardSmall key={item.id} articleId={item.id} imgUrl={item.img} description={item.description} title={item.title.slice(0, 25)} author={item.author} />
						))}

					<div className="advertisement">
						<p>Advertisement</p>
					</div>
				</div>
				<h1 className="home-heading heading" style={{ marginTop: '40px', display: 'inline-block' }}>
					Latest Stories
				</h1>
				<hr className="home-main-hr" />

				<div className="home__left">
					{contextData
						.filter((article) => {
							return article.category === 'footer1';
						})
						.map((item) => (
							<HomeMainCard key={item.id} articleId={item.id} imgUrl={item.img} title={item.title} description={item.description} author={item.author} />
						))}
				</div>

				<div className="home__left">
					{contextData
						.filter((article) => {
							return article.category === 'footer2';
						})
						.map((item) => (
							<HomeMainCard key={item.id} articleId={item.id} imgUrl={item.img} title={item.title} description={item.description} author={item.author} />
						))}
				</div>

				<div className="home__left">
					{contextData
						.filter((article) => {
							return article.category === 'footer3';
						})
						.map((item) => (
							<HomeMainCard key={item.id} articleId={item.id} imgUrl={item.img} title={item.title} description={item.description} author={item.author} />
						))}
				</div>
			</div>
		</>
	);
}
