import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import { MainLayout } from './layout';
import { Loading } from './components'
import { HomeElement, YoutubeElement, BankElement, WebcompanyElement } from './data/elements';

import './assets/css/App.css';

const App: React.FC = () => {
  return (
    <MainLayout>
      <Suspense fallback={<Loading/>}>
        <Routes>
          <Route path='/' element={<HomeElement />} />
          <Route path='/youtube' element={<YoutubeElement />} />
          <Route path='/bank' element={<BankElement />} />
          <Route path='/webcompany' element={<WebcompanyElement />} />
        </Routes>
      </Suspense>
    </MainLayout>
  );
};

export default App;
