import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';
import { FiPlus } from 'react-icons/fi';
import { PiEquals } from 'react-icons/pi';
import { totalPriceState } from '../../state';

const Total = () => {
  const [total, setTotal] = useRecoilState(totalPriceState);
  const DelFee = total >= 30000 ? 0 : 3000; //배송비
  return (
    <TotalContainer>
      <PriceText>총 금액</PriceText>
      <PriceNum>{total}원</PriceNum>
      <FiPlus size={30} className="char" />
      <PriceText>배송비</PriceText>
      <PriceNum>{DelFee.toLocaleString('ko-KR')}원</PriceNum>
      <PriceText>(3만원 이상 구매시 무료 배송)</PriceText>
      <PiEquals size={30} className="char" />
      <PriceText>결제 금액</PriceText>
      <PriceNum>{(total + DelFee).toLocaleString('ko-KR')}원</PriceNum>
    </TotalContainer>
  );
};

const TotalContainer = styled.div`
  min-height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-top: 1px solid gray;
  .char {
    margin: 0px 10px;
    color: gray;
  }
`;

const PriceText = styled.div`
  margin: 0px 10px;
  font-size: 15px;
`;
const PriceNum = styled.div`
  font-size: 22px;
  font-weight: 700;
`;

export default Total;
