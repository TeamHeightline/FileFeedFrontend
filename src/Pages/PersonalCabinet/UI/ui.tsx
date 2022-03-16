import {observer} from "mobx-react";
import React from 'react';
import {PaperProps} from "@mui/material/Paper/Paper";
import {Paper, Stack} from "@mui/material";
import UITitle from "./ui-title";
import UIUserEmail from "./ui-user-email";
import UIMyFiles from "./ui-my-files";


interface IPCabinetUIProps extends PaperProps {

}

const PCabinetUI = observer(({...props}: IPCabinetUIProps) => {
    return (
        <Paper elevation={0} {...props}>
            <Stack alignItems={"center"}>
                <UITitle/>
                <UIUserEmail/>
            </Stack>
            <UIMyFiles/>

        </Paper>
    )
})

export default PCabinetUI