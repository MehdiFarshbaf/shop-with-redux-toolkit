import {createSlice} from "@reduxjs/toolkit";
import {increament} from "./counterSlice";

const initialState = {
    number: 5
}
const numberSlice = createSlice({
    name: 'number',
    initialState,
    reducers: {
        increamentNumber: (state) => {
            state.number++
        },
        decreamentNumber: (state) => {
            state.number--
        }
    },
    extraReducers: builder => {
        builder.addCase(increament, (state, action) => {
            state.number += action.payload
        })
    }
})

export default numberSlice.reducer

export const {decreamentNumber, increamentNumber} = numberSlice.actions