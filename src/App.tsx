import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Detalized from './pages/Detalized/Home';
import Home from './pages/Home/Home';
import Header from './shared/Header';


function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/weather' element={<Detalized/>} />
      </Routes>
    </div>
  );
}

export default App;
