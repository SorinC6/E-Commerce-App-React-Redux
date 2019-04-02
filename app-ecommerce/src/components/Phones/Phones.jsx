import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPhones, loadMorePhones, addPhoneToBasket } from '../../store/actions/index';
import { Link } from 'react-router-dom';
import './Phones.css';

class Phones extends Component {
	componentDidMount() {
		this.props.fetchPhones();
	}

	renderPhone(phone, index) {
		const shortDescription = phone.description;
		const { addPhoneToBasket } = this.props;
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
						<h4>price: {phone.price} $ </h4>
					</div>

					<p className="description">{shortDescription}</p>
					<div className="btn-more">
						<button onClick={() => addPhoneToBasket(phone.id, phone.price)}>Buy Now</button>
						<Link to={`/phone/${phone.id}`}>More Info</Link>
					</div>
				</div>
			</div>
		);
	}

	render() {
		//const { phones } = this.props;
		return (
			<div>
				<div className="cards">{this.props.phonesData.map((phone, idx) => this.renderPhone(phone, idx))}</div>
				<div className="load-more">
					<button onClick={this.props.loadMorePhones}>Load More Products</button>
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		phonesData: state.phones.phones
	};
};
const mapDispatchToProps = {
	fetchPhones,
	loadMorePhones,
	addPhoneToBasket
};

export default connect(mapStateToProps, mapDispatchToProps)(Phones);
