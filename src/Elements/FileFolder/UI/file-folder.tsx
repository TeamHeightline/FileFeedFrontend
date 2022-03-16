import {observer} from "mobx-react";
import React from 'react';
import {PaperProps} from "@mui/material/Paper/Paper";
import {Grid, Paper, Stack} from "@mui/material";
import IndexFileByID from "../../FileByID/UI";
import UploadFile from "./upload-file";


interface IFileFolderProps extends PaperProps {
    filesIDArray: string[]

}

const FileFolder = observer(({filesIDArray, ...props}: IFileFolderProps) => {
    return (
        <Paper elevation={0} {...props}>
            <Stack alignItems={"center"}>
                <UploadFile/>
            </Stack>

            <Grid container justifyContent={"space-evenly"} spacing={2} sx={{pt: 2}}>
                {filesIDArray?.map((id) => {
                    return (
                        <Grid key={id + "FileByID"} item xs={12} md={3}>
                            <Stack alignItems={"center"}>
                                <IndexFileByID id={id}/>
                            </Stack>
                        </Grid>
                    )
                })}
            </Grid>

        </Paper>
    )
})

export default FileFolder