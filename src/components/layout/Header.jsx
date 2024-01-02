import React from 'react';
import styled from 'styled-components';
import Logo from '../../../src/image/ourhome_logo.png';
import { PiShoppingCartBold } from 'react-icons/pi';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  const naviToList = () => {
    navigate('/list');
  };
  return (
    <HeaderContainer>
      <LogoImg src={Logo} />
      <CartIcon size={40} onClick={naviToList} />
    </HeaderContainer>
  );
};

const HeaderContainer = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
`;

const LogoImg = styled.img`
  height: 40px;
  margin-right: auto;
  margin-left: 100px;
  &:hover {
    cursor: pointer;
  }
`;

const CartIcon = styled(PiShoppingCartBold)`
  margin-right: 200px;
  &:hover {
    cursor: pointer;
  }
`;

export default Header;
