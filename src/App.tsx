import React from 'react';
import { Route, Routes } from 'react-router-dom';
// import logo from './logo.svg';
import './App.css';
import { UserContextProvider } from './UserContext';

import Translate from './translate';
import Default from './default';
import Setup from './Setup/Setup';

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
