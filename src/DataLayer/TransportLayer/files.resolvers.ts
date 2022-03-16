import api from "./config";
import {
    allFiles,
    DeleteFileReturnType,
    FileDyID,
    MyFilesIDArray,
    UploadFileReturnType
} from "../EndpointTypes/files.types";

export async function getAllFilesID() {
    return await api.get<allFiles>('file/all')
        .then((res) => res.data.allFilesID)
}

export async function getFileByID(id) {
    return await api.get<FileDyID>('file/' + id)
        .then((res) => res.data.fileEntity)
}

export async function uploadFileByFormData(formData) {
    return await api.post<UploadFileReturnType>("file/upload", formData)
        .then((res) => res.data)
}

export async function uploadFileByFile(file) {
    const formData = new FormData();
    formData.append(
        "file",
        file,
        file.name
    );
    const uploadMessage = await uploadFileByFormData(formData)
    return uploadMessage.message === "Upload was successful"
}

export async function myFiles() {
    return await api.get<MyFilesIDArray>("/file/my")
        .then((res) => res.data.myFilesIDArray)
}

export async function deleteFileByID(fileID) {
    return await api.post<DeleteFileReturnType>('/file/delete/' + fileID)
        .then((res) => res.data.message)
}