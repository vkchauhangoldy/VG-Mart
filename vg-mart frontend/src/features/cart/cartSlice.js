import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { addedToCartToast, removedFromCartToast } from "../../utils/toast/toastMsg";

const initialState = {
    cart: localStorage.getItem("cart")
        ? JSON.parse(localStorage.getItem("cart"))
        : [],
    total: localStorage.getItem("total")
        ? JSON.parse(localStorage.getItem("total"))
        : 0,
};

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addProduct: (state, action) => {
            const item = state.cart.find((item) => item.id === action.payload.id);
            if (item) {
                item.quantity += action.payload.quantity || 1;
            }
            else {
                state.cart.push({ ...action.payload, quantity: action.payload.quantity || 1 });
            }
            state.total += action.payload.price * (action.payload.quantity || 1);
            localStorage.setItem("total", JSON.stringify(state.total));
            localStorage.setItem("cart", JSON.stringify(state.cart));
            toast(addedToCartToast);
        },
        removeProduct: (state, action) => {
            const item = state.cart.find((item) => item.id === action.payload.id);
            if (item.quantity > 1) {
                item.quantity -= 1;
                state.total -= item.price;
            }
            else {
                state.cart = state.cart.filter((item) => item.id !== action.payload.id);
                state.total -= item.price;
            }
            localStorage.setItem("cart", JSON.stringify(state.cart));
            localStorage.setItem("total", JSON.stringify(state.total));
            toast(removedFromCartToast);

        },
    },
});
export const { addProduct, removeProduct } = cartSlice.actions;
export default cartSlice.reducer;
