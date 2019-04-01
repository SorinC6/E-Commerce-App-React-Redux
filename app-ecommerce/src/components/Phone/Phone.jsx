import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPhoneById } from '../../store/actions/index';
import { withRouter } from 'react-router-dom';
import PhoneCard from './PhoneCard';

class Phone extends Component {
	componentDidMount() {
		this.props.fetchPhoneById(this.props.match.params.id);
	}
	render() {
		const { phone } = this.props;
		return (
			<div className="card-view">
			{
				phone.length && <PhoneCard phone={phone} />
			}
				
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
