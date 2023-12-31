import React from 'react';
import Item from './Item';
import styled from 'styled-components';
import items from '../../data/items.json';

const Items = () => {
  return (
    <ItemsContainer>
      {items.map((item, index) => (
        <Item key={index} item={item} />
      ))}
    </ItemsContainer>
  );
};

const ItemsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export default Items;
