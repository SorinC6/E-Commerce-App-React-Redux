import React from "react";
import styled from "styled-components";

const Card = ({ phone }) => {
  return (
    <Wrapper>
      <img src={phone.image} alt="" />
      <p>{phone.name}</p>
      <p>{phone.price}</p>
      <i className="fas fa-trash-alt" />
    </Wrapper>
  );
};

export default Card;

const Wrapper = styled.div`
  display: flex;
`;
