import React, { Component } from 'react';
import './App.css';
import Layout from './components/Layout/Layout';
import Phones from './components/Phones/Phones';
import { Route } from 'react-router-dom';

class App extends Component {
	render() {
		return (
			<Layout>
				<Route path="/" component={Phones} />
			</Layout>
		);
	}
}

export default App;
