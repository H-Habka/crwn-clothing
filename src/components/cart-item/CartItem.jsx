import './CartItem.scss'



const CartItem = ({cartItem}) =>  {
    const {name, imageUrl, price,quantity} = cartItem 
    return (
    <div className='cart-item'>
        <img src = {`${imageUrl}`} className='cart-item-image' alt='item'/>
        <div className='cart-item-content'> 
            <div className='cart-item-name'>{name}</div>
            <div className='cart-item-count'>{quantity} X {price}$</div>
        </div>
        
    </div>
  )}

export default CartItem