import React from 'react';
import styled from 'styled-components';
import { useRecoilState } from 'recoil';
import { isModalOpenState } from '../../state';
import { useNavigate } from 'react-router-dom';

const Modal = () => {
  const [,setIsModalOpen] = useRecoilState(isModalOpenState);
  const navigate = useNavigate();

  return (
    <ModalBg>
      <ModalBody>
        <Title>장바구니</Title>
        <Desc>
          선택한 상품이 장바구니에 담겼습니다.
          <br />
          장바구니로 이동 하겠습니까?
        </Desc>
        <Row>
          <NavCartBtn
            onClick={() => {
              setIsModalOpen(false);
              navigate('/list');
            }}
          >
            장바구니 확인하기
          </NavCartBtn>
          <ContinueBtn
            onClick={() => {
              setIsModalOpen(false);
            }}
          >
            계속 쇼핑하기
          </ContinueBtn>
        </Row>
      </ModalBody>
    </ModalBg>
  );
};

const ModalBg = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
`;

const ModalBody = styled.div`
  width: 500px;
  height: 268px;
  border: 1px solid black;
  background-color: white;
  padding: 0px 30px;
`;
const Title = styled.div`
  font-size: 18px;
  font-weight: 700;
  height: 70px;
  display: flex;
  align-items: center;
  margin-top: 10px;
  border-bottom: 1px solid black;
`;
const Desc = styled.div`
  margin-top: 40px;
  text-align: center;
`;
const NavCartBtn = styled.button`
  width: 176px;
  height: 48px;
  font-size: 16px;
  font-weight: 700;
  color: white;
  background-color: #aaaaaa;
  border-color: transparent;
  margin: 0px 3px;
  &:hover {
    cursor: pointer;
  }
`;
const ContinueBtn = styled(NavCartBtn)`
  width: 156px;
  background-color: #ff6500;
  margin: 0px 3px;
`;

const Row = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 30px;
`;

export default Modal;
