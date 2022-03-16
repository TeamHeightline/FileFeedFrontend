import {makeAutoObservable} from "mobx";
import {FileEntity} from "../../../DataLayer/EndpointTypes/files.types";
import {deleteFileByID, getFileByID} from "../../../DataLayer/TransportLayer/files.resolvers";
import UserGlobalStore from "../../../GlobalStorages/user-storage";
import FileFolderObject from "../../FileFolder/Store/file-folder-store";

export default class FileByIdStore {
    constructor(id: string) {
        makeAutoObservable(this)
        this.id = id
        this.loadFileData()
    }

    id?: string

    /**
     * Раздел отвечающий за расчеты всего, что отображается в UI
     */

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

    get isUserCanDeleteFile() {
        return Number(this.fileData?.user.id) === Number(UserGlobalStore.userData?.id)
    }

    /**
     * Работа со всем, что связано с загрузкой данных
     */

    loading = true

    private setLoadingComplete() {
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

    /**
     * Раздел. отвечающий за удаление файлов
     */

    isShowDeleteDialog = false

    openDeleteDialog = () => {
        this.isShowDeleteDialog = true
    }

    closeDeleteDialog = () => {
        this.isShowDeleteDialog = false
    }

    onDeleteFileButtonClick = async () => {
        this.closeDeleteDialog()
        if (this.fileData?.id) {
            console.log(await deleteFileByID(this.fileData?.id))
            await FileFolderObject.reloadAllFileIDArrays()
        }
    }


}