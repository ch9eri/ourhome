import React from 'react';
import styled from 'styled-components';
import { FiPlus } from 'react-icons/fi';
import { PiEquals } from 'react-icons/pi';

const Total = () => {
  return (
    <TotalContainer>
      <PriceText>총 금액</PriceText>
      <PriceNum>0000원</PriceNum>
      <FiPlus size={30} className="char" />
      <PriceText>배송비</PriceText>
      <PriceNum>3,000원</PriceNum>
      <PriceText>(3만원 이상 구매시 무료 배송)</PriceText>
      <PiEquals size={30} className="char" />
      <PriceText>결제 금액</PriceText>
      <PriceNum>0000원</PriceNum>
    </TotalContainer>
  );
};

const TotalContainer = styled.div`
  min-height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-top: 2px solid gray;
  .char {
    margin: 0px 10px;
    color: gray;
  }
`;

const PriceText = styled.div`
  margin: 0px 5px;
  font-size: 15px;
`;
const PriceNum = styled.div`
  font-size: 22px;
  font-weight: 700;
`;

export default Total;
