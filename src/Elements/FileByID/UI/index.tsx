import {observer} from "mobx-react";
import React, {useState} from 'react';
import {PaperProps} from "@mui/material/Paper/Paper";
import {Paper} from "@mui/material";
import FileByIdStore from "../Store/file-by-id-store";
import FileByIDUI from "./ui";


interface IIndexFileByIDProps extends PaperProps {
    id: string
}

const IndexFileByID = observer(({id, ...props}: IIndexFileByIDProps) => {
    const [fileStore] = useState(new FileByIdStore(id))
    return (
        <Paper elevation={0} {...props}>
            <FileByIDUI fileStore={fileStore}/>
        </Paper>
    )
})

export default IndexFileByID