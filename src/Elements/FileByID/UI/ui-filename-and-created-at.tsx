import {observer} from "mobx-react";
import React from 'react';
import {PaperProps} from "@mui/material/Paper/Paper";
import {ListItem, ListItemText} from "@mui/material";
import FileByIdStore from "../Store/file-by-id-store";


interface IUIFilenameAndCreatedAtProps extends PaperProps {
    fileStore: FileByIdStore
}

const UIFilenameAndCreatedAt = observer(({fileStore}: IUIFilenameAndCreatedAtProps) => {
    return (
        <ListItem>
            <ListItemText
                primary={fileStore.fileData?.filename.slice(0, 23)}
                secondary={fileStore.beautifulUploadedDate}
            />
        </ListItem>
    )
})

export default UIFilenameAndCreatedAt