import {makeAutoObservable} from "mobx";
import {FileEntity} from "../../../DataLayer/EndpointTypes/files.types";
import {getFileByID} from "../../../DataLayer/TransportLayer/files.resolvers";

export default class FileByIdStore {
    constructor(id: string) {
        makeAutoObservable(this)
        this.id = id
        this.loadFileData()
    }

    id?: string

    fileData?: FileEntity

    get shortMimetype() {
        if (this.fileData?.mimetype) {
            const mimetypeAfterSplit = this.fileData?.mimetype
                ?.split('/').join(',')
                .split('.').join(',')
                .split(',')
            return mimetypeAfterSplit[mimetypeAfterSplit.length - 1].substring(0, 6)
        } else {
            return ""
        }
    }

    get beautifulUploadedDate() {
        let returnDate = ''
        if (this.fileData?.created_at) {
            const date = new Date(this.fileData?.created_at)
            returnDate = date
                .toISOString()
                .slice(0, 10)
        }
        return returnDate
    }

    loading = true

    setLoadingComplete() {
        this.loading = false
    }

    private setFileData(fileData: FileEntity) {
        this.fileData = fileData
    }

    async loadFileData() {
        if (this.id) {
            this.setFileData(await getFileByID(this.id))
            this.setLoadingComplete()
        }
    }

}