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
  height: 100vh;
  top: 0;
  left: 0;
`;
const Children = styled.div``;

export default Layout;
