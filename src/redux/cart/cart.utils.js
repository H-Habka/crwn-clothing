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



export const deleteItemCart = (cartItems, cartItemToDelete) => {
    return (
        cartItems.filter(item => item.id !== cartItemToDelete.id)
    )
}

export const changeQuantity = (cartItems,{itemToChangeQuantity, direction}) => {
    return (cartItems.map(item => {
        if(item.id === itemToChangeQuantity.id){
            let newQuantity = (direction === 'inc')? item.quantity + 1: item.quantity - 1
            return {...item , quantity : (newQuantity<=0)?0:newQuantity}
        }else{
            return item
        }
    }).filter(item => item.quantity !== 0))
}

