import {observer} from "mobx-react";
import React from 'react';
import {PaperProps} from "@mui/material/Paper/Paper";
import {List, ListItem, Paper, Skeleton} from "@mui/material";


interface IUILoadingProps extends PaperProps {

}

const UILoading = observer(({}: IUILoadingProps) => {
    return (
        <Paper elevation={0} sx={{width: 200, height: 394}}>
            <Skeleton sx={{height: 240}} variant={"text"}/>
            <List dense={true}>
                <ListItem>
                    <Skeleton sx={{height: 24, width: "100%"}} variant={"text"}/>
                </ListItem>
                <ListItem>
                    <Skeleton sx={{height: 40, width: "100%"}} variant={"text"}/>
                </ListItem>
                <ListItem>
                    <Skeleton sx={{height: 34, width: "100%"}} variant={"text"}/>
                </ListItem>
            </List>
        </Paper>
    )
})

export default UILoading