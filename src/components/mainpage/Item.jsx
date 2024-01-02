import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { PiShoppingCart, PiHeart } from 'react-icons/pi';
import { IoBagAddOutline } from 'react-icons/io5';
import { useRecoilState } from 'recoil';
import { cartListState, isModalOpenState } from '../../state';
import { LIGHTGRAY, DARKGRAY } from '../../css/theme';

const Item = ({ item }) => {
  const [isHovering, setIsHovering] = useState(false);
  const [cartList, setCartList] = useRecoilState(cartListState);
  const [,setIsModalOpen] = useRecoilState(isModalOpenState);

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

  const onAddCart = (item) => {
    console.log(cartList);
    if (cartList.find((el) => el.id === item.id)) {
      // 기존 리스트에 존재할 때
      setCartList((prevCartList) =>
        prevCartList.map((el) => {
          if (el.id === item.id) {
            return { ...el, quantity: el.quantity + 1 };
          }
          return el;
        })
      );
    } else {
      // 처음 추가(기존 리스트에 존재하지 않을 때)
      setCartList((prevCartList) => [
        ...prevCartList,
        {
          id: item.id,
          quantity: 1,
          price: item.price,
          src: item.src,
          name: item.name,
        },
      ]);
    }
  };

  return (
    <ItemContainer onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
      <Num>{item.id <= 9 ? '0' + item.id : item.id}</Num>
      {isHovering && (
        <Hover>
          <PiShoppingCart
            size={30}
            className="hover"
            onClick={() => {
              onAddCart(item);
              setIsModalOpen(true);
            }}
          />
          <PiHeart size={30} className="hover" />
          <IoBagAddOutline size={30} className="hover" />
        </Hover>
      )}
      <Img src={item.src} />
      <Name>{item.name}</Name>
      <Desc>{item.desc}</Desc>
      <Price>{item.price.toLocaleString('ko-KR')}원</Price>
    </ItemContainer>
  );
};

const Hover = styled.div`
  position: absolute;
  top: 260px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 284px;

  .hover {
    background-color: ${LIGHTGRAY};
    opacity: 0.8;
    margin: 0px 7px;
    padding: 10px;
    border-radius: 50px;
    &:hover {
      cursor: pointer;
    }
  }
`;

const ItemContainer = styled.div`
  width: 284px;
  height: 430px;
  margin: 20px 0px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const Num = styled.div`
  font-size: 32px;
  font-weight: 700;
  height: 43px;
`;
const Img = styled.img`
  width: 284px;
  height: 284px;
  border: 1px solid ${LIGHTGRAY};
  margin-bottom: 5px;
`;
const Name = styled.div`
  font-size: 20px;
  height: 25px;
  font-weight: 500;
`;

const Desc = styled.div`
  font-size: 14px;
  height: 21px;
  color: ${DARKGRAY};
`;
const Price = styled.div`
  font-size: 28px;
  font-weight: 700;
`;

export default Item;
