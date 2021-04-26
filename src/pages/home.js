import React from "react";
import styled from "styled-components";

import { ContentSection, ProposalCard } from "../components";
import bg from "../assets/background/bg.jpg";
import { mq, colors } from "../utils/styles";

const Home = () => {
  return (
    <HomeWrapper>
      <ContentSection>
        <HomeContainer>
          <HomeDescr>
            <h1>Оптовые продажи резинотехнических изделий</h1>
            <p>
              Предоставляем услуги по оптовым продажам резино-технических
              изделий прямо с завода для МАЗ, КАМАЗ, ВАЗ, УАЗ, ГАЗ.
            </p>
            <button>Посмотреть продукцию</button>
          </HomeDescr>
          <ProposalCard />
        </HomeContainer>
      </ContentSection>
    </HomeWrapper>
  );
};

export default Home;

/** Home styled components **/
const HomeWrapper = styled.div`
  width: 100%;
  height: 100vh;
  background-image: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.7),
      rgba(0, 0, 0, 0.7)
    ),
    url(${bg});
  background-size: cover;
`;

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 140px;
  ${mq[1]} {
    flex-direction: row;
    justify-content: space-between;
    margin-top: 110px;
  }
`;

const HomeDescr = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 100%;
  h1 {
    font-size: 28px;
    text-align: center;
    color: ${colors.accent};
    line-height: 34.69px;
    ${mq[1]} {
      font-size: 40px;
      text-align: left;
      line-height: 51.88px;
    }
  }
  p {
    font-size: 18px;
    text-align: center;
    color: ${colors.white};
    ${mq[1]} {
      font-size: 20px;
      text-align: left;
    }
  }
  button {
    width: 241px;
    height: 47px;
    color: ${colors.black};
    background: ${colors.accent};
    cursor: pointer;
    outline: none;
    border-radius: 15px;
    border: 0;
    font-size: 16px;
    font-weight: 700;
    transition: ease 0.2s;
    margin-top: 15px;
    &:hover {
      border: 1px solid ${colors.accent};
      background: transparent;
      color: ${colors.accent};
    }
  }
  ${mq[1]} {
    max-width: 50%;
    align-items: flex-start;
  }
`;
