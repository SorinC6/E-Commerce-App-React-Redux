import React from 'react';
import './Layout.css';
import SideBar from '../SideBar/SideBar';
import Phones from '../Phones/Phones';

const Layout = (props) => {
	return (
		<div className="wiew-container">
			<div className="container">
				<div className="sidebar">
					<SideBar />
				</div>
				<div className="phones-view">
					<Phones />
				</div>
			</div>
		</div>
	);
};

export default Layout;
