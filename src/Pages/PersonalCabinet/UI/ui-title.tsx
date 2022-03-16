import {observer} from "mobx-react";
import React from 'react';
import {PaperProps} from "@mui/material/Paper/Paper";
import {Paper, Typography} from "@mui/material";


interface IUITitleProps extends PaperProps {

}

const UITitle = observer(({...props}: IUITitleProps) => {
    return (
        <Paper elevation={0} {...props}>
            <Typography variant={"h1"}>
                Личный кабинет
            </Typography>
        </Paper>
    )
})

export default UITitle