import './CheckoutItem.scss'
import { connect } from 'react-redux'
import { deleteItem } from '../../redux/cart/cart-actions'
import { changeQuantity } from '../../redux/cart/cart-actions'

const CheckoutItem = ({cartItem, deleteItem, changeQuantity}) =>{
    const {name, imageUrl, price, quantity} = cartItem
    return (
    <div className="grid grid-cols-5  items-center text-center">
        <div className="w-28 justify-self-center">
            <img src={imageUrl} alt='item'/>
        </div>
        <span className=''>{name}</span>
        <span className=''>
            <span className = "" onClick={() => changeQuantity(cartItem,'dec')}>&#10094;</span>
            {quantity}
            <span className = "" onClick={() => changeQuantity(cartItem,'inc')}>&#10095;</span>
        </span>
        <span className=''>{price}</span>
        <div className='' onClick={() => deleteItem(cartItem)}>&#10005;</div>
    </div>
  )}



const mapDispatchToProps = (dispatch) => ({
    deleteItem : (itemToDelete) => dispatch(deleteItem(itemToDelete)),
    changeQuantity : (itemToChangeQuantity,direction) => dispatch(changeQuantity(itemToChangeQuantity,direction)),
})



export default connect(null,mapDispatchToProps)(CheckoutItem)