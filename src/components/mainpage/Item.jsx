import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { PiShoppingCartBold, PiHeartBold } from 'react-icons/pi';
import { IoBagAddOutline } from 'react-icons/io5';

const Item = ({ item }) => {
  const [isHovering, setIsHovering] = useState(false);
  const [cartList, setCartList] = useState([]);

  useEffect(() => {
    console.log(cartList);
  }, [cartList]);

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
        { id: item.id, quantity: 1 },
      ]);
    }
  };

  return (
    <ItemContainer onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
      {isHovering && (
        <Modal>
          <PiShoppingCartBold
            size={40}
            className="hover"
            onClick={() => {
              onAddCart(item);
            }}
          />
          <PiHeartBold size={40} className="hover" />
          <IoBagAddOutline size={40} className="hover" />
        </Modal>
      )}
      <Num>{item.id}</Num>
      <Img src={item.src} />
      <Name>{item.name}</Name>
      <Desc>{item.desc}</Desc>
      <Price>{item.price}</Price>
    </ItemContainer>
  );
};

const Modal = styled.div`
  background-color: skyblue;
  display: flex;
  justify-content: center;
  align-items: center;
  .hover {
    background-color: red;
    margin: 0px 10px;
    &:hover {
      cursor: pointer;
    }
  }
`;

const ItemContainer = styled.div`
  width: 284px;
  margin: 10px 10px;
  background-color: yellow;
`;
const Num = styled.div``;
const Img = styled.img`
  width: 284px;
  height: 284px;
  border: 1px solid #d9d9d9;
`;
const Name = styled.div``;
const Desc = styled.div``;
const Price = styled.div``;

export default Item;
