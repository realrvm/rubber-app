import React from "react";
import styled from "styled-components";

import { mq, colors } from "../utils/styles";

const ProposalCard = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <ProposalCardWrapper>
      <form onSubmit={handleSubmit}>
        <h1>Бесплатная консультация</h1>
        <p>Мы поможем с любым вопросом который у вас возник</p>
        <input type={`text`} placeholder={`Введите имя`} />
        <input type={`text`} placeholder={`Введите телефон`} />
        <textarea type={`text`} placeholder={`Введите сообщение`} />
        <input type={`submit`} value={`Отправить`} />
      </form>
    </ProposalCardWrapper>
  );
};

export default ProposalCard;

/** ProposalCard styled components **/
const ProposalCardWrapper = styled.div`
  min-width: 96%;
  height: 460px;
  background-color: ${colors.white};
  border-radius: 20px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  margin-top: 50px;
  h1 {
    text-align: center;
    font-size: 22px;
    font-weight: 700;
    margin-top: 30px;
  }
  p {
    text-align: center;
    color: ${colors.secondary};
  }
  form {
    padding: 20px 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    input,
    textarea {
      width: 80%;
      padding: 5px 10px;
      background-color: #ebebeb;
      font-size: 16px;
      color: #828282;
      border: 0;
      outline: none;
      margin-bottom: 20px;
      border-radius: 10px;
    }
    input {
      height: 49px;
    }
    textarea {
      resize: none;
    }
    input:last-child {
      background-color: ${colors.accent};
      width: 65%;
      border-radius: 20px;
      font-weight: 700;
      font-size: 18px;
      color: ${colors.black};
      border: 0;
      cursor: pointer;
      transition: ease 0.2s;
      &:hover {
        border: 1px solid ${colors.black};
        background: transparent;
      }
    }
  }
  ${mq[1]} {
    max-width: 40%;
    min-width: 380px;
    margin-top: 0;
  }
`;
