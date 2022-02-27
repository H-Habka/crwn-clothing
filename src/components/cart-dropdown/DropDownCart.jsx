import CustomButton from "../custom-button/custom-button.component"
import './DropDownCart.scss'
import { connect } from "react-redux";
import CartItem from "../cart-item/CartItem";
import { cartItems } from "../../redux/cart/cart-selectors";
import { createStructuredSelector } from "reselect";
import { Link} from "react-router-dom";
import { toggleCartHidden } from "../../redux/cart/cart-actions";


const CartDropDown = ({cartItems, toggleCartHidden}) => {

  return(
  <div className='cart-dropdown'>
    <div className="cart-items">
      {!cartItems.length?
      <span className="empty-cart-dropdown">Your Cart Is Empty</span>:
        cartItems.map(cartItem =>(
          <CartItem key={cartItem.id} cartItem = {cartItem}/>
        ))
      }
    </div>
    <Link to="/crwn-clothing/checkout" className="checkout-btn">
      <CustomButton onClick={() =>
        toggleCartHidden()}>GO TO CHECKOUT
      </CustomButton>
    </Link>
  </div>

)}

const mapDispatchToProps = dispatch => ({
  toggleCartHidden : () => dispatch(toggleCartHidden())
})

const mapStateToProps = createStructuredSelector({
  cartItems :  cartItems
})

export default connect(mapStateToProps,mapDispatchToProps)(CartDropDown)
 