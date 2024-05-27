import {configureStore} from "@reduxjs/toolkit";

import {logger} from "redux-logger/src";


import counterReducer from './features/counterSlice'
import numberReducer from './features/numberSlice'
import usersReducer from './features/usersSlice'


const store = configureStore({
    reducer: {
        counter: counterReducer,
        number: numberReducer,
        users: usersReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
})

export default store