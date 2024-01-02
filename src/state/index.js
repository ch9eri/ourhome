import { atom } from 'recoil';

export const cartListState = atom({
  // 현재 장바구니 리스트 상태
  key: `cartList`,
  default: [],
});

export const isModalOpenState = atom({
  // 모달창의 열림 유무 상태
  key: `isModalOpen`,
  default: false,
});
