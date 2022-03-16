import {makeAutoObservable} from "mobx";
import {login} from "../../../DataLayer/TransportLayer/user.resolver";
import UserGlobalStore from "../../../GlobalStorages/user-storage";

class LoginPageStore {
    constructor() {
        makeAutoObservable(this)
    }

    email = ""
    password = ""

    changeEmail = (event) => {
        this.email = event.target.value
    }

    changePassword = (event) => {
        this.password = event.target.value
    }

    onLoginButtonClick = () => {
        login(this.email, this.password)
            .then(() => UserGlobalStore.loadUserData())
    }
}

const LoginPageObject = new LoginPageStore()

export default LoginPageObject