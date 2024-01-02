import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { totalPriceState, cartListState } from '../../state';
import { useRecoilState } from 'recoil';
import { LIGHTGRAY } from '../../css/theme';

const CartItem = ({ citem }) => {
  const [cartList, setCartList] = useRecoilState(cartListState);

  const onHandlePlus = () => {
    setCartList((prevCartList) =>
      prevCartList.map((item) =>
        item.id === citem.id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const onHandleMinus = () => {
    setCartList((prevCartList) =>
      prevCartList.map((item) =>
        item.id === citem.id && item.quantity > 0
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  return (
    <CartItemContainer>
      <LongItem>
        <Img src={citem.src} />
        <LText>{citem.name}</LText>
      </LongItem>
      <IText>
        <QuantityBtn onClick={onHandleMinus}>-</QuantityBtn>
        <QuantityInput value={citem.quantity} />
        <QuantityBtn onClick={onHandlePlus}>+</QuantityBtn>
      </IText>
      <IText>{citem.price.toLocaleString('ko-KR')}원</IText>
    </CartItemContainer>
  );
};

const CartItemContainer = styled.div`
  min-height: 130px;
  display: flex;
  border-bottom: 1px solid ${LIGHTGRAY};
`;

const Img = styled.img`
  width: 100px;
  height: 100px;
  border: 1px solid ${LIGHTGRAY};
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

const QuantityInput = styled.input`
  width: 43px;
  height: 22px;
  font-size: 14px;
  text-align: center;
  border: 1px solid ${LIGHTGRAY};
  border-right-color: transparent;
  border-left-color: transparent;
`;

const QuantityBtn = styled.div`
  border: 1px solid ${LIGHTGRAY};
  font-size: 16px;
  width: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 24px;
  &:hover {
    cursor: pointer;
  }
`;

export default CartItem;
