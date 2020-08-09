import React from "react";
import {IBooking, IRoom} from "../interfaces";
import moment from "moment";
import {useSelector} from "react-redux";
import {getBookings} from "../store/selectors";
import {removeOneBooking} from "../store/bookings/actions";

type BookingViewProp = {
    room: IRoom
}

const BookingView = ({room} : BookingViewProp) => {
    const bookings = useSelector(getBookings);

    const _onDeleteBook = (id: string) => {
        removeOneBooking(id).catch(err => {
            console.log("error on book dletion", err);
        });
    }

    return (
        <div>
            {
                bookings.filter((book: IBooking) => book.roomId === room.id).length > 0 ? <ul className="list-group properties-list">
                    {
                        room.bookings.map(book => <li key={book.id} className="list-group-item d-flex justify-content-between align-items-center bg-white">
                            {`${book.user.firstName} - ${moment(book.date).fromNow()}`}
                            <button onClick={() => _onDeleteBook(book.id)} className="btn btn-outline-danger">Refuse</button>
                        </li>)
                    }
                </ul> : <div className="p-5 text-center col">
                    <img alt="illustration" src="/media/images/house-search.svg" width="50%" />
                    <p className="m-4">No book has been sent for the moment</p>
                </div>
            }

        </div>
    );
}

export default BookingView;