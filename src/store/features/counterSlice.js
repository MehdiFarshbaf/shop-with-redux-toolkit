import {createSlice} from "@reduxjs/toolkit";
import {decreamentNumber, increamentNumber} from "./numberSlice";

const initialState = {
    count: 0
}
const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increament: (state, action) => {
            state.count += action.payload
        },
        decreament: (state, action) => {
            state.count -= action.payload
        }
    },
    extraReducers: builder => {
        builder.addCase(increamentNumber, (state) => {
            state.count++
        })
        builder.addCase(decreamentNumber, state => {
            state.count--
        })
    }
})

export default counterSlice.reducer
export const {increament, decreament} = counterSlice.actions