import React from 'react';
import BasketCart from '../BasketCart/BarketCart';
import Search from '../Search/Search';
import Categories from '../Categories/Categories';

const SideBar = (props) => {
	return (
		<div>
			<BasketCart />
			<Search />
			<Categories />
		</div>
	);
};

export default SideBar;
