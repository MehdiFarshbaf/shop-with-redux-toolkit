import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

const initialState = {
    loading: false,
    products: [],
    error: ''
}

const fetchProducts = createAsyncThunk("products/fetchProducts", () => {
    return fetch('https://fakestoreapi.com/products')
        .then(res => res.json())
        .then(data => data)
})

const productSlice = createSlice({
    name: 'products',
    initialState,
    extraReducers: builder => {
        builder.addCase(fetchProducts.pending, state => {
            state.loading = true
        })
        builder.addCase(fetchProducts.fulfilled, (state, action) => {
            state.products = action.payload
            state.loading = false
        })
        builder.addCase(fetchProducts.rejected, (state, action) => {
            state.error = action.error.message
            state.loading = false
        })
    }
})

export default productSlice.reducer
export {fetchProducts}
