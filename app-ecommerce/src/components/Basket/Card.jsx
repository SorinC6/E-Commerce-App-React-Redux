import React from "react";
import styled from "styled-components";

const Card = ({ phone }) => {
  return (
    <Wrapper>
      <img src={phone.image} alt="" />
      <p className="name">{phone.name}</p>
      <p className="price">{phone.price} $</p>
      <i className="fas fa-trash-alt" />
    </Wrapper>
  );
};

export default Card;

const Wrapper = styled.div`
  max-width: 600px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  img {
    width: 50px;
    height: 50px;
    padding: 20px 30px;
  }

  .name {
    padding: 20px 30px;
  }
  .price {
    padding: 20px 30px;
  }
  i {
    padding: 20px 30px;
  }
`;
