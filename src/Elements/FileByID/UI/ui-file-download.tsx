import {observer} from "mobx-react";
import React from 'react';
import {PaperProps} from "@mui/material/Paper/Paper";
import {Fab, ListItem} from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download";
import FileByIdStore from "../Store/file-by-id-store";
import axios from "axios";
import fileDownload from 'js-file-download'


interface IUIFileDownloadProps extends PaperProps {
    fileStore: FileByIdStore
}

const UIFileDownload = observer(({fileStore}: IUIFileDownloadProps) => {
    const handleDownload = () => {
        if (fileStore.fileData?.destination) {
            const destinationAfterSplit = fileStore.fileData?.destination.split("/")
            const filename = destinationAfterSplit[destinationAfterSplit.length - 1]
            axios.get(fileStore.fileData.destination, {
                responseType: 'blob',
            })
                .then((res) => {
                    fileDownload(res.data, filename)
                })
        }
    }
    return (
        <ListItem>
            <Fab variant="extended" color="primary" size="small"
                 onClick={handleDownload}
            >
                <DownloadIcon/>
                Скачать
            </Fab>
        </ListItem>
    )
})

export default UIFileDownload