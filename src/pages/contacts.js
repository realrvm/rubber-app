import React from "react";
import styled from "styled-components";

import { mq, colors, widths } from "../utils/styles";
import { ContentSection, ProposalCard, ContactsCard } from "../components";
import map from "../assets/map/map-h.jpg";
import mapVert from "../assets/map/map-v.jpg";
import about from "../assets/background/about.jpg";
import useWindowWidth from "../utils/useWindowWidth";
import { contacts } from "../utils/store";

const Contacts = () => {
  const { width } = useWindowWidth();
  const { tabletPageWidth } = widths;

  return (
    <ContactsWrapper>
      <ContentSection>
        <ContactsTitle>Контакты</ContactsTitle>
        <StrangeYellowLine />
        <ContactsContentContainer>
          <ContactsContent>
            <Contact>
              {contacts.map((contact) => (
                <ContactsCard key={contact.id} {...contact} />
              ))}
            </Contact>
            <img src={width < tabletPageWidth ? mapVert : map} alt="" />
          </ContactsContent>
          <ProposalCard />
        </ContactsContentContainer>
      </ContentSection>
      <AboutContainer>
        <ContentSection>
          <AboutTitle>O нас</AboutTitle>
          <StrangeYellowLine />
          <AboutContent>
            <div>
              <p>
                На данный момент являемся наиболее популярным магазином дисков и
                шин на рынке электронной коммерции. Наш интернет-магазин за 8
                лет существования получил статус лидера продаж данной категории
                товаров.
              </p>
              <p>
                Мы сотрудничаем с известными логистическими компаниями, поэтому
                осуществляем быструю доставку продукции в более чем 1500
                населенных пунктов. Такого результата мы добились благодаря
                широкому ассортименту изделий, высококачественному обслуживанию
                и демократичной ценовой политике.
              </p>
              <p>
                Наша компания работает с огромным количеством проверенных
                поставщиков, поэтому гарантирует качество и надежность
                предлагаемых товаров. Автоматизированная система обработки
                заказов позволяет уделить внимание каждому клиенту как в
                телефонном, так и в онлайн-режиме.
              </p>
            </div>
            <img src={about} alt="" />
          </AboutContent>
        </ContentSection>
      </AboutContainer>
    </ContactsWrapper>
  );
};

export default Contacts;

/** Contacts styled components **/
const ContactsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${colors.backgroundHeader};
  ${mq[1]} {
    background-color: ${colors.white};
  }
`;

const ContactsTitle = styled.h1`
  text-align: center;
  font-weight: 700;
  font-size: 32px;
  margin-top: 130px;
  color: ${colors.white};
  ${mq[1]} {
    margin-top: 50px;
    color: ${colors.text};
  }
`;

const ContactsContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  ${mq[1]} {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    margin-bottom: 50px;
  }
  ${mq[2]} {
    justify-content: space-between;
    align-items: flex-start;
  }
`;

const ContactsContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  & > img {
    width: 96%;
    margin-top: 35px;
  }
`;

const Contact = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  background-color: ${colors.accent};
  border-radius: 10px;
  width: 96%;
  ${mq[1]} {
    flex-direction: row;
    align-items: baseline;
    width: 667px;
    height: 110px;
  }
`;

const StrangeYellowLine = styled.div`
  margin: 0 auto;
  background-color: ${colors.accent};
  width: 53px;
  height: 1px;
  margin-bottom: 40px;
`;

const AboutContainer = styled.div`
  width: 100%;
  background-color: ${colors.backgroundHeader};
`;

const AboutTitle = styled(ContactsTitle)`
  color: ${colors.white};
  margin-top: 70px;
  ${mq[1]} {
    margin-top: 50px;
  }
`;

const AboutContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 40px;
  & > img {
    width: 96%;
  }
  p {
    text-align: center;
    color: ${colors.white};
  }
  ${mq[1]} {
    flex-direction: row;
    align-items: flex-start;
    p {
      margin-right: 50px;
      text-align: left;
    }
    img {
      margin-top: 20px;
    }
  }
`;
