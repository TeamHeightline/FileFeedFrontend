import {observer} from "mobx-react";
import React from 'react';
import {PaperProps} from "@mui/material/Paper/Paper";
import {Paper, Stack} from "@mui/material";
import {useLocation} from "react-router";
import MainPageButton from "./main-page-button";
import PCabinetButton from "./p-cabinet-button";
import LogOutButton from "./logout-button";


interface ILogoutAndPersonalCabinetProps extends PaperProps {

}

const LogoutAndPersonalCabinet = observer(({...props}: ILogoutAndPersonalCabinetProps) => {
    const location = useLocation()

    return (
        <Paper elevation={0} {...props}>
            <Stack direction={"row"} spacing={2}>
                {location.pathname === "/pcabinet" ?
                    <MainPageButton/> :
                    <PCabinetButton/>}
                <LogOutButton/>
            </Stack>
        </Paper>
    )
})

export default LogoutAndPersonalCabinet