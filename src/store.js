import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './components/ShoppingCart/CartSlice'

const store = configureStore({
    reducer: {
        cart: cartReducer,
    },
});

export default store;