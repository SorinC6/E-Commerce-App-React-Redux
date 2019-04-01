import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPhoneById } from '../../store/actions/index';
import { withRouter } from 'react-router-dom';

class Phone extends Component {
	componentDidMount() {
		this.props.fetchPhoneById(this.props.match.params.id);
	}
	render() {
		//console.log(this.props);
		return (
			<div>
				<p>Phone</p>
			</div>
		);
	}
}

const mapDIspatchToProps = {
	fetchPhoneById
};

const mapStateToProps = (state) => {
	return {
		phone: state.phones.phone
	};
};

export default connect(mapStateToProps, mapDIspatchToProps)(withRouter(Phone));
