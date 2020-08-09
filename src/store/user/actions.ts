import {User, IS_CONNECTED, IS_DISCONNECTED} from "./types";
import API from "../../_helpers/api";
import store from "../index";
import {getBookings} from "../bookings/actions";

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
            let user = res.data;
            if (user.role === 0) {
                getBookings(user.id).then(() => {
                    resolve(user)
                }).catch(err => {
                    reject(err);
                })
            } else {
                resolve(user);
            }
        }).catch((e) => {
            reject(e);
        })
    })
}

export const disconnectUser = () => {
    return new Promise((resolve) => {
        store.dispatch({
            type: IS_DISCONNECTED
        });
        resolve();
    })
}