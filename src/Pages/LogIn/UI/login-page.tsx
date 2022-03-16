import {observer} from "mobx-react";
import React, {useEffect} from 'react';
import {PaperProps} from "@mui/material/Paper/Paper";
import {Card, Paper, Stack} from "@mui/material";
import {useNavigate} from "react-router";
import UiTitle from "./ui-title";
import UIEmail from "./ui-email";
import UIPassword from "./ui-password";
import UILoginButton from "./ui-login-button";
import UserGlobalStore from "../../../GlobalStorages/user-storage";


interface ILoginPageProps extends PaperProps {

}

const LoginPage = observer(({...props}: ILoginPageProps) => {
    const navigate = useNavigate();

    function goToMainPage() {
        navigate("/")
    }

    useEffect(() => {
        if (UserGlobalStore.isLogin) {
            goToMainPage()
        }
    }, [UserGlobalStore.isLogin]) // eslint-disable-line

    return (
        <Paper elevation={0} {...props}>

            <Stack alignItems={"center"}>
                <Card variant={"outlined"} sx={{p: 3, width: 300}}>
                    <Stack alignItems={"column"}>
                        <UiTitle/>
                        <UIEmail sx={{mt: 2}}/>
                        <UIPassword sx={{pt: 1}}/>
                        <UILoginButton sx={{mt: 2}}/>
                    </Stack>
                </Card>
            </Stack>
        </Paper>
    )
})

export default LoginPage