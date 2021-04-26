import React from "react";
import styled from "styled-components";

import { Manufacturers, ContentSection, ProductCard } from "../components";
import { mq, colors } from "../utils/styles";
import { products } from "../utils/store";

const Products = () => {
  return (
    <ProductsWrapper>
      <ContentSection>
        <ProductsTitle>Оптовая продажа резинотехнических изделий</ProductsTitle>
        <StrangeYellowLine />
        <ProductsCardsContainer>
          {products.map((product) => (
            <ProductCard
              key={product.id}
              title={product.title}
              quantity={product.quantity}
              img={product.img}
            />
          ))}
        </ProductsCardsContainer>
      </ContentSection>
      <Manufacturers title={`Для грузовиков`} />
    </ProductsWrapper>
  );
};

export default Products;

/** Products styled components **/
const ProductsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${colors.backgroundHeader};
  ${mq[1]} {
    background-color: ${colors.white};
  }
`;

const ProductsTitle = styled.h1`
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
  margin-bottom: 40px;
  transform: translateX(-5px);
`;

const ProductsCardsContainer = styled.div`
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
`;
