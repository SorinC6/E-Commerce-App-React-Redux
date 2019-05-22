import React from "react";
import styled from "styled-components";

const Card = ({ phone }) => {
  return (
    <Wrapper>
      <img src={phone.image} alt="imagine" />
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
  border-bottom: 1px dashed #046ca3;
  box-shadow: inset 0 -1px 0 0 #046ca3, inset 0 1px 0 0 #046ca3,
    0 1px 0 0 #046ca3, 0 -1px 0 0 #046ca3;

  @media (max-width: 700px) {
    max-width: 90%;
  }

  img {
    width: 50px;
    height: 50px;
    padding: 20px 30px;
  }

  .name {
    padding: 20px 30px;

    @media (max-width: 700px) {
      padding: 5px 15px;
    }
  }
  .price {
    padding: 20px 30px;
    @media (max-width: 700px) {
      padding: 5px 15px;
    }
  }
  i {
    padding: 20px 30px;
    @media (max-width: 700px) {
      padding: 5px 15px;
    }
  }
`;
