import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPhoneById, addPhoneToBasket } from '../../store/actions/index';
import { withRouter, Link } from 'react-router-dom';
import PhoneCard from './PhoneCard';
import styled from 'styled-components';
import BasketCard from '../BasketCart/BarketCart';

class Phone extends Component {
	componentDidMount() {
		this.props.fetchPhoneById(this.props.match.params.id);
	}
	render() {
		const { phone } = this.props;
		const p = phone[0];
		return (
			<Wrapper>
				<div className="basket-t">{phone.length && <PhoneCard phone={phone} />}</div>
				<div className="basket-p">
					<p>Quick shop</p>
					<BasketCard />
					{p && (
						<WrapperQick>
							<h1>{p.name}</h1>
							<h2>$ {Number(p.price)}</h2>
							<button>
								<Link to="/">Back to store</Link>
							</button>

							<button onClick={() => this.props.addPhoneToBasket(this.props.match.params.id, p.price)}>
								Add to cart
							</button>
						</WrapperQick>
					)}
				</div>
			</Wrapper>
		);
	}
}

const mapDIspatchToProps = {
	fetchPhoneById,
	addPhoneToBasket
};

const mapStateToProps = (state) => {
	return {
		phone: state.phones.phone
	};
};

export default connect(mapStateToProps, mapDIspatchToProps)(withRouter(Phone));

const Wrapper = styled.div`
	display: flex;
	justify-content: space-evenly;

	.basket-t {
		width: 55%;
		position: relative;
	}

	.basket-p {
		margin-top: 40px;
		width: 200px;
	}
`;

const WrapperQick = styled.div`
	display: flex;
	flex-direction: column;

	button {
		padding: 10px;
		margin-bottom: 20px;
		border-radius: 6px;
		color: blanchedalmond;
		background: lightskyblue;
		font-size: 17px;
		outline: none;
		&:hover {
			background: lightpink;
		}
	}
`;
