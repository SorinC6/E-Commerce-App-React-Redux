import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import Card from "./Card";

const Basket = props => {
  const { phonesInBasket, totalPrice } = props;
  return (
    <Wrapper>
      <h4>Basket cart</h4>
      <ListWrapper>
        {!phonesInBasket.length && <div>No Products</div>}
        {phonesInBasket.map(phone => {
          return <Card key={phone.id} phone={phone} totalPrice={totalPrice} />;
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
  flex-direction: column;
  align-items: center;

  h4 {
    text-align: center;
  }
`;

const ListWrapper = styled.div`
  border: 1px dashed #ddd;
  box-shadow: 0 0 0 3px #fff, 0 0 0 5px #ddd, 0 0 0 10px #fff, 0 0 2px 10px #eee;
  width: 50%;
  padding: 20px;
  margin-top: 20px;

  @media (max-width: 700px) {
    width: 80%;
  }
`;
