import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './features/cart/cartReducer'
import navbarReducer from './features/navbar/navbarReducer'
import productsReducer from './features/products/productsReducer'
import editUserReducer from './features/user/editUserReducer'
import userReducer from './features/user/userReducer'

export const store = configureStore({
  reducer: {
    products: productsReducer,
    cart: cartReducer,
    user: userReducer,
    navbar: navbarReducer,
    editUser: editUserReducer,
  },
})
