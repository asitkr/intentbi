import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: [],
    reducers: {
        add(state, action) {
            state.push(action.payload);
            localStorage.setItem('cart num', state.length);
            localStorage.setItem('cart product', JSON.stringify(state));
        },
        remove(state, action) {
            return state.filter((item) => item.id !== action.payload);
        },
    },
})

export const { add, remove } = cartSlice.actions;
export default cartSlice.reducer;