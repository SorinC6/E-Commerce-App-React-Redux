import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Logo from "./Logo";
import LogoEnd from "./LogoEnd";
import phone from "../../assets/smartphone.png";
import { Link } from "react-router-dom";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    document.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    });
  }, []);

  return (
    <HeaderContainer>
      <LogoWrapper>
        <Logo scrolled={scrolled} />
      </LogoWrapper>

      <LogoWrapper>
        <Link to="/">
          <img src={phone} alt="logo" className="imgg" width={20} />
        </Link>
      </LogoWrapper>

      <LogoWrapper>
        <LogoEnd scrolled={scrolled} />
      </LogoWrapper>
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.header`
  position: fixed;
  z-index: 100;
  width: 100%;
  top: 0;
  width: 100;
  height: 65;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: rgba(111, 155, 155, 0.80);
  img {
    width: 50px;
  }
`;

const LogoWrapper = styled.div`
  /* width: 30%; */
`;
