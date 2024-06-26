import React from 'react';
import {createRoot} from 'react-dom/client';
import App from './App';
import {Provider} from "react-redux";
import store from "./store/store";
import {ToastContainer} from "react-toastify";

// styles
import 'react-toastify/dist/ReactToastify.css';
import './assets/styles/styles.scss'
import {BrowserRouter} from "react-router-dom";

const root = createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <Provider store={store}>
            <App/>
            <ToastContainer/>
        </Provider>
    </BrowserRouter>
);
