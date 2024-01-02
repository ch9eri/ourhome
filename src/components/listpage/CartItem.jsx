import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { totalPriceState, cartListState } from '../../state';
import { useRecoilState } from 'recoil';

const CartItem = ({ citem }) => {
  const [cartList, setCartList] = useRecoilState(cartListState);

  return (
    <CartItemContainer>
      <LongItem>
        <Img src={citem.src} />
        <LText>{citem.name}</LText>
      </LongItem>
      <IText>{citem.quantity}</IText>
      <IText>{citem.price.toLocaleString('ko-KR')}원</IText>
    </CartItemContainer>
  );
};

const CartItemContainer = styled.div`
  min-height: 130px;
  display: flex;
  border-bottom: 1px solid #d9d9d9;
`;

const Img = styled.img`
  width: 100px;
  height: 100px;
  border: 1px solid #d9d9d9;
`;

const LongItem = styled.div`
  width: 60%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const IText = styled.div`
  width: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
`;

const LText = styled(IText)`
  width: 470px;
  justify-content: flex-start;
`;

export default CartItem;
