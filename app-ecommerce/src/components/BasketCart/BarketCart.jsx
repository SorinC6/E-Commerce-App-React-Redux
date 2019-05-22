import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import styled from "styled-components";

//import { getTotalBasketCount, getTotalBasketPrice } from '../selectors/selectors';

const BasketCart = props => {
  //console.log(props.totalPrice);

  return (
    <BasketWrapper>
      <div className="dropdown">
        <Link to="/basket" className="btn-basket">
          <i className="fas fa-cart-arrow-down" />
          <span>
            {props.totalBasketCount} Items - ${props.totalPrice}
          </span>
        </Link>
      </div>
    </BasketWrapper>
  );
};

const mapStateToProps = state => {
  return {
    //totalBasketCount: getTotalBasketCount(state),
    basket: state.basket.basket,
    totalBasketCount: state.basket.phonesInBasket.length,
    totalPrice: state.basket.totalPrice
  };
};

export default connect(
  mapStateToProps,
  {}
)(BasketCart);

const BasketWrapper = styled.div`
  position: sticky;
  top: 20;
  left: 4%;
  border: 1px solid black;
  padding: 15px;
  text-align: center;
  max-width: 200px;
  margin: 0 auto;
  margin-top: 25px;
  font-size: 19px;
  background: lightcoral;
  font-weight: bold;
  i {
    margin-right: 20px;
  }
  a {
    color: black;
  }

  span {
    @media (max-width: 400px) {
      font-size: 14px;
    }
  }

  a {
    @media (max-width: 700px) {
      display: flex;
      flex-direction: column;
    }
  }
`;
