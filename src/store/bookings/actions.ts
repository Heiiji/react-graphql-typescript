import {IBooking} from "../../interfaces";
import store from "../index";
import {SET_BOOKINGS} from "./types";
import { client } from "../../_helpers/apollo";
import gql from 'graphql-tag';

export const setBookings = (bookings: Array<IBooking>) => {
    return new Promise(resolve => {
        store.dispatch({
            type: SET_BOOKINGS,
            payload: bookings
        });
    });
}

export const getBookings = (userId: string) => {
    return new Promise((resolve, reject) => {
        client.query({
            query: gql`
                {
                user(id: "${userId}"){
                    rooms{
                        id
                        bookings{
                            id,
                            date,
                            user{
                                id,
                                firstName,
                                email
                            }
                        }
                    }
                }
                }
            `
        }).then(response => {
            console.log(response)
        }).catch(err => {
            console.error(err);
            reject(err);
        })
    })
}