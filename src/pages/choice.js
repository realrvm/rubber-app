import React from "react";
import styled from "styled-components";

import { mq, colors } from "../utils/styles";
import quality from "../assets/svgs/quality.svg";
import quantity from "../assets/svgs/quantity.svg";
import consult from "../assets/svgs/consult.svg";
import repair from "../assets/svgs/repair.svg";
import { ChoiceCard, ContentSection, Manufacturers } from "../components";

const choices = [
  {
    id: 1,
    title: "Качество производства",
    descr:
      "Комплекты изготовлены из отeчественных материалов и прошли стадию проверки  и тестирования.",
    img: quality,
  },
  {
    id: 2,
    title: "Большой ассортимент",
    descr:
      "У нас есть все необходимые материалы для полного и частичного ремонта вашего автомобиля.",
    img: quantity,
  },
  {
    id: 3,
    title: "Консультация",
    descr:
      "Бесплатно проконсультируем и скажем сколько вам нужно комплектов для ремонта.",
    img: consult,
  },
  {
    id: 4,
    title: "Быстрая сборка",
    descr:
      "У нас есть все необходимые материалы. Мы быстро сможем собрать нужные комплекты",
    img: repair,
  },
];

const Choice = () => {
  return (
    <ChoiceWrapper>
      <ContentSection>
        <ChoiceTitle>Почему стоит заказать у нас</ChoiceTitle>
        <StrangeYellowLine />
        <ChoiceCardContainer>
          {choices.map((choice) => (
            <ChoiceCard key={choice.id} {...choice} />
          ))}
        </ChoiceCardContainer>
      </ContentSection>
      <Manufacturers title={`Официальные дилеры`} />
    </ChoiceWrapper>
  );
};

export default Choice;

/** Choice styled components **/
const ChoiceWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  background-color: ${colors.backgroundHeader};
  ${mq[1]} {
    background-color: ${colors.white};
  }
`;

const ChoiceTitle = styled.h1`
  text-align: center;
  font-size: 32px;
  font-weight: 700;
  color: ${colors.white};
  margin-top: 130px;
  ${mq[1]} {
    color: ${colors.text};
    margin-top: 50px;
  }
`;

const StrangeYellowLine = styled.div`
  margin: 0 auto;
  background-color: ${colors.accent};
  width: 53px;
  height: 1px;
  margin-bottom: 60px;
  transform: translateX(-5px);
`;

const ChoiceCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 40px;
  ${mq[1]} {
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-items: center;
    align-items: center;
  }
  ${mq[2]} {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
`;
