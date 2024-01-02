import React from 'react';
import Router from './Router';
import { BrowserRouter } from 'react-router-dom';
import { RecoilRoot } from 'recoil';

const App = () => {
  return (
    <BrowserRouter>
      <RecoilRoot>
        <Router />
      </RecoilRoot>
    </BrowserRouter>
  );
};

export default App;
