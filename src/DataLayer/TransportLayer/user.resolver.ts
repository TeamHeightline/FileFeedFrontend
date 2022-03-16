import api from "./config";
import {UserWithoutPassword} from "../EndpointTypes/user.types";

export async function login(email: string, password: string) {
    return await api.post('/login', {email, password})
}

export async function meData() {
    return await api.get<UserWithoutPassword>("/me")
        .then((res) => res.data)
}


export async function logout() {
    return await api.post("/logout")
}