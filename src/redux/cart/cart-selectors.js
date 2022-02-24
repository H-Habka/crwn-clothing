import { createSelector } from "reselect";

const cart = state => state.cart

export const cartItems = createSelector(
    [cart],
    cart => cart.cartItems
)

export const cartItemsHiddenState = createSelector(
    [cart],
    cart => cart.hidden
)

export const cartItemsCount = createSelector(
    [cartItems],
    cartItems => cartItems.reduce((inital, item)=>{
        return inital += item.quantity
    },0)
)

export const totalPrice = createSelector(
    [cartItems],
    cartItems => cartItems.reduce((inital, item)=>{
        return inital += item.quantity * item.price
    },0)
)