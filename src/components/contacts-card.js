import React from "react";
import styled from "styled-components";

import { mq, colors } from "../utils/styles";

const ContactCard = ({ img, title, descr }) => (
  <ContactCardWrapper>
    <ContactCardUp>
      <img src={img} alt="" />
      <span>{descr}</span>
    </ContactCardUp>
    <ContactCardBottom>{title}</ContactCardBottom>
  </ContactCardWrapper>
);

export default ContactCard;

/** ContactCard styled components **/
const ContactCardWrapper = styled.div`
  display: flex;
  height: 70px;
  flex-direction: column;
  justify-content: center;
  ${mq[1]} {
    height: 110px;
  }
`;

const ContactCardBottom = styled.h1`
  font-weight: 700;
  font-size: 20px;
  color: ${colors.text};
`;

const ContactCardUp = styled.div`
  display: flex;
  align-items: center;
  span {
    font-size: 16px;
    color: #828282;
    margin-left: 10px;
  }
`;
