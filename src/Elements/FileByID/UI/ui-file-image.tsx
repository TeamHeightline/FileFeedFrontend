import {observer} from "mobx-react";
import React from 'react';
import {PaperProps} from "@mui/material/Paper/Paper";
import {Paper} from "@mui/material";
import {FileIcon} from "react-file-icon";
import FileByIdStore from "../Store/file-by-id-store";

interface IUIFileImageProps extends PaperProps {
    fileStore: FileByIdStore
}

const UIFileImage = observer(({fileStore, ...props}: IUIFileImageProps) => {
    return (
        <Paper elevation={0} {...props}>
            <FileIcon
                extension={fileStore.shortMimetype}
                color={"orange"} type={"binary"}/>
        </Paper>
    )
})

export default UIFileImage