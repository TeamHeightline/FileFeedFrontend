import {observer} from "mobx-react";
import React from 'react';
import {PaperProps} from "@mui/material/Paper/Paper";
import {Paper} from "@mui/material";
import PCabinetUI from "./ui";


interface IPCabinetIndexProps extends PaperProps {

}

const PCabinetIndex = observer(({...props}: IPCabinetIndexProps) => {
    return (
        <Paper elevation={0} {...props}>
            <PCabinetUI/>
        </Paper>
    )
})

export default PCabinetIndex