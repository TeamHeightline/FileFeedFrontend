import {observer} from "mobx-react";
import React from 'react';
import {PaperProps} from "@mui/material/Paper/Paper";
import {Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Paper} from "@mui/material";
import FileByIdStore from "../Store/file-by-id-store";


interface IUIDeleteDialogProps extends PaperProps {
    fileStore: FileByIdStore
}

const UIDeleteDialog = observer(({fileStore, ...props}: IUIDeleteDialogProps) => {
    return (
        <Paper elevation={0} {...props}>
            <Dialog
                open={fileStore.isShowDeleteDialog}
                onClose={fileStore.closeDeleteDialog}
            >
                <DialogTitle>
                    {"Удалить файл?"}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Если вы согласитесь, файл {fileStore.fileData?.filename} будет
                        удален, это действие отменить нельзя
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={fileStore.onDeleteFileButtonClick}>Удалить</Button>
                    <Button onClick={fileStore.closeDeleteDialog} autoFocus>
                        Закрыть
                    </Button>
                </DialogActions>
            </Dialog>
        </Paper>
    )
})

export default UIDeleteDialog