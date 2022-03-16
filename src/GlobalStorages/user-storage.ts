import {autorun, makeAutoObservable} from "mobx";
import {UserWithoutPassword} from "../DataLayer/EndpointTypes/user.types";
import {logout, meData} from "../DataLayer/TransportLayer/user.resolver";

class UserStorage {
    constructor() {
        makeAutoObservable(this)
        autorun(() => this.loadUserData())
    }

    userData?: UserWithoutPassword

    get isLogin() {
        return !!this.userData?.id
    }

    setUserData(user: UserWithoutPassword) {
        this.userData = user
    }

    async loadUserData() {
        this.setUserData(await meData())
    }

    async logout() {
        logout()
            .then(() => this.loadUserData())
    }
}

const UserGlobalStore = new UserStorage()

export default UserGlobalStore;