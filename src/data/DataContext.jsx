import React, { createContext, useState } from 'react';

export const context = createContext();

const DataContext = (props) => {
	const [data, setData] = useState([
		{
			id: 1,
			title: 'Title-1',
			img: '../data/logo.svg',
			cat: 'Bollywood',
			des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure corporis dolore quod provident nostrum quasi iusto',
		},
		{
			id: 2,
			title: 'Title-2',
			img: '../data/logo.svg',
			cat: 'Bollywood',
			des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure corporis dolore quod provident nostrum quasi iusto',
		},
		{
			id: 3,
			title: 'Title-3',
			img: '../data/logo.svg',
			cat: 'Bollywood',
			des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure corporis dolore quod provident nostrum quasi iusto',
		},
		{
			id: 4,
			title: 'Title-4',
			img: '../data/logo.svg',
			cat: 'Bollywood',
			des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure corporis dolore quod provident nostrum quasi iusto',
		},
		{
			id: 5,
			title: 'Title-5',
			img: '../data/logo.svg',
			cat: 'Bollywood',
			des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure corporis dolore quod provident nostrum quasi iusto',
		},
		{
			id: 6,
			title: 'Title-6',
			img: '../data/logo.svg',
			cat: 'Bollywood',
			des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure corporis dolore quod provident nostrum quasi iusto',
		},
		{
			id: 7,
			title: 'Title-7',
			img: '../data/logo.svg',
			cat: 'Bollywood',
			des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure corporis dolore quod provident nostrum quasi iusto',
		},
		{
			id: 8,
			title: 'Title-8',
			img: '../data/logo.svg',
			cat: 'Bollywood',
			des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure corporis dolore quod provident nostrum quasi iusto',
		},
		{
			id: 9,
			title: 'Title-9',
			img: '../data/logo.svg',
			cat: 'Bollywood',
			des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure corporis dolore quod provident nostrum quasi iusto',
		},
		{
			id: 10,
			title: 'Title-10',
			img: '../data/logo.svg',
			cat: 'Bollywood',
			des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure corporis dolore quod provident nostrum quasi iusto',
		},
		{
			id: 11,
			title: 'Title-11',
			img: '../data/logo.svg',
			cat: 'Hollywood',
			des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure corporis dolore quod provident nostrum quasi iusto',
		},
		{
			id: 12,
			title: 'Title-12',
			img: '../data/logo.svg',
			cat: 'Hollywood',
			des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure corporis dolore quod provident nostrum quasi iusto',
		},
		{
			id: 13,
			title: 'Title-13',
			img: '../data/logo.svg',
			cat: 'Hollywood',
			des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure corporis dolore quod provident nostrum quasi iusto',
		},
		{
			id: 14,
			title: 'Title-14',
			img: '../data/logo.svg',
			cat: 'Hollywood',
			des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure corporis dolore quod provident nostrum quasi iusto',
		},
		{
			id: 15,
			title: 'Title-15',
			img: '../data/logo.svg',
			cat: 'Hollywood',
			des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure corporis dolore quod provident nostrum quasi iusto',
		},
		{
			id: 16,
			title: 'Title-16',
			img: '../data/logo.svg',
			cat: 'Hollywood',
			des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure corporis dolore quod provident nostrum quasi iusto',
		},
		{
			id: 17,
			title: 'Title-17',
			img: '../data/logo.svg',
			cat: 'Hollywood',
			des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure corporis dolore quod provident nostrum quasi iusto',
		},
		{
			id: 18,
			title: 'Title-18',
			img: '../data/logo.svg',
			cat: 'Hollywood',
			des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure corporis dolore quod provident nostrum quasi iusto',
		},
		{
			id: 19,
			title: 'Title-19',
			img: '../data/logo.svg',
			cat: 'Hollywood',
			des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure corporis dolore quod provident nostrum quasi iusto',
		},
		{
			id: 20,
			title: 'Title-20',
			img: '../data/logo.svg',
			cat: 'Hollywood',
			des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure corporis dolore quod provident nostrum quasi iusto',
		},

		{
			id: 21,
			title: 'Title-21',
			img: '../data/logo.svg',
			cat: 'Technology',
			des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure corporis dolore quod provident nostrum quasi iusto',
		},
		{
			id: 22,
			title: 'Title-22',
			img: '../data/logo.svg',
			cat: 'Technology',
			des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure corporis dolore quod provident nostrum quasi iusto',
		},
		{
			id: 23,
			title: 'Title-23',
			img: '../data/logo.svg',
			cat: 'Technology',
			des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure corporis dolore quod provident nostrum quasi iusto',
		},
		{
			id: 24,
			title: 'Title-24',
			img: '../data/logo.svg',
			cat: 'Technology',
			des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure corporis dolore quod provident nostrum quasi iusto',
		},
		{
			id: 25,
			title: 'Title-25',
			img: '../data/logo.svg',
			cat: 'Technology',
			des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure corporis dolore quod provident nostrum quasi iusto',
		},
		{
			id: 26,
			title: 'Title-26',
			img: '../data/logo.svg',
			cat: 'Technology',
			des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure corporis dolore quod provident nostrum quasi iusto',
		},
		{
			id: 27,
			title: 'Title-27',
			img: '../data/logo.svg',
			cat: 'Technology',
			des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure corporis dolore quod provident nostrum quasi iusto',
		},
		{
			id: 28,
			title: 'Title-28',
			img: '../data/logo.svg',
			cat: 'Technology',
			des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure corporis dolore quod provident nostrum quasi iusto',
		},
		{
			id: 29,
			title: 'Title-29',
			img: '../data/logo.svg',
			cat: 'Technology',
			des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure corporis dolore quod provident nostrum quasi iusto',
		},
		{
			id: 30,
			title: 'Title-30',
			img: '../data/logo.svg',
			cat: 'Technology',
			des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure corporis dolore quod provident nostrum quasi iusto',
		},
		{
			id: 31,
			title: 'Title-31',
			img: '../data/logo.svg',
			cat: 'Food',
			des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure corporis dolore quod provident nostrum quasi iusto',
		},
		{
			id: 32,
			title: 'Title-32',
			img: '../data/logo.svg',
			cat: 'Food',
			des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure corporis dolore quod provident nostrum quasi iusto',
		},
		{
			id: 33,
			title: 'Title-33',
			img: '../data/logo.svg',
			cat: 'Food',
			des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure corporis dolore quod provident nostrum quasi iusto',
		},
		{
			id: 34,
			title: 'Title-34',
			img: '../data/logo.svg',
			cat: 'Food',
			des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure corporis dolore quod provident nostrum quasi iusto',
		},
		{
			id: 35,
			title: 'Title-35',
			img: '../data/logo.svg',
			cat: 'Food',
			des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure corporis dolore quod provident nostrum quasi iusto',
		},
		{
			id: 36,
			title: 'Title-36',
			img: '../data/logo.svg',
			cat: 'Food',
			des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure corporis dolore quod provident nostrum quasi iusto',
		},
		{
			id: 37,
			title: 'Title-37',
			img: '../data/logo.svg',
			cat: 'Food',
			des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure corporis dolore quod provident nostrum quasi iusto',
		},
		{
			id: 38,
			title: 'Title-38',
			img: '../data/logo.svg',
			cat: 'Food',
			des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure corporis dolore quod provident nostrum quasi iusto',
		},
		{
			id: 39,
			title: 'Title-39',
			img: '../data/logo.svg',
			cat: 'Food',
			des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure corporis dolore quod provident nostrum quasi iusto',
		},
		{
			id: 40,
			title: 'Title-40',
			img: '../data/logo.svg',
			cat: 'Food',
			des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure corporis dolore quod provident nostrum quasi iusto',
		},
	]);
	return (
		<>
			<context.Provider value={[data, setData]}>{props.children}</context.Provider>
			{/* <div>
				<img src="../data/logo.svg" alt="" />
			</div> */}
		</>
	);
};

export default DataContext;
