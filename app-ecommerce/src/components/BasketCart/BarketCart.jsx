import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

//import { getTotalBasketCount, getTotalBasketPrice } from '../selectors/selectors';

const BasketCart = (props) => {
	console.log(props.totalPrice);

	return (
		<div className="cart">
			<div className="dropdown">
				<Link to="/basket" className="btn-basket">
					<i className="fa fa-fa-shopping-cart" />
					<span>
						{props.totalBasketCount} Items - ${props.totalPrice}
					</span>
				</Link>
			</div>
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		//totalBasketCount: getTotalBasketCount(state),
		basket: state.basket.basket,
		totalBasketCount: state.basket.basket.length,
		totalPrice: state.basket.totalPrice
	};
};

export default connect(mapStateToProps, {})(BasketCart);
