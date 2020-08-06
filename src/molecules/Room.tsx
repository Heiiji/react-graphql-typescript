import React from 'react';
import moment from "moment";
import { IRoom } from "../interfaces";
import { useHistory } from "react-router-dom";

type CardProps = {
    room: IRoom
}

function Room({room}: CardProps) {
    const history = useHistory();

    const handleClick = () => {
        history.push(`/room/${room.id}`);
    }

  return (
    <div onClick={handleClick} className="card m-3 room-tile" style={{ maxWidth: 540 }}>
        <div className="row no-gutters">
            <div className="col-md-4">
                <img src="https://upload.wikimedia.org/wikipedia/commons/9/95/Apartement.jpg" className="card-img" alt="..."/>
            </div>
            <div className="col-md-8">
            <div className="card-body">
                <h5 className="card-title">{room.property.location}</h5>
                <p className="card-text">{ room.description }</p>
                <p className="card-text">
                    { moment(room.date).format('MMMM Do YYYY') }
                </p>
            </div>
            </div>
        </div>
    </div>
  );
}

export default Room;
