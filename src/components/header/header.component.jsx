import React from "react";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import { auth } from "../../firebase/firebase.utils";
import { connect } from "react-redux";
import CartIcon from "../cart-icon/CartIcon";
import CartDropDown from "../cart-dropdown/DropDownCart";
import { selectCurrentUser } from "../../redux/user/user-selector";
import { cartItemsHiddenState } from "../../redux/cart/cart-selectors";
import { createStructuredSelector } from "reselect";
import { Link } from "react-router-dom";

const Header = ({ currentUser, hidden }) => (
    <div className="flex justify-between">
        <Link to="/crwn-clothing">
            <Logo />
        </Link>
        <div className="flex justify-between gap-2 items-center">
            <Link to="/crwn-clothing/shop">SHOP</Link>
            <Link to="/crwn-clothing/contact">CONTACT</Link>
            {currentUser ? (
                <Link as="div" onClick={() => auth.signOut()}>
                    SIGN OUT
                </Link>
            ) : (
                <Link to="/crwn-clothing/signin">SIGN IN</Link>
            )}
            <CartIcon />
        </div>
        {
            !hidden && <CartDropDown /> ///// دارات منطقية      "ABO AL_LOL"   I USE LONG VARS NAME
        }
    </div>
);

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: cartItemsHiddenState,
});

export default connect(mapStateToProps)(Header);
