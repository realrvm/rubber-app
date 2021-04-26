import React from "react";
import styled from "styled-components";

import { mq, colors } from "../utils/styles";

const ChoiceCard = ({ title, img, descr }) => (
  <ChoiceCardWrapper>
    <ChoiceCardImageContainer>
      <img src={img} alt="" />
    </ChoiceCardImageContainer>
    <ChoiceCardTitle>{title}</ChoiceCardTitle>
    <p>{descr}</p>
  </ChoiceCardWrapper>
);

export default ChoiceCard;

/** ChoiceCard styled components **/
const ChoiceCardWrapper = styled.div`
  width: 96%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 30px;
  p {
    color: ${colors.white};
    text-align: center;
    width: 70%;
  }
  ${mq[1]} {
    p {
      color: ${colors.secondary};
    }
  }
  ${mq[2]} {
    margin-bottom: 0;
    max-width: 250px;
    p {
      width: 100%;
    }
  }
`;

const ChoiceCardImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  height: 150px;
`;

const ChoiceCardTitle = styled.h1`
  text-align: center;
  font-weight: 700;
  font-size: 22px;
  color: ${colors.white};
  margin: 20px 0;
  ${mq[1]} {
    color: ${colors.text};
  }
`;
