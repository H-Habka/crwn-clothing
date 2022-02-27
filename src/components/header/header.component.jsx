import React from "react";
import { ReactComponent as Logo} from '../../assets/crown.svg';
import { auth } from "../../firebase/firebase.utils";
import { connect } from "react-redux";
import CartIcon from "../cart-icon/CartIcon";
import CartDropDown from "../cart-dropdown/DropDownCart";
import { selectCurrentUser } from "../../redux/user/user-selector";
import { cartItemsHiddenState } from "../../redux/cart/cart-selectors";
import { createStructuredSelector } from "reselect";
import {
    HeaderContainer,
    LogoContainer,
    OptionsContainer,
    LinkOption
    } from './headerStyledComponent'

const Header = ({currentUser, hidden}) => (
    <HeaderContainer >
        <LogoContainer to="/crwn-clothing" >
            <Logo />
        </LogoContainer>
        <OptionsContainer >
            <LinkOption to='/crwn-clothing/shop'>SHOP</LinkOption>
            <LinkOption to='/crwn-clothing/contact'>CONTACT</LinkOption>
            {
                currentUser? 
                (<LinkOption as='div' onClick={() => auth.signOut()}>SIGN OUT</LinkOption>)
                :
                (<LinkOption to="/crwn-clothing/signin">SIGN IN</LinkOption>)
            }
            <CartIcon />
        </OptionsContainer>
        {
            !hidden&&<CartDropDown />   ///// دارات منطقية      "ABO AL_LOL"   I USE LONG VARS NAME
        }
    </HeaderContainer>
)

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden:cartItemsHiddenState 
})

export default connect(mapStateToProps)(Header)

 