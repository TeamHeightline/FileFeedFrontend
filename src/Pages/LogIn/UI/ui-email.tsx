import {observer} from "mobx-react";
import React from 'react';
import {PaperProps} from "@mui/material/Paper/Paper";
import {Paper, TextField} from "@mui/material";
import LoginPageObject from "../Store/login-page-store";


interface IUIEmailProps extends PaperProps {

}

const UIEmail = observer(({...props}: IUIEmailProps) => {
    return (
        <Paper elevation={0} {...props}>
            <TextField
                value={LoginPageObject.email || ""}
                onChange={LoginPageObject.changeEmail}
                type="email"
                required
                fullWidth
                variant={"outlined"}
                label={"Email"}/>
        </Paper>
    )
})

export default UIEmail