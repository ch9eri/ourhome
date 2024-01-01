import React from 'react';
import styled from 'styled-components';
import Layout from '../components/layout/Layout';
import Items from '../components/mainpage/Items';

const MainPage = () => {
  return (
    <Layout>
      <Title>카테고리 베스트</Title>
      <Items />
    </Layout>
  );
};

const Title = styled.div``;

export default MainPage;
