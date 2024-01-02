import { atom } from 'recoil';

export const cartListState = atom({
  key: `cartList`,
  default: [],
});

export const isModalOpenState = atom({
  key: `isModalOpen`,
  default: false,
});
