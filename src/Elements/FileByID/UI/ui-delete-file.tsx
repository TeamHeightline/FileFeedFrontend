import {observer} from "mobx-react";
import React from 'react';
import {PaperProps} from "@mui/material/Paper/Paper";
import {IconButton, Paper, Tooltip} from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import FileByIdStore from "../Store/file-by-id-store";

interface IDeleteFileProps extends PaperProps {
    fileStore: FileByIdStore
}

const DeleteFile = observer(({fileStore, ...props}: IDeleteFileProps) => {
    return (
        <Paper elevation={0} {...props}>
            <Tooltip title={"Удалить"}>
                <div>
                    <IconButton
                        onClick={fileStore.openDeleteDialog}
                        disabled={!fileStore.isUserCanDeleteFile}>
                        <DeleteIcon/>
                    </IconButton>
                </div>
            </Tooltip>
        </Paper>
    )
})

export default DeleteFile