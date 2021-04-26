import React from "react";
import styled from "styled-components";

import { mq, colors } from "../utils/styles";
import { ContentSection } from "../components";
import maz from "../assets/adv/maz.png";
import gaz from "../assets/adv/gaz.png";
import kamaz from "../assets/adv/kamaz.png";
import lada from "../assets/adv/lada.png";
import uaz from "../assets/adv/uaz.png";

const Manufacturers = ({ title }) => (
  <ManufacturersWrapper>
    <ContentSection>
      <ManufacturersContainer>
        <ManufacturersTitle>{title}</ManufacturersTitle>
        <ManufacturersLogo>
          <img src={kamaz} alt="" />
          <img src={maz} alt="" />
          <img src={lada} alt="" />
          <img src={uaz} alt="" />
          <img src={gaz} alt="" />
        </ManufacturersLogo>
      </ManufacturersContainer>
    </ContentSection>
  </ManufacturersWrapper>
);

export default Manufacturers;

/** Manufacturers styled components **/
const ManufacturersWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  background-color: ${colors.backgroundAdv};
`;

const ManufacturersContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const ManufacturersTitle = styled.h1`
  text-align: center;
  font-size: 32px;
  font-weight: 700;
  margin-bottom: 50px;
  margin-top: 80px;
  ${mq[1]} {
    margin-top: 70px;
    margin-bottom: 0;
  }
`;

const ManufacturersLogo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  min-height: 300px;
  img {
    width: 200px;
    margin-bottom: 40px;
  }
  ${mq[1]} {
    flex-direction: row;
    img {
      width: 120px;
      margin-bottom: 0;
    }
  }
  ${mq[2]} {
    img {
      width: 200px;
    }
  }
`;
