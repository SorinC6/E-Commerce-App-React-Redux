import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import styled from 'styled-components';

//import { getTotalBasketCount, getTotalBasketPrice } from '../selectors/selectors';

const BasketCart = (props) => {
	console.log(props.totalPrice);

	return (
		<BasketWrapper>
			<div className="dropdown">
				<Link to="/basket" className="btn-basket">
					<i className="fa fa-fa-shopping-cart" />
					<span>
						{props.totalBasketCount} Items - ${props.totalPrice}
					</span>
				</Link>
			</div>
		</BasketWrapper>
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

const BasketWrapper = styled.div`
	position: fixed;
	top: 20;
	left: 4%;
	border: 1px solid black;
	padding: 15px;
	text-align: center;
	width: 200px;
	margin: 20px auto;
	font-size: 19px;
	background: lightcoral;
	font-weight: bold;

	a {
		color: black;
	}
`;
