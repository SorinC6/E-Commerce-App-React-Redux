import React from "react";
import styled from "styled-components";
import logoImg from "../../assets/shop.png";
import { Link } from "react-router-dom";

const Logo = ({ scrolled }) => {
  return (
    <Wrapper
      to="/basket"
      style={{
        fontFamily: "Sniglet, cursive",
        textDecoration: "none",
        color: "#000",
        display: "flex",
        alignItems: "center",
        cursor: "pointer"
      }}
    >
      <img src={logoImg} alt="logo" className="imgg" />
      <Title scrolled={scrolled}>My Cart</Title>
    </Wrapper>
  );
};

export default Logo;

const Wrapper = styled(Link)`
  .imgg {
    max-width: 50px;
    margin-left: 30px;
  }
`;

const Title = styled.h1`
  margin-left: 40px;
  opacity: ${({ scrolled }) => (scrolled ? 0 : 1)};
  transition: color 400ms;
  transition: opacity 600ms;
  :hover {
    color: #ff0080;
  }

  @media (max-width: 650px) {
    font-size: 23px;
  }
`;
