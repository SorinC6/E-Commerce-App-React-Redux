import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPhones } from '../../store/actions/index';

class Phones extends Component {
	componentDidMount() {
		this.props.fetchPhones();
	}

	render() {
		return (
			<div>
				<p>Phones</p>
			</div>
		);
	}
}

const mapDispatchToProps = {
	fetchPhones
};

export default connect(null, mapDispatchToProps)(Phones);
