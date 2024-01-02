import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const CartItem = () => {
  const [cartList, setCartList] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {}, []);

  return <CartItemContainer></CartItemContainer>;
};

const CartItemContainer = styled.div`
  background-color: purple;
  min-height: 130px;
`;

export default CartItem;
