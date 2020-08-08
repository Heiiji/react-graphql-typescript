import React from "react";
import {IRoom} from "../interfaces";
import moment from "moment";

type BookingViewProp = {
    room: IRoom
}

const BookingView = ({room} : BookingViewProp) => {
    return (
        <div>
            {
                room.bookings.length > 0 ? <ul className="list-group properties-list">
                    {
                        room.bookings.map(book => <li key={book.id} className="list-group-item d-flex justify-content-between align-items-center">
                            {`${book.user.firstName} - ${moment(book.date).fromNow()}`}
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