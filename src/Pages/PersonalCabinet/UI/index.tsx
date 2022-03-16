import {observer} from "mobx-react";
import React, {useEffect} from 'react';
import {PaperProps} from "@mui/material/Paper/Paper";
import {Paper} from "@mui/material";
import PCabinetUI from "./ui";
import {useNavigate} from "react-router";
import UserGlobalStore from "../../../GlobalStorages/user-storage";


interface IPCabinetIndexProps extends PaperProps {

}

const PCabinetIndex = observer(({...props}: IPCabinetIndexProps) => {
    const navigate = useNavigate();
    useEffect(() => {
        if (!UserGlobalStore.isLogin) {
            navigate("/")
        }
    }, [UserGlobalStore.isLogin])

    return (
        <Paper elevation={0} {...props}>
            <PCabinetUI/>
        </Paper>
    )
})

export default PCabinetIndex