import React from 'react';
import styled from 'styled-components';
import Logo from '../../../src/image/ourhome_logo.png';
import { PiShoppingCartBold } from 'react-icons/pi';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  const naviToHome = () => {
    navigate('/');
  };
  const naviToList = () => {
    navigate('/list');
  };
  return (
    <HeaderContainer>
      <LogoImg src={Logo} onClick={naviToHome} />
      <CartIcon size={40} onClick={naviToList} />
    </HeaderContainer>
  );
};

const HeaderContainer = styled.div`
  width: 80vw;
  height: 100px;
  display: flex;
  align-items: center;
`;

const LogoImg = styled.img`
  height: 40px;
  margin-right: auto;
  &:hover {
    cursor: pointer;
  }
`;

const CartIcon = styled(PiShoppingCartBold)`
  &:hover {
    cursor: pointer;
  }
`;

export default Header;
