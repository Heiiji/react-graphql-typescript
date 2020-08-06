import {User, IS_CONNECTED} from "./types";
import API from "../../_helpers/api";
import store from "../index";

export const connectUser = (email: string, password: string) => {
    return new Promise((resolve, reject) => {
        API.post<User>("/auth", {
            email,
            password
        }).then(res => {
            res.data.isConnected = true;
            store.dispatch({
                type: IS_CONNECTED,
                payload: res.data
            });
            resolve(res.data);
        }).catch((e) => {
            reject(e);
        })
    })
}

export const disconnectUser = () => {
    return;
}