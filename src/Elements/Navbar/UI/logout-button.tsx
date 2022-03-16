import {observer} from "mobx-react";
import React from 'react';
import {PaperProps} from "@mui/material/Paper/Paper";
import {Button, Paper} from "@mui/material";
import {useNavigate} from "react-router";


interface ILogOutButtonProps extends PaperProps {

}

const LogOutButton = observer(({...props}: ILogOutButtonProps) => {
    const navigate = useNavigate();

    function goToLogoutPage() {
        navigate("/logout")
    }

    return (
        <Paper elevation={0} {...props}>
            <Button
                variant={"outlined"}
                color={"error"}
                sx={{zoom: "125%"}}
                onClick={goToLogoutPage}
            >
                Выйти
            </Button>
        </Paper>
    )
})

export default LogOutButton