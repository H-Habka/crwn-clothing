import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import HomePage from './pages/homepage/homePage.component';
import ShopPage from './pages/shoppage/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { connect } from 'react-redux';
import {setCurrentUser} from './redux/user/User-actions'
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from './redux/user/user-selector';
import CheckoutPage from './pages/checkout/CheckoutPage';
import styled from 'styled-components'

const Test = styled.div`
    color: red;
    width: 200px;
    height: 200px;
    background: yellow; 
`

class App extends React.Component {

    unsubscribeFromAuth = null

    componentDidMount(){
        const {setCurrentUser} = this.props

        this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth =>{
            if(userAuth){
                const userRef = createUserProfileDocument(userAuth);

                (await userRef).onSnapshot(snapShot => {
                    setCurrentUser({
                        id: snapShot.id,
                        ...snapShot.data()
                    })
                })
            }else{
                setCurrentUser(userAuth)
            }
            
            createUserProfileDocument(userAuth)


        })
    }

    componentWillUnmount(){
      this.unsubscribeFromAuth();
    }

    render(){
        const {currentUser} = this.props
        return (
            <div>
                <Header />
                <Routes>
                    <Route path={"/crwn-clothing"} element={<HomePage />} />
                    <Route path={"/crwn-clothing/shop/*"} element={<ShopPage />} />
                    <Route path={"/crwn-clothing/signin"} element={(currentUser ? <Navigate to="/crwn-clothing" />: <SignInAndSignUp />)} />
                    <Route path={"/crwn-clothing/checkout"} element={<CheckoutPage />} />
                </Routes>
            </div>
        );

    }
}

const mapStateToProps = createStructuredSelector({
    currentUser : selectCurrentUser
})

const mapDispatchToProps = dispatch => ({
    setCurrentUser : user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps,mapDispatchToProps)(App);
