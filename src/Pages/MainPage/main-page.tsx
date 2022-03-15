import {observer} from "mobx-react";
import React from 'react';
import {PaperProps} from "@mui/material/Paper/Paper";
import {Paper, Stack} from "@mui/material";
import PageTitle from "./page-title";
import LogInButton from "./login-button";
import FileFolder from "../FileFolder/FileFolder";


interface IMainPageProps extends PaperProps {

}

const MainPage = observer(({...props}: IMainPageProps) => {
    return (
        <Paper elevation={0} {...props}>
            <Stack alignItems={"end"}>
                <LogInButton/>
            </Stack>
            <Stack alignItems={"center"} sx={{pt: 2}}>
                <PageTitle/>
            </Stack>
            <FileFolder sx={{pt: 4}}/>
        </Paper>
    )
})

export default MainPage