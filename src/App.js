import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import HomePage from './pages/homepage/homePage.component';
import ShopPage from './pages/shoppage/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import TestPage from './pages/test-page/test-page.component';
import { auth } from './firebase/firebase.utils';




class App extends React.Component {
    constructor(){
        super();

        this.state = {
          currentUser : null
        }
    }

    unsubscribeFromAuth = null

    componentDidMount(){
        this.unsubscribeFromAuth = auth.onAuthStateChanged(user =>{
          this.setState({currentUser : user});

          console.log(user)
        })
    }

    componentWillUnmount(){
      this.unsubscribeFromAuth();
    }

    render(){
        return (
            <div>
                <Header currentUser={this.state.currentUser} />
                <Routes>
                    <Route path={"/crwn-clothing"} element={<HomePage />} />
                    <Route path={"/crwn-clothing/shop"} element={<ShopPage />} />
                    <Route path={"/crwn-clothing/signin"} element={<SignInAndSignUp />} />
                    <Route path={"/crwn-clothing/shop/*"} element={<TestPage />} />
                </Routes>
            </div>
        );

    }
}

export default App;
