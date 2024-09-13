import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../features/cart/cartSlice";
import apiReducer from "../features/api/apiSlice";

export const store = configureStore({
    reducer: {
        cart: cartReducer,
        mens: apiReducer
    }
})