import React from "react";
import styled from "styled-components";
import Modal from "styled-react-modal";
import { NavLink } from "react-router-dom";

import { mq, colors } from "../utils/styles";
import { menuList } from "../utils/store";
import cross from "../assets/svgs/cross.svg";
import phoneMenu from "../assets/svgs/phone.svg";

const ModalMenu = ({ toggleModal, isOpen }) => {
  return (
    <>
      <StyledModal
        isOpen={isOpen}
        onBackgroundClick={toggleModal}
        onEscapeKeydown={toggleModal}
      >
        <ModalContainer>
          <ModalCloseButton onClick={toggleModal}>
            <img src={cross} alt="" />
          </ModalCloseButton>
          <ModalMenuContainer>
            <ul>
              {menuList.map((item) => {
                const { id, menuItem, link } = item;
                return (
                  <StyledLink
                    activeStyle={{ color: colors.accent }}
                    key={id}
                    to={link}
                  >
                    <li>{menuItem}</li>
                  </StyledLink>
                );
              })}
            </ul>
            <MenuPhone>
              <img src={phoneMenu} alt="" />
              <span>+38 (177) 555 34 44</span>
            </MenuPhone>
            <MenuButton>Обратный звонок</MenuButton>
          </ModalMenuContainer>
        </ModalContainer>
      </StyledModal>
    </>
  );
};

export default ModalMenu;

/** ModalMenu styled components **/
const StyledModal = Modal.styled`
    width: 310px;
    height: 450px;
    transform: translateY(-90px);
    align-self: flex-end;
    background-color: ${colors.white};
    border-radius: 20px;
   ${mq[1]} {
    width: 440px;
   }
`;

const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 30px;
  justify-content: space-between;
  ul {
    list-style: none;
  }
  li {
    margin-top: 30px;
    margin-right: 40px;
    ${mq[1]} {
      margin-right: 20px;
    }
  }
`;

const ModalCloseButton = styled.button`
  align-self: flex-end;
  border: 0;
  outline: none;
  background-color: transparent;
`;

const StyledLink = styled(NavLink)`
  text-decoration: none;
  font-weight: 700;
  font-size: 18px;
  text-align: center;
  cursor: pointer;
  transition: color ease 0.2s;
  color: ${colors.text};
  &:hover {
    color: ${colors.accent};
  }
  ${mq[1]} {
    font-size: 22px;
  }
`;

const ModalMenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  transform: translateY(-20px);
  padding-bottom: 50px;
`;

const MenuPhone = styled.div`
  display: flex;
  align-items: center;
  span {
    margin-left: 10px;
    color: ${colors.text};
    font-weight: 700;
    letter-spacing: 0.02em;
  }
`;

const MenuButton = styled.button`
  width: 198px;
  height: 44px;
  background: ${colors.accent};
  color: ${colors.white};
  font-size: 16px;
  letter-spacing: 0.02em;
  border-radius: 20px;
  border: 0;
  outline: none;
  cursor: pointer;
  transition: background color ease 0.2s;
  &:hover {
    background: transparent;
    color: ${colors.accent};
    border: solid 1px ${colors.accent};
  }
`;
