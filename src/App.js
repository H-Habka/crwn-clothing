import React from 'react';
import {Routes, Route} from 'react-router-dom';
import './App.css';
import HomePage from './pages/homepage/homePage.component';

const Hatspage = () =>(
  <div>
    <h1>HATS</h1>
  </div>
)
const Womenspage = () =>(
  <div>
    <h1>womens</h1>
  </div>
)
const Menspage = () =>(
  <div>
    <h1>Mens</h1>
  </div>
)
const Sneakerspage = () =>(
  <div>
    <h1>sneakers</h1>
  </div>
)
const Jacketspage = () =>(
  <div>
    <h1>jackets</h1>
  </div>
)

function App() {
  return (
      <Routes>
        <Route path={"/"} element={<HomePage />} />
        <Route path={"/shop/hats"} element={<Hatspage />} />
        <Route path={"shop/jackets"} element={<Jacketspage />} />
        <Route path={"shop/sneakers"} element={<Sneakerspage />} />
        <Route path={"shop/mens"} element={<Menspage />} />
        <Route path={"shop/womens"} element={<Womenspage />} />
      </Routes>
  );
}

export default App;
