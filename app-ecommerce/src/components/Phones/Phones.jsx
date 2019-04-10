import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPhones, loadMorePhones, addPhoneToBasket, searchPhone, fetchCategories } from '../../store/actions/index';
import { Link } from 'react-router-dom';
import './Phones.css';

class Phones extends Component {
	componentDidMount() {
		this.props.fetchPhones();
		this.props.searchPhone();
		this.props.fetchCategories();
	}

	renderPhone(phone, index) {
		console.log(this.props.searchResult);
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
						<button onClick={() => addPhoneToBasket(phone.id, phone.price, phone)}>Buy Now</button>
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
				<div className="cards">
					{this.props.searchResult.length ? (
						this.props.searchResult.map((phone) => this.renderPhone(phone))
					) : (
						this.props.phonesData.map((phone, idx) => this.renderPhone(phone, idx))
					)}
				</div>
				<div className="load-more">
					<button onClick={this.props.loadMorePhones}>Load More Products</button>
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		phonesData: state.phones.phones,
		searchResult: state.phones.searchResult
	};
};
const mapDispatchToProps = {
	fetchPhones,
	loadMorePhones,
	addPhoneToBasket,
	searchPhone,
	fetchCategories
};

export default connect(mapStateToProps, mapDispatchToProps)(Phones);
