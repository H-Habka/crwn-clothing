import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo} from '../../assets/crown.svg';
import { auth } from "../../firebase/firebase.utils";
import './header.style.scss'

const Header = ({currentUser}) => (
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
        </div>
    </div>
)

export default Header