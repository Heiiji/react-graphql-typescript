import {IBooking, IRoom} from "../../interfaces";
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
                            roomId,
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
            let bookings = response.data.user.rooms.reduce((result : Array<IBooking>, elem : IRoom) => {
                result = result.concat(elem.bookings);
                return result;
            }, []);
            store.dispatch({
                type: SET_BOOKINGS,
                payload: bookings
            });
            resolve(bookings);
        }).catch(err => {
            console.error(err);
            reject(err);
        })
    })
}