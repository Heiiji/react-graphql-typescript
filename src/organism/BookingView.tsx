import React from "react";
import {IRoom} from "../interfaces";
import moment from "moment";
import {gql, useMutation} from "@apollo/client";

type BookingViewProp = {
    room: IRoom
}

const DELETE_BOOK = gql`
  mutation deleteBook($id: String!) {
    deleteBook(id: $id) {
      id
    }
  }
`;

const BookingView = ({room} : BookingViewProp) => {
    const [deleteBook] = useMutation(DELETE_BOOK);

    const _onDeleteBook = (id: string) => {
        deleteBook({ variables: { id } });
    }

    return (
        <div>
            {
                room.bookings.length > 0 ? <ul className="list-group properties-list">
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