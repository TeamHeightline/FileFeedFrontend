import {observer} from "mobx-react";
import React from 'react';
import {PaperProps} from "@mui/material/Paper/Paper";
import {Button, Paper} from "@mui/material";
import {useNavigate} from "react-router";


interface ILogInButtonProps extends PaperProps {

}

const LogInButton = observer(({...props}: ILogInButtonProps) => {
    const navigate = useNavigate();

    function goToLoginPage() {
        navigate("/login")
    }

    return (
        <Paper elevation={0} {...props}>
            <Button
                variant={"contained"}
                sx={{zoom: "125%"}}
                onClick={goToLoginPage}
            >
                Войти
            </Button>
        </Paper>
    )
})

export default LogInButton