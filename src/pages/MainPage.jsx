import React from 'react';
import styled from 'styled-components';
import Layout from '../components/layout/Layout';
import Items from '../components/mainpage/Items';
import { useRecoilState } from 'recoil';
import { isModalOpenState } from '../state';
import Modal from '../components/mainpage/Modal';

const MainPage = () => {
  const [isModalOpen] = useRecoilState(isModalOpenState);

  return (
    <>
      {isModalOpen && <Modal />}
      <Layout>
        <Title>카테고리 베스트</Title>
        <Items />
      </Layout>
    </>
  );
};

const Title = styled.div`
  font-size: 28px;
  font-weight: 700;
  margin: 18px 0px;
`;

export default MainPage;
