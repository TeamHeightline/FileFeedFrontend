import {observer} from "mobx-react";
import React from 'react';
import {PaperProps} from "@mui/material/Paper/Paper";
import {List, Paper, Stack} from "@mui/material";
import FileByIdStore from "../Store/file-by-id-store";
import UIFileImage from "./ui-file-image";
import UIFileAuthor from "./ui-file-author";
import UIFilenameAndCreatedAt from "./ui-filename-and-created-at";
import UIFileDownload from "./ui-file-download";
import UILoading from "./ui-loading";
import DeleteFile from "./ui-delete-file";
import UIDeleteDialog from "./ui-delete-dialog";


interface IFileByIDUIProps extends PaperProps {
    fileStore: FileByIdStore

}

const FileByIDUI = observer(({fileStore, ...props}: IFileByIDUIProps) => {
    if (fileStore.loading) {
        return (
            <UILoading/>
        )
    }
    return (
        <Paper elevation={0} {...props}>
            <UIDeleteDialog fileStore={fileStore}/>
            <Paper elevation={0} sx={{width: 200, height: 394}}>
                <UIFileImage fileStore={fileStore}/>
                <List dense={true}>
                    <UIFileAuthor fileStore={fileStore}/>
                    <UIFilenameAndCreatedAt fileStore={fileStore}/>
                    <Stack justifyContent={"space-between"} direction={"row"}>
                        <UIFileDownload fileStore={fileStore}/>
                        <DeleteFile fileStore={fileStore}/>
                    </Stack>
                </List>
            </Paper>
        </Paper>
    )
})

export default FileByIDUI