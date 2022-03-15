import {observer} from "mobx-react";
import React from 'react';
import {PaperProps} from "@mui/material/Paper/Paper";
import {Grid, Paper, Stack} from "@mui/material";
import FileByID from "../../Elements/FileByID/file-by-id";


interface IFileFolderProps extends PaperProps {

}

const FileFolder = observer(({...props}: IFileFolderProps) => {
    return (
        <Paper elevation={0} {...props}>
            <Grid container justifyContent={"space-evenly"} spacing={2}>
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => {
                    return (
                        <Grid key={1} item xs={12} md={3}>
                            <Stack alignItems={"center"}>
                                <FileByID/>
                            </Stack>
                        </Grid>
                    )
                })}
            </Grid>

        </Paper>
    )
})

export default FileFolder