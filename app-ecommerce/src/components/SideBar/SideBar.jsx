import React from 'react';
import BasketCart from '../BasketCart/BarketCart';
import Search from '../Search/Search';

const SideBar = (props) => {
	return (
		<div>
			<BasketCart />
			<Search />
		</div>
	);
};

export default SideBar;
