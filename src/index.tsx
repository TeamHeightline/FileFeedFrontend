import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from "react-router-dom";

import App from './App';
import reportWebVitals from './reportWebVitals';
import {ThemeProvider} from "@mui/material";
import {globalTheme} from "./global-theme";

ReactDOM.render(
    <React.StrictMode>
        <ThemeProvider theme={globalTheme}>
            <BrowserRouter>
                <App/>
            </BrowserRouter>
        </ThemeProvider>
    </React.StrictMode>,
    document.getElementById('root')
);

reportWebVitals();
