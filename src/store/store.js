import {configureStore} from "@reduxjs/toolkit";

import {logger} from "redux-logger/src";


import counterReducer from './features/counterSlice'
import numberReducer from './features/numberSlice'
import usersReducer from './features/usersSlice'
import productsReducer from './features/productSlice'

const store = configureStore({
    reducer: {
        counter: counterReducer,
        number: numberReducer,
        users: usersReducer,
        products: productsReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
})

export default store