import {observer} from "mobx-react";
import React from 'react';
import {PaperProps} from "@mui/material/Paper/Paper";
import {Chip, Fab, List, ListItem, ListItemText, Paper, Tooltip} from "@mui/material";
import {defaultStyles, FileIcon} from 'react-file-icon';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import DownloadIcon from '@mui/icons-material/Download';


interface IFileByIDProps extends PaperProps {

}

const FileByID = observer(({...props}: IFileByIDProps) => {
    return (
        <Paper elevation={0} {...props}>
            <Paper elevation={0} sx={{height: 400, width: 200}}>
                <FileIcon extension="doxad" color={"orange"} type={"binary"}/>
                <List dense={true}>
                    <ListItem>
                        <Tooltip title={"Тимофейadasdasdasd@mail.ru"}>
                            <Chip
                                size={"small"}
                                label={"Тимофейadasdasdasd@mail.ru"}
                                icon={<AccountCircleIcon/>}/>
                        </Tooltip>
                    </ListItem>
                    <ListItem>
                        <ListItemText
                            primary="Полное название файла"
                            secondary={"02.02.2022"}
                        />
                    </ListItem>
                    <ListItem>
                        <Fab variant="extended" color="primary" size="small">
                            <DownloadIcon/>
                            Скачать
                        </Fab>
                    </ListItem>
                </List>
            </Paper>
        </Paper>
    )
})

export default FileByID