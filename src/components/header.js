import React from "react";
import styled from "styled-components";

import { Logo, HeaderMenu } from "../components";
import { mq, colors, widths } from "../utils/styles";
import useWindowWidth from "../utils/useWindowWidth";
import phoneMenu from "../assets/svgs/phone-menu.svg";

const Header = ({ toggleModal = (f) => f }) => {
  const { width } = useWindowWidth();
  const { desktopPageWidth } = widths;

  return (
    <HeaderWrapper>
      <HeaderContainer>
        <Logo />
        {width > desktopPageWidth ? (
          <>
            <HeaderMenu />
            <MenuPhone>
              <img src={phoneMenu} alt="" />
              <span>+38 (177) 555 34 44</span>
            </MenuPhone>
            <MenuButton>Обратный звонок</MenuButton>
          </>
        ) : (
          <ToggleModleButtton onClick={toggleModal}>
            <Toggle>
              <ToggleUp></ToggleUp>
              <ToggleBottom></ToggleBottom>
            </Toggle>
          </ToggleModleButtton>
        )}
      </HeaderContainer>
    </HeaderWrapper>
  );
};

export default Header;

/** Header styled components **/
const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 140px;
  background-color: transparent;
  position: absolute;
  top: 0;
  left: 0;
  ${mq[1]} {
    background-color: ${colors.backgroundHeader};
    position: static;
  }
`;

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: ${widths.desktopPageWidth}px;
  width: 100%;
  padding: 0 20px;
`;

const MenuPhone = styled.div`
  display: flex;
  align-items: center;
  span {
    margin-left: 10px;
    color: ${colors.white};
    font-weight: 700;
    letter-spacing: 0.02em;
  }
`;

const MenuButton = styled.button`
  width: 198px;
  height: 44px;
  background: transparent;
  color: ${colors.accent};
  font-size: 16px;
  letter-spacing: 0.02em;
  border: solid 1px ${colors.accent};
  border-radius: 20px;
  outline: none;
  cursor: pointer;
  transition: background color ease 0.2s;
  &:hover {
    background: ${colors.accent};
    color: ${colors.white};
  }
`;

const ToggleModleButtton = styled.button`
  border: 0;
  background-color: transparent;
  outline: none;
`;

const Toggle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

const ToggleUp = styled.div`
  width: 32px;
  height: 3px;
  background-color: ${colors.white};
`;

const ToggleBottom = styled(ToggleUp)`
  width: 16px;
  margin-top: 10px;
`;
