import React from 'react';
import styled from 'styled-components';

const Item = ({ item }) => {
  return (
    <ItemContainer>
      <Num>{item.id}</Num>
      <Img src={item.src} />
      <Name>{item.name}</Name>
      <Desc>{item.desc}</Desc>
      <Price>{item.price}</Price>
    </ItemContainer>
  );
};

const ItemContainer = styled.div`
  width: 284px;
  margin: 10px 10px;
`;
const Num = styled.div``;
const Img = styled.img`
  width: 284px;
  height: 284px;
  border: 1px solid #d9d9d9;
`;
const Name = styled.div``;
const Desc = styled.div``;
const Price = styled.div``;

export default Item;
