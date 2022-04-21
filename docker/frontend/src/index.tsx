import React from 'react';
import ReactDOM from 'react-dom';


import App from './App';
import {Provider} from "react-redux";

import {mainStore} from "./store";
import {BrowserRouter} from 'react-router-dom';

const store = mainStore();

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <App/>
            </BrowserRouter>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);


