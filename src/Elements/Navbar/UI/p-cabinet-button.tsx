import {observer} from "mobx-react";
import React from 'react';
import {PaperProps} from "@mui/material/Paper/Paper";
import {Button, Paper} from "@mui/material";
import {useNavigate} from "react-router";


interface IPCabinetButtonProps extends PaperProps {

}

const PCabinetButton = observer(({...props}: IPCabinetButtonProps) => {
    const navigate = useNavigate();

    function goToPersonalCabinet() {
        navigate("/pcabinet")
    }

    return (
        <Paper elevation={0} {...props}>
            <Button
                variant={"contained"}
                sx={{zoom: "125%"}}
                onClick={goToPersonalCabinet}
            >
                Личный кабинет
            </Button>
        </Paper>
    )
})

export default PCabinetButton