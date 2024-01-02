import React from 'react';
import styled from 'styled-components';
import Layout from '../components/layout/Layout';
import CartItem from '../components/listpage/CartItem';
import Total from '../components/listpage/Total';

const ListPage = () => {
  return (
    <Layout>
      <Title>장바구니</Title>
      <SubContainer>
        <LongSubTitle>상품명</LongSubTitle>
        <SubTitle>구매가</SubTitle>
        <SubTitle>수량</SubTitle>
        <SubTitle>금액</SubTitle>
      </SubContainer>
      <CartItem />
      <Total />
    </Layout>
  );
};

const Title = styled.div`
  font-size: 24px;
  font-weight: 700;
  margin: 18px 0px;
`;
const SubContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 70px;
  background-color: #fafafa;
  border-top: 1px solid black;
  border-bottom: 1px solid gray;
`;
const SubTitle = styled.div`
  width: 136px;
  text-align: center;
  font-size: 14px;
`;

const LongSubTitle = styled(SubTitle)`
  width: 560px;
`;

export default ListPage;
