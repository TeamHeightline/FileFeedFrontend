import {observer} from "mobx-react";
import React from 'react';
import {PaperProps} from "@mui/material/Paper/Paper";
import {Paper} from "@mui/material";
import PCabinetObject from "../Store/p-cabinet-store";
import FileFolder from "../../FileFolder/UI/file-folder";


interface IUIMyFilesProps extends PaperProps {

}

const UIMyFiles = observer(({...props}: IUIMyFilesProps) => {
    return (
        <Paper elevation={0} {...props}>
            <FileFolder sx={{pt: 4}} filesIDArray={PCabinetObject.myFilesIDArrayForUI}/>
        </Paper>
    )
})

export default UIMyFiles