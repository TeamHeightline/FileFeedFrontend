import {observer} from "mobx-react";
import React from 'react';
import {PaperProps} from "@mui/material/Paper/Paper";
import {Chip, Paper} from "@mui/material";
import UserGlobalStore from "../../../GlobalStorages/user-storage";


interface IUIUserEmailProps extends PaperProps {

}

const UIUserEmail = observer(({...props}: IUIUserEmailProps) => {
    return (
        <Paper elevation={0} {...props}>
            <Chip
                sx={{zoom: "200%"}}
                label={UserGlobalStore.userData?.email}
                size={"medium"}/>
        </Paper>
    )
})

export default UIUserEmail