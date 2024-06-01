import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

const initialState = {
    loading: false,
    products: [],
    product: {},
    error: ''
}

const fetchProducts = createAsyncThunk("products/fetchProducts", async () => {
    return fetch('https://fakestoreapi.com/products')
        .then(res => res.json())
        .then(data => data)
})
const fetchProduct = createAsyncThunk("products/detailProduct", async (id) => {
    return fetch(`https://fakestoreapi.com/products/${id}`)
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
        builder.addCase(fetchProduct.pending, state => {
            state.loading = true
        })
        builder.addCase(fetchProduct.fulfilled, (state, action) => {
            state.product = action.payload
            state.loading = false
        })
        builder.addCase(fetchProduct.rejected, (state, action) => {
            state.error = action.error.message
            state.loading = false
        })
    }
})

export default productSlice.reducer
export {fetchProducts, fetchProduct}
