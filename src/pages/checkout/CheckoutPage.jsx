import './CheckoutPage.scss'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { totalPrice, cartItems } from '../../redux/cart/cart-selectors'
import CheckoutItem from '../../components/checkout-item/CheckoutItem'
import StripeButton from '../../components/stripe-button/stripe-button'


const CheckoutPage = ({TotalPrice, cartItems}) =>(
    <div className="lg:px-32 px-2 py-6 min-w-[590px]">
      <div className="grid grid-cols-5 justify-around">
          <span className="text-center">Product</span>
          <span className="text-center">Description</span>
          <span className="text-center">Quantity</span>
          <span className="text-center">Price</span>
          <span className="text-center">Remove</span>
      </div>
      <div className="flex flex-col gap-2">
        {
          cartItems.map(item => <CheckoutItem key = {item.id} cartItem = {item} />)
        }
      </div>
        <div className="">
          <span>Total: ${TotalPrice}</span>
        </div>
        <StripeButton price={TotalPrice}/>
    </div>
  )




const mapStateToProps = createStructuredSelector({
  TotalPrice : totalPrice,
  cartItems : cartItems
})

export default connect(mapStateToProps)(CheckoutPage)