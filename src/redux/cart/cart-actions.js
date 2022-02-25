import cartActionsTypes from "./cart-types"


export const toggleCartHidden = () =>({
    type: cartActionsTypes.TOGGLE_CART_HIDDEN
})

export const addItem = (item) => ({
    type: cartActionsTypes.ADD_ITEM,
    payload: item
})

export const deleteItem = (item) => ({
    type: cartActionsTypes.DELETE_ITEM,
    payload: item
})

export const changeQuantity = (itemToChangeQuantity, direction) => ({
    type: cartActionsTypes.CHANGE_QUANTITY,
    payload: {itemToChangeQuantity, direction}
})


