import {observer} from "mobx-react";
import React from 'react';
import {PaperProps} from "@mui/material/Paper/Paper";
import {Paper, Stack, Typography} from "@mui/material";


interface IUiTitleProps extends PaperProps {

}

const UiTitle = observer(({...props}: IUiTitleProps) => {
    return (
        <Paper elevation={0} {...props}>
            <Stack alignItems={"center"}>
                <Typography variant={"h3"}>
                    Войти
                </Typography>
            </Stack>
        </Paper>
    )
})

export default UiTitle