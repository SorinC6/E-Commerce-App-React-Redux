import React from "react";
import styled from "styled-components";
import card from "../../assets/card.png";

const LogoEnd = ({ scrolled }) => {
  return (
    <Wrapper
      to="/"
      style={{
        fontFamily: "Sniglet,cursive",
        textDecoration: "none",
        color: "#000",
        display: "flex",
        alignItems: "center"
      }}
    >
      <img src={card} alt="logo" className="imgg" width={20} />
      <Title scrolled={scrolled}>Happy Shopping</Title>
    </Wrapper>
  );
};

export default LogoEnd;

const Wrapper = styled.div`
  .imgg {
    width: 50px;
  }
`;

const Title = styled.h1`
  opacity: ${({ scrolled }) => (scrolled ? 1 : 0)};
  transition: opacity 600ms;
  margin-left: 20px;
  margin-right: 20px;
  font-size:25px;
`;
