export const addItemCart =(cartItems, cartItemToAdd) =>{
    const itemFind = cartItems.find(item=>item.id===cartItemToAdd.id)
    if(itemFind){
        return cartItems.map(cartItem=>(
            cartItem.id===cartItemToAdd.id?{...cartItem , quantity : cartItem.quantity + 1}:cartItem
        ))
    }else{
        return [...cartItems , {...cartItemToAdd , quantity : 1}]
    }
}

