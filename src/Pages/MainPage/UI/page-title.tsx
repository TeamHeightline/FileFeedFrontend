import {observer} from "mobx-react";
import React from 'react';
import {PaperProps} from "@mui/material/Paper/Paper";
import {Card, Typography} from "@mui/material";


interface IPageTitleProps extends PaperProps {

}

const PageTitle = observer(({...props}: IPageTitleProps) => {
    return (
        <Card variant={"outlined"}  {...props} sx={{p: 3}}>
            <Typography variant={"h1"} sx={{fontWeight: 'bold', userSelect: "none"}}>
                FileFeeeed
            </Typography>
        </Card>
    )
})

export default PageTitle