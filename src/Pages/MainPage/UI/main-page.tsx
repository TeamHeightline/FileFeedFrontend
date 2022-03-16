import {observer} from "mobx-react";
import React from 'react';
import {PaperProps} from "@mui/material/Paper/Paper";
import {Paper, Stack} from "@mui/material";
import PageTitle from "./page-title";
import FileFolder from "../../../Elements/FileFolder/UI/file-folder";
import FileFolderObject from "../../../Elements/FileFolder/Store/file-folder-store";


interface IMainPageProps extends PaperProps {

}

const MainPage = observer(({...props}: IMainPageProps) => {
    return (
        <Paper elevation={0} {...props}>
            <Stack alignItems={"center"} sx={{pt: 2}}>
                <PageTitle/>
            </Stack>
            <FileFolder sx={{pt: 4}} filesIDArray={FileFolderObject.fileIDsForPage}/>
        </Paper>
    )
})

export default MainPage