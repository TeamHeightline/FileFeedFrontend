import {autorun, makeAutoObservable} from "mobx"
import {getAllFilesID, uploadFileByFile} from "../../../DataLayer/TransportLayer/files.resolvers";
import PCabinetObject from "../../PersonalCabinet/Store/p-cabinet-store";

enum UPLOADING_STATUS {
    UPLOADING = "UPLOADING",
    SUCCESSFUL = "SUCCESSFUL",
    ERROR = "ERROR"
}

class FileFolderStore {
    constructor() {
        autorun(() => this.loadAllFileIDsForPage())
        makeAutoObservable(this)
    }

    private allFileIDs: string[] = []

    private setAllFileIDs(value: string[]) {
        this.allFileIDs = value
    }

    get fileIDsForPage() {
        return this.allFileIDs
    }

    private loadAllFileIDsForPage = async () => {
        this.setAllFileIDs(await getAllFilesID())
    }


    uploadingStatus: UPLOADING_STATUS = UPLOADING_STATUS.UPLOADING

    setUploadingStatus(value: UPLOADING_STATUS) {
        this.uploadingStatus = value
    }

    onFileSelect = async (event) => {
        this.setUploadingStatus(UPLOADING_STATUS.UPLOADING)
        const file = event.target.files[0]
        const isUploadedSuccessful = await uploadFileByFile(file)
        if (isUploadedSuccessful) {
            this.setUploadingStatus(UPLOADING_STATUS.SUCCESSFUL)
            await this.loadAllFileIDsForPage()
            await PCabinetObject.loadMyFilesIDArray()
        } else {
            this.setUploadingStatus(UPLOADING_STATUS.ERROR)
        }
    }
}

const FileFolderObject = new FileFolderStore()

export default FileFolderObject