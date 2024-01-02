import React from 'react';
import styled from 'styled-components';
import Layout from '../components/layout/Layout';
import CartItem from '../components/listpage/CartItem';
import Total from '../components/listpage/Total';
import { useRecoilState } from 'recoil';
import { cartListState } from '../state';
import { LIGHTGRAY } from '../css/theme';

const ListPage = () => {
  const [cartList] = useRecoilState(cartListState);

  return (
    <Layout>
      <Title>장바구니</Title>
      <SubContainer>
        <LongSubTitle>상품명</LongSubTitle>
        <SubTitle>수량</SubTitle>
        <SubTitle>금액</SubTitle>
      </SubContainer>
      {cartList.map((citem, index) => (
        <CartItem key={index} citem={citem} />
      ))}
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
  border-bottom: 1px solid ${LIGHTGRAY};
`;
const SubTitle = styled.div`
  width: 20%;
  text-align: center;
  font-size: 14px;
`;

const LongSubTitle = styled(SubTitle)`
  width: 60%;
`;

export default ListPage;
