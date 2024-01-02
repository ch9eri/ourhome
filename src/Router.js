import React from 'react';
import { Route, Routes } from 'react-router-dom';
import MainPage from './pages/MainPage';
import ListPage from './pages/ListPage';

const Router = () => {
  return (
    <Routes>
      {/* 메인 홈 페이지 */}
      <Route path="/" element={<MainPage />} />
      {/* 장바구니 페이지 */}
      <Route path="/list" element={<ListPage />} />
    </Routes>
  );
};

export default Router;
