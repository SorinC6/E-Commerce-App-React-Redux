import React from "react";
import styled from "styled-components";
import logoImg from "../../assets/shop.png";

const Logo = ({ scrolled }) => {
  return (
    <Wrapper
      to="/"
      style={{
        fontFamily: "Sniglet, cursive",
        textDecoration: "none",
        color: "#000",
        display: "flex",
        alignItems: "center"
      }}
    >
      <img src={logoImg} alt="logo" className="imgg" />
      <Title scrolled={scrolled}>Mobile World</Title>
    </Wrapper>
  );
};

export default Logo;

const Wrapper = styled.div`
  .imgg {
    width: 50px;
    margin-left: 30px;
  }
`;

const Title = styled.h1`
  opacity: ${({ scrolled }) => (scrolled ? 0 : 1)};
  transition: opacity 600ms;
  margin-left: 30px;
`;
