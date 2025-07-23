import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: [] // each: { productId, name, price, quantity, img }
    },
    reducers: {
        setCart: (state, action) => {
            state.items = action.payload;
        },
        removeFromCart: (state, action) => {
            const itemId = action.payload; // item._id from MongoDB
            state.items = state.items.filter((item) => item._id !== itemId);
        }
    }
});

export const { setCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
