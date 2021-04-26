import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

import { colors } from "../utils/styles";
import { menuList } from "../utils/store";

const HeaderMenu = () => (
  <HeaderWrapper>
    <ul>
      {menuList.map((item) => {
        return (
          <StyledLink
            activeStyle={{ color: colors.accent }}
            key={item.id}
            to={item.link}
          >
            <li>{item.menuItem}</li>
          </StyledLink>
        );
      })}
    </ul>
  </HeaderWrapper>
);

export default HeaderMenu;

/** HeaderMenu styled components **/
const HeaderWrapper = styled.div`
  margin-right: 20px;
  ul {
    display: flex;
    justify-content: space-between;
    align-items: center;
    list-style: none;
  }

  li {
    font-size: 16px;
    font-weight: 700;
    cursor: pointer;
    transition: color ease 0.2s;
  }
`;

const StyledLink = styled(NavLink)`
  & + & {
    margin-left: 30px;
  }
  text-decoration: none;
  color: ${colors.white};
  &:hover {
    color: ${colors.accent};
  }
`;
