import {observer} from "mobx-react";
import React from 'react';
import {PaperProps} from "@mui/material/Paper/Paper";
import {Button, Paper} from "@mui/material";
import {useNavigate} from "react-router";


interface IMainPageButtonProps extends PaperProps {

}

const MainPageButton = observer(({...props}: IMainPageButtonProps) => {
    const navigate = useNavigate();

    function goToMainPage() {
        navigate("/")
    }

    return (
        <Paper elevation={0} {...props}>
            <Button variant={"contained"}
                    sx={{zoom: "125%"}}
                    onClick={goToMainPage}>
                На главную
            </Button>
        </Paper>
    )
})

export default MainPageButton