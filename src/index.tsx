import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './1App/App';
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import {setupStore} from "./1App/Providers/StoreProvider/config/store";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
    <Provider store={setupStore()}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
);