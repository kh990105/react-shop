import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import MainList from './pages/MainList';
import Footer from './components/Footer';
import Detail from './pages/Detail';

const App = () => {
  return (
    <BrowserRouter>
      <Navbar/>
       <Routes>
          <Route index element={<Home /> } />
          <Route path='/' element={<Home /> } />
          <Route path="outer/:param" element={<MainList />} />
          <Route path="dress/:param" element={<MainList />} />
          <Route path="top/:param" element={<MainList />} />
          <Route path="bottom/:param" element={<MainList />} />
          <Route path='Datail/:num' element={<Detail/>}/>
       </Routes>
       <Footer/>
    </BrowserRouter>
  );
}

export default App