import {observer} from "mobx-react";
import React from 'react';
import {PaperProps} from "@mui/material/Paper/Paper";
import {Chip, ListItem, Tooltip} from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import FileByIdStore from "../Store/file-by-id-store";


interface IUIFileAuthorProps extends PaperProps {
    fileStore: FileByIdStore
}

const UIFileAuthor = observer(({fileStore,}: IUIFileAuthorProps) => {
    return (
        <ListItem>
            <Tooltip title={fileStore.fileData?.user?.email || ""}>
                <Chip
                    id={"file-author"}
                    size={"small"}
                    label={fileStore.fileData?.user?.email}
                    icon={<AccountCircleIcon/>}/>
            </Tooltip>
        </ListItem>
    )
})

export default UIFileAuthor