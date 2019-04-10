import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";

const Basket = props => {
  const { phonesInBasket } = props;
  console.log(props.phonesInBasket);
  return (
    <Wrapper>
      <h4>Basket cart</h4>
      {
        !phonesInBasket.length && <div>No Products</div>
      }
      {phonesInBasket.map(phone => {
        return <p>{phone.name}</p>;
      })}
    </Wrapper>
  );
};

const mapStateToProps = state => {
  return {
    phonesInBasket: state.basket.phonesInBasket
  };
};

export default connect(
  mapStateToProps,
  {}
)(Basket);

const Wrapper = styled.div`
  padding-top: 100px;
`;
