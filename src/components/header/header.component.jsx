import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo} from '../../assets/crown.svg';
import { auth } from "../../firebase/firebase.utils";
import './header.style.scss'
import { connect } from "react-redux";
import CartIcon from "../cart-icon/CartIcon";
import CartDropDown from "../cart-dropdown/DropDownCart";
import { selectCurrentUser } from "../../redux/user/user-selector";
import { cartItemsHiddenState } from "../../redux/cart/cart-selectors";
import { createStructuredSelector } from "reselect";

const Header = ({currentUser, hidden}) => (
    <div className="header">
        <Link to="/crwn-clothing" className="logo-container">
            <Logo className="logo"/>
        </Link>
        <div className="options">
            <Link to='/crwn-clothing/shop' className="option">SHOP</Link>
            <Link to='/crwn-clothing/contact' className="option">CONTACT</Link>
            {
                currentUser? 
                (<div className="option" onClick={() => auth.signOut()}>SIGN OUT</div>)
                :
                (<Link to="/crwn-clothing/signin" className="option">SIGN IN</Link>)
            }
            <CartIcon />
        </div>
        {
            !hidden&&<CartDropDown />   ///// دارات منطقية      "ABO AL_LOL"   I USE LONG VARS NAME
        }
    </div>
)

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden:cartItemsHiddenState 
})

export default connect(mapStateToProps)(Header)

 