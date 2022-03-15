import React from 'react';
import MainPage from "./Pages/MainPage/main-page";
import {Routes, Route} from "react-router-dom";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

function App() {
    return (
        <Routes>
            <Route path="/" element={<MainPage/>}/>
        </Routes>
    );
}

export default App;
