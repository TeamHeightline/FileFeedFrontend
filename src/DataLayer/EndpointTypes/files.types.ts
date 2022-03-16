import {UserWithoutPassword} from "./user.types";

export type allFiles = {
    allFilesID: string[]
}

export type FileEntity = {
    id: string,
    mimetype: string,
    destination: string,
    filename: string,
    created_at: Date,
    user: UserWithoutPassword
}

export type FileDyID = {
    fileEntity: FileEntity
}

export type UploadFileReturnType = {
    message: string,
    data: FileEntity
}

export type MyFilesIDArray = {
    myFilesIDArray: string[]
}

export type DeleteFileReturnType = {
    message: string
}