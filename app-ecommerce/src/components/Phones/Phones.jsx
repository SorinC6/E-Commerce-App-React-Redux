import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPhones } from '../../store/actions/index';
import { Link } from 'react-router-dom';
import './Phones.css';

class Phones extends Component {
	componentDidMount() {
		this.props.fetchPhones();
	}

	renderPhone(phone, index) {
		const shortDescription = phone.description;

		return (
			<div className="phone-card" key={index}>
				<div className="thumbnail">
					<img src={phone.image} alt={phone.name} />
				</div>
				<div>
					<div className="name-price">
						<h4>
							<Link to={`/phone/${phone.id}`}>{phone.name}</Link>
						</h4>
						<h4>price: {phone.price} </h4>
					</div>

					<p className="description">{shortDescription}</p>
					<div className="btn-more">
						<button>Buy Now</button>
						<Link to={`/phone/${phone.id}`}>More Info</Link>
					</div>
				</div>
			</div>
		);
	}

	render() {
		//const { phones } = this.props;
		return <div className="cards">{this.props.phonesData.map((phone, idx) => this.renderPhone(phone, idx))}</div>;
	}
}

const mapStateToProps = (state) => {
	return {
		phonesData: state.phones.phones
	};
};
const mapDispatchToProps = {
	fetchPhones
};

export default connect(mapStateToProps, mapDispatchToProps)(Phones);
