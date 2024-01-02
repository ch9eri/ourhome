import React from 'react';
import Router from './Router';
import { BrowserRouter } from 'react-router-dom';
import { RecoilRoot } from 'recoil';

const App = () => {
  return (
    <BrowserRouter>
      {/* 상태 관리를 위한 recoil */}
      <RecoilRoot>
        {/* 페이지 라우팅을 위한 라우터 파일 제작 */}
        <Router />
      </RecoilRoot>
    </BrowserRouter>
  );
};

export default App;
