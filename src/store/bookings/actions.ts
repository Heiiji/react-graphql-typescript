import { IBooking, IRoom } from '../../interfaces';
import store from '../index';
import { ADD_BOOKING, REMOVE_BOOKING, SET_BOOKINGS } from './types';
import { client } from '../../_helpers/apollo';
import gql from 'graphql-tag';

// TODO : A clever snackbar for each action ^^

export const setBookings = (bookings: Array<IBooking>) => {
  return new Promise((resolve) => {
    store.dispatch({
      type: SET_BOOKINGS,
      payload: bookings,
    });
  });
};

export const bookRoom = (userId: string, roomId: string) => {
  return new Promise((resolve, reject) => {
    client
      .mutate({
        mutation: gql`
          mutation AddBook($userId: String!, $roomId: String!) {
            addBook(userId: $userId, roomId: $roomId) {
              roomId
              id
              date
              user {
                id
                firstName
                email
              }
            }
          }
        `,
        variables: {
          userId,
          roomId,
        },
      })
      .then((result) => {
        store.dispatch({
          type: ADD_BOOKING,
          payload: result.data,
        });
        resolve();
      })
      .catch((err) => {
        console.error(err);
        reject();
      });
  });
};

export const removeOneBooking = (bookingId: string) => {
  return new Promise((resolve, reject) => {
    client
      .mutate({
        mutation: gql`
          mutation deleteBook($id: String!) {
            deleteBook(id: $id) {
              id
            }
          }
        `,
        variables: {
          id: bookingId,
        },
      })
      .then(() => {
        store.dispatch({
          type: REMOVE_BOOKING,
          payload: bookingId,
        });
        resolve();
      })
      .catch((err) => {
        console.error(err);
        reject(err);
      });
    resolve();
  });
};

export const getBookings = (userId: string) => {
  return new Promise((resolve, reject) => {
    client
      .query({
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
            `,
      })
      .then((response) => {
        const bookings = response.data.user.rooms.reduce((result: Array<IBooking>, elem: IRoom) => {
          result = result.concat(elem.bookings);
          return result;
        }, []);
        store.dispatch({
          type: SET_BOOKINGS,
          payload: bookings,
        });
        resolve(bookings);
      })
      .catch((err) => {
        console.error(err);
        reject(err);
      });
  });
};
