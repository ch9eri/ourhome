import React from 'react';
import styled from 'styled-components';
import Header from './Header';

const Layout = ({ children }) => {
  return (
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
