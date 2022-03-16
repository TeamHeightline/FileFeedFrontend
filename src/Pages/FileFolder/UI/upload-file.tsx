import {observer} from "mobx-react";
import React from 'react';
import {PaperProps} from "@mui/material/Paper/Paper";
import {Button, Paper} from "@mui/material";
import UploadIcon from '@mui/icons-material/Upload';
import FileFolderObject from "../Store/file-folder-store";

interface IUploadFileProps extends PaperProps {

}

const UploadFile = observer(({...props}: IUploadFileProps) => {
    return (
        <Paper elevation={0} {...props}>
            <input
                onChange={FileFolderObject.onFileSelect}
                style={{display: 'none'}}
                id="raised-button-file"
                multiple={false}
                type="file"
            />
            <label htmlFor="raised-button-file">
                <Button component="span"
                        startIcon={<UploadIcon/>}>
                    Загрузить
                </Button>
            </label>
        </Paper>
    )
})

export default UploadFile