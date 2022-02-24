import cartActionsTypes from "./cart-types"
import {addItemCart} from './cart.utils'


const INITAL_STATE = {
    hidden: true,
    cartItems: []
}

const cartReducer = (state = INITAL_STATE , action) => {
    switch(action.type){
        case cartActionsTypes.TOGGLE_CART_HIDDEN : 
            return {
                ...state,
                hidden : !state.hidden,
            }
        
        case cartActionsTypes.ADD_ITEM:
            return {
                ...state,
                cartItems:addItemCart(state.cartItems, action.payload)
            }
            
        default: return state;
    }
}


export default cartReducer



