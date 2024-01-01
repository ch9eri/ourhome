import React from 'react';
import Item from './Item';
import styled from 'styled-components';

const Items = () => {
  return (
    <ItemsContainer>
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
    </ItemsContainer>
  );
};

const ItemsContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

export default Items;
