import React, { useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
// import logo from './logo.svg';
import './App.css';
import { UserContextProvider } from './UserContext';

import Translate from './translate';
import Default from './default';
import Setup from './setup';

import IProfile from './common';

function App() {
  return (
    <UserContextProvider>
      <Routes>
        <Route path='/' element={<Default/>} />
        <Route path='/translate' element={<Translate/>} />
        <Route path='/setup/*' element={<Setup/>} />
      </Routes>
    </UserContextProvider>
  );
}

export default App;
