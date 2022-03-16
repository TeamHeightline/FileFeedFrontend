import React from 'react';
import MainPage from "./Pages/MainPage/UI/main-page";
import {Routes, Route} from "react-router-dom";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import LoginPage from "./Pages/LogIn/UI/login-page";
import Logout from "./Pages/Logout/UI/logout";
import PCabinetIndex from "./Pages/PersonalCabinet/UI";
import Navbar from "./Elements/Navbar/UI/navbar";


function App() {
    return (
        <>
            <Navbar/>
            <Routes>
                <Route path="/" element={<MainPage/>}/>
                <Route path={"/login"} element={<LoginPage/>}/>
                <Route path={"/logout"} element={<Logout/>}/>
                <Route path={"/pcabinet"} element={<PCabinetIndex/>}/>
            </Routes>
        </>
    );
}

export default App;
