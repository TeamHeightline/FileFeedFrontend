import {observer} from "mobx-react";
import React, {useEffect} from 'react';
import {PaperProps} from "@mui/material/Paper/Paper";
import {Paper} from "@mui/material";
import UserGlobalStore from "../../../GlobalStorages/user-storage";
import {useNavigate} from "react-router";


interface ILogoutProps extends PaperProps {

}

const Logout = observer(({...props}: ILogoutProps) => {
    const navigate = useNavigate();

    function goToMainPage() {
        navigate("/")
    }

    useEffect(() => {
        UserGlobalStore.logout()
    })
    useEffect(() => {
        if (!UserGlobalStore.isLogin) {
            goToMainPage()
        }
    }, [UserGlobalStore.isLogin]) // eslint-disable-line
    return (
        <Paper elevation={0} {...props}>

        </Paper>
    )
})

export default Logout