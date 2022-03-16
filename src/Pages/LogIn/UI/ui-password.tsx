import {observer} from "mobx-react";
import React from 'react';
import {PaperProps} from "@mui/material/Paper/Paper";
import {Paper, TextField} from "@mui/material";
import LoginPageObject from "../Store/login-page-store";


interface IUIPasswordProps extends PaperProps {

}

const UIPassword = observer(({...props}: IUIPasswordProps) => {
    return (
        <Paper elevation={0} {...props}>
            <TextField
                value={LoginPageObject.password || ""}
                onChange={LoginPageObject.changePassword}
                type="password"
                required
                fullWidth
                variant={"outlined"}
                label={"Пароль"}
            />
        </Paper>
    )
})

export default UIPassword