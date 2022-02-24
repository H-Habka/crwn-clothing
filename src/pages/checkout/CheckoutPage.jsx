import './CheckoutPage.scss'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { totalPrice, cartItems } from '../../redux/cart/cart-selectors'
import CheckoutItem from '../../components/checkout-item/CheckoutItem'


const CheckoutPage = ({TotalPrice, cartItems}) =>(
    <div className="checkout-page">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
        {
          cartItems.map(item => <CheckoutItem key = {item.id} cartItem = {item} />)
        }
        <div className="total">
          <span>Total: ${TotalPrice}</span>
        </div>
    </div>
  )




const mapStateToProps = createStructuredSelector({
  TotalPrice : totalPrice,
  cartItems : cartItems
})

export default connect(mapStateToProps)(CheckoutPage)