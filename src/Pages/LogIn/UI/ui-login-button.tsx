import {observer} from "mobx-react";
import React from 'react';
import {PaperProps} from "@mui/material/Paper/Paper";
import {Button, Paper} from "@mui/material";
import LoginPageObject from "../Store/login-page-store";


interface IUILoginButtonProps extends PaperProps {

}

const UILoginButton = observer(({...props}: IUILoginButtonProps) => {
    return (
        <Paper elevation={0} {...props}>
            <Button fullWidth variant={"outlined"} onClick={LoginPageObject.onLoginButtonClick}>
                Войти
            </Button>
        </Paper>
    )
})

export default UILoginButton