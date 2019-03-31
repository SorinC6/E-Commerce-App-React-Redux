import React from 'react';
import './Layout.css';

const Layout = (props) => {
	return (
		<div className="wiew-container">
			<div className="container">
				<div className="sidebar">SideBar</div>
				<div className="phones-view">{props.children}</div>
			</div>
		</div>
	);
};

export default Layout;
