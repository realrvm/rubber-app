import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import logo from "../assets/svgs/logo.svg";
import { colors } from "../utils/styles";

const Logo = () => (
  <StyledLink to={`/`}>
    <LogoWrapper>
      <img src={logo} alt="" w={75} />
      <LogoContent>
        <LogoTitle>SALNIK</LogoTitle>
        <LogoSubtitle>качество для бизнеса</LogoSubtitle>
      </LogoContent>
    </LogoWrapper>
  </StyledLink>
);

export default Logo;

/** Logo styled components **/
const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const LogoContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 5px;
`;

const LogoTitle = styled.h1`
  font-size: 32px;
  line-height: 129%;
  padding-top: 5px;
  letter-spacing: 0.02em;
  color: ${colors.white};
`;

const LogoSubtitle = styled.p`
  margin: 0;
  transform: translateY(-5px);
  font-size: 11.13px;
  color: ${colors.white};
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;
