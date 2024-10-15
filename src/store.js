import { configureStore } from "@reduxjs/toolkit";
import cartReducer from  './Components/ShoppingCart/CartSlice';

const store = configureStore({
    reducer: {
        cart: cartReducer,
    },
});

export default store;