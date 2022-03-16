import {observer} from "mobx-react";
import React from 'react';
import {PaperProps} from "@mui/material/Paper/Paper";
import UserGlobalStore from "../../../GlobalStorages/user-storage";
import LogoutAndPersonalCabinet from "./navbar-after-login";
import NavbarBeforeLogin from "./navbar-before-login";
import {Stack} from "@mui/material";


interface INavbarProps extends PaperProps {

}

const Navbar = observer(({}: INavbarProps) => {

    if (!UserGlobalStore.isLogin) {
        return (
            <Stack alignItems={"end"}>
                <NavbarBeforeLogin/>
            </Stack>
        )
    } else {
        return (
            <Stack alignItems={"end"}>
                <LogoutAndPersonalCabinet/>
            </Stack>
        )

    }
})

export default Navbar