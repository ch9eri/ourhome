import React from 'react';
import styled from 'styled-components';
import Header from './Header';

const Layout = ({ children }) => {
  return (
    // 반복되는 화면 구성을 위한 레이아웃 컴포넌트 생성
    <Background>
      <Header />
      <Children>{children}</Children>
    </Background>
  );
};

const Background = styled.div`
  width: 100vw;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  flex-direction: column;
`;
const Children = styled.div`
  width: 80vw;
  margin-bottom: 100px;
`;

export default Layout;
