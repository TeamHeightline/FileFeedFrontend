import {reaction, makeAutoObservable} from "mobx";
import {myFiles} from "../../../DataLayer/TransportLayer/files.resolvers";
import UserGlobalStore from "../../../GlobalStorages/user-storage";

class PCabinetStore {
    constructor() {
        makeAutoObservable(this)
        reaction(() => UserGlobalStore.isLogin, () => this.loadMyFilesIDArray())
    }

    private myFilesIDArray: string[] = []

    get myFilesIDArrayForUI() {
        return this.myFilesIDArray
    }

    private setMyFilesIDArray(value: string[]) {
        this.myFilesIDArray = value
    }

    async loadMyFilesIDArray() {
        this.setMyFilesIDArray(await myFiles())
    }


}

const PCabinetObject = new PCabinetStore()

export default PCabinetObject