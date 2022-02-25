import './CheckoutItem.scss'
import { connect } from 'react-redux'
import { deleteItem } from '../../redux/cart/cart-actions'
import { changeQuantity } from '../../redux/cart/cart-actions'

const CheckoutItem = ({cartItem, deleteItem, changeQuantity}) =>{
    const {name, imageUrl, price, quantity} = cartItem
    return (
    <div className="checkout-item">
        <div className="image-container">
            <img src={imageUrl} alt='item'/>
        </div>
        <span className='name'>{name}</span>
        <span className='quantity'>
            <span className = "Arrows"onClick={() => changeQuantity(cartItem,'dec')}>&#10094;</span>
            {quantity}
            <span className = "Arrows"onClick={() => changeQuantity(cartItem,'inc')}>&#10095;</span>
        </span>
        <span className='price'>{price}</span>
        <div className='remove-button' onClick={() => deleteItem(cartItem)}>&#10005;</div>
    </div>
  )}



const mapDispatchToProps = (dispatch) => ({
    deleteItem : (itemToDelete) => dispatch(deleteItem(itemToDelete)),
    changeQuantity : (itemToChangeQuantity,direction) => dispatch(changeQuantity(itemToChangeQuantity,direction)),
})



export default connect(null,mapDispatchToProps)(CheckoutItem)