import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import Card from "./Card";

const Basket = props => {
  const { phonesInBasket, totalPrice } = props;
  console.log(props.phonesInBasket);
  return (
    <Wrapper>
      <h4>Basket cart</h4>
      <ListWrapper>
        {!phonesInBasket.length && <div>No Products</div>}
        {phonesInBasket.map(phone => {
          return <Card phone={phone} totalPrice={totalPrice} />;
        })}
        <h4>Total Price: {totalPrice}</h4>
      </ListWrapper>
    </Wrapper>
  );
};

const mapStateToProps = state => {
  return {
    phonesInBasket: state.basket.phonesInBasket,
    totalPrice: state.basket.totalPrice
  };
};

export default connect(
  mapStateToProps,
  {}
)(Basket);

const Wrapper = styled.div`
  padding-top: 100px;
  display: flex;
  justify-content: center;
`;

const ListWrapper = styled.div`
  margin-top: 80px;
`;
