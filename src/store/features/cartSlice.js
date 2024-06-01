import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    loading: false,
    cart: [],
    count: 0
}

const sumItem = (item) => {
    const itemsCounter = item.reduce((count, cart) => count + cart.quantity, 0)
    return itemsCounter
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            if (!state.cart.find(item => item.id === action.payload.id)) {
                state.cart.push({...action.payload, quantity: 1})
            }
            state.count = sumItem(state.cart)
        },
        removeFromCart: (state, action) => {
            const newCart = state.cart.filter(item => item.id !== action.payload.id)
            state.cart = newCart
            state.count = sumItem(newCart)
        },
        increase: (state, action) => {
            const indexI = state.cart.findIndex(item => item.id === action.payload.id)
            state.cart[indexI].quantity++
            state.count = sumItem(state.cart)
        },
        decrease: (state, action) => {
            const indexD = state.cart.findIndex(item => item.id === action.payload.id)
            state.cart[indexD].quantity--
            state.count = sumItem(state.cart)
        }
    }
})
export default cartSlice.reducer

export const {addToCart, decrease, increase, removeFromCart} = cartSlice.actions