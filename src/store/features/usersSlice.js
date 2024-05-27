import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

const initialState = {
    loading: false,
    users: [],
    error: ''
}

const getUsers = createAsyncThunk("users/getUsers", () => {
    return fetch('https://fakestoreapi.com/users').then(res => res.json()).then(data => data)
})

const usersSlice = createSlice({
    name: 'users',
    initialState,
    extraReducers: builder => {
        builder.addCase(getUsers.pending, state => {
            state.loading = true
        })
        builder.addCase(getUsers.fulfilled, (state, action) => {
            state.users = action.payload
            state.loading = false
        })
        builder.addCase(getUsers.rejected, (state, action) => {
            state.users = []
            state.error = action.error.message
            state.loading = false
        })
    }
})

export default usersSlice.reducer
export {getUsers}