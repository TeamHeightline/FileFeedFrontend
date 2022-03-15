import {observer} from "mobx-react";
import React from 'react';
import {PaperProps} from "@mui/material/Paper/Paper";
import {Button, Paper} from "@mui/material";


interface ILogInButtonProps extends PaperProps {

}

const LogInButton = observer(({...props}: ILogInButtonProps) => {
    return (
        <Paper elevation={0} {...props}>
            <Button variant={"contained"} sx={{zoom: "125%"}}>
                Войти
            </Button>
        </Paper>
    )
})

export default LogInButton