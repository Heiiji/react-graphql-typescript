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

    // le truc est à la main car Firefox ne supporte pas le ellipsis multiline
    const description = () => {
        let description : string = room.description;
        if (description.length <= 100) {
            return description;
        }
        description = description.substr(0, 99);
        return description.substr(0, description.lastIndexOf(" "))+ "...";
    }

  return (
    <div onClick={handleClick} className="card m-3 room-tile" style={{ maxWidth: 540 }}>
        <div className="row no-gutters h-100">
            <div className="col-md-4 illustration">
                <img src={room.images[0]} alt="..."/>
            </div>
            <div className="col-md-8">
            <div className="card-body">
                <h5 className="card-title">{room.property.location}</h5>
                <p className="card-text description">{description()}</p>
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
