import React from 'react';
import styled from 'styled-components';
import Layout from '../components/layout/Layout';
import Item from '../components/mainpage/Item';

const MainPage = () => {
  return (
    <Layout>
      <Title>카테고리 베스트</Title>
      <Item />
    </Layout>
  );
};

const Title = styled.div``;

export default MainPage;
