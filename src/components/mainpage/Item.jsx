import React from 'react';
import styled from 'styled-components';

const Item = () => {
  return (
    <ItemContainer>
      <Num>1</Num>
      <Img src="https://mall.ourhome.co.kr//attach_file/20201118/C4A1610E7468407FA935CBF8DE2164DF.jpg" />
      <Name>★연말세일★ 진한 사골곰탕 300g</Name>
      <Desc>100% 사골로 고은 진한 사골곰탕</Desc>
      <Price>880원</Price>
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
