import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import HomePage from './pages/homepage/homePage.component';
import ShopPage from './pages/shoppage/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';

const Hatspage = () => (
  <div>
    <h1>HATS</h1>
  </div>
)
const Womenspage = () => (
  <div>
    <h1>womens</h1>
  </div>
)
const Menspage = () => (
  <div>
    <h1>Mens</h1>
  </div>
)
const Sneakerspage = () => (
  <div>
    <h1>sneakers</h1>
  </div>
)
const Jacketspage = () => (
  <div>
    <h1>jackets</h1>
  </div>
)

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path={"/crwn-clothing"} element={<HomePage />} />
        <Route path={"/crwn-clothing/shop/hats"} element={<Hatspage />} />
        <Route path={"/crwn-clothing/shop/jackets"} element={<Jacketspage />} />
        <Route path={"/crwn-clothing/shop/sneakers"} element={<Sneakerspage />} />
        <Route path={"/crwn-clothing/shop/mens"} element={<Menspage />} />
        <Route path={"/crwn-clothing/shop/womens"} element={<Womenspage />} />
        <Route path={"/crwn-clothing/shop"} element={<ShopPage />} />
        <Route path={"/crwn-clothing/signin"} element={<SignInAndSignUp />} />
      </Routes>
    </div>
  );


}

export default App;
