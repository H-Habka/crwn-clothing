import './CartIcon.scss'
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg'
import { connect } from 'react-redux'
import {toggleCartHidden} from '../../redux/cart/cart-actions'
import { cartItemsCount } from '../../redux/cart/cart-selectors'
import { createStructuredSelector } from 'reselect'



const CartIcon = ({toggleCartHidden, cartNum}) =>(
    <div className="cart-icon" onClick={toggleCartHidden}>
        <ShoppingIcon className='shopping-icon'/>
        <span className='item-count'> {cartNum} </span>
    </div>
)

const mapDispatchToProps = dispatch => ({
    toggleCartHidden : () => dispatch(toggleCartHidden())
})

const mapStateToProps = createStructuredSelector({
    cartNum : cartItemsCount
})

export default connect(mapStateToProps,mapDispatchToProps)(CartIcon)