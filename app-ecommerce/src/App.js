import React, { Component } from 'react';
import './App.css';
import Layout from './components/Layout/Layout';
import Phones from './components/Phones/Phones';
import { Route } from 'react-router-dom';
import Phone from './components/Phone/Phone';

class App extends Component {
	render() {
		return (
			<div>
				<Route exact path="/" component={Layout} />
				<Route path="/shop" component={Phones} />
				<Route path="/phone/:id" component={Phone} />
			</div>
		);
	}
}

export default App;
