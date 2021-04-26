import React from "react";
import styled from "styled-components";

import { mq, colors } from "../utils/styles";

const ProductCard = ({ img, title = "Сальники", quantity = 50 }) => {
  return (
    <ProductCardWrapper>
      <img src={img} alt="" />
      <ProductCardContent>
        <h1>{title}</h1>
        <p>
          Заказ от <span>{quantity}шт</span>
        </p>
        <button>Заказать</button>
      </ProductCardContent>
    </ProductCardWrapper>
  );
};

export default ProductCard;

/** ProductCard styled components **/
const ProductCardWrapper = styled.div`
  width: 96%;
  max-width: 420px;
  display: flex;
  flex-direction: column;
  background-color: ${colors.primary};
  height: 459px;
  border-radius: 25px;
  overflow: hidden;
  margin-bottom: 20px;
  ${mq[1]} {
    min-width: 45%;
    max-width: 700px;
    flex-direction: row;
    max-height: 218px;
    img {
      width: 40%;
      object-fit: cover;
    }
  }
`;

const ProductCardContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  h1 {
    font-size: 26px;
    font-weight: 700;
    color: ${colors.text};
    text-align: center;
    margin-top: 30px;
  }
  p {
    color: ${colors.secondary};
    span {
      font-size: 24px;
      font-weight: 700;
      color: ${colors.accent};
    }
  }
  button {
    width: 60%;
    height: 47px;
    background-color: ${colors.accent};
    border-radius: 20px;
    border: 0;
    outline: none;
    cursor: pointer;
    color: ${colors.text};
    font-weight: 700;
    transition: ease 0.2s;
    margin-top: 20px;
    margin-bottom: 40px;
    &:hover {
      background-color: ${colors.white};
      border: 1px solid ${colors.accent};
    }
  }
  ${mq[1]} {
    min-width: 50%;
  }
`;
