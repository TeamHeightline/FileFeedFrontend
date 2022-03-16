import {observer} from "mobx-react";
import React from 'react';
import {PaperProps} from "@mui/material/Paper/Paper";
import LogInButton from "./login-button";
import {useLocation} from "react-router";
import MainPageButton from "./main-page-button";


interface INavbarBeforeLoginProps extends PaperProps {

}

const NavbarBeforeLogin = observer(({}: INavbarBeforeLoginProps) => {
    const location = useLocation()
    if (location.pathname === "/login") {
        return (
            <MainPageButton/>
        )
    }
    return (
        <LogInButton/>
    )
})

export default NavbarBeforeLogin