import React, { Component } from 'react';
import './App.css';
import Layout from './components/Layout/Layout';
import Phones from './components/Phones/Phones';
import { Route } from 'react-router-dom';

class App extends Component {
	render() {
		return (
			<div>
				<Layout>
					<Route path="/" component={Phones} />
				</Layout>
				<Route path="/phones/:id"  component={Phone}/>
			</div>
		);
	}
}

export default App;
