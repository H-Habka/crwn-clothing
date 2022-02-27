import { combineReducers } from 'redux'
import userReducer from './user/User-reducer'
import cartReducer from './cart/cart-reducer'
import shopReducer from './shop/ShopReducer'
import directoryReducer from './directory/directoryReducer'

import {persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
    key : 'root',
    storage,
    whitelist : ['cart']
}

const rootReducer = combineReducers ({
    user: userReducer,
    cart: cartReducer,
    shop: shopReducer,
    directory: directoryReducer
})

export default persistReducer(persistConfig, rootReducer)