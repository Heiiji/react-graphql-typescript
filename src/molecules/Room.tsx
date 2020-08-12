import React from 'react';
import moment from 'moment';
import { IRoom } from '../interfaces';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

type CardProps = {
  room: IRoom;
};

const RoomComponent = styled.div`
  transition: 0.2s;
  cursor: pointer;
  border-color: rgba(200, 200, 200, 0.2);

  .description {
    overflow: hidden;
    font-size: 1em;
    line-height: 1.2em;
  }

  .illustration {
    position: relative;
    width: 100%;
    overflow: hidden;
    background-color: red;
    img {
      transition: 0.5s;
      width: 100%;
      height: 100%;
      min-height: 100%;
      min-width: 100%;
      object-fit: cover;
      transform: scale(1.05);
    }
  }

  &:hover {
    box-shadow: 0 0 6px rgba(100, 100, 100, 0.2);
    img {
      transform: scale(1);
    }
  }
`;

function Room({ room }: CardProps): JSX.Element {
  const history = useHistory();

  const handleClick = () => {
    history.push(`/room/${room.id}`);
  };

  // le truc est à la main car Firefox ne supporte pas le ellipsis multiline
  const description = () => {
    let description: string = room.description;
    if (description.length <= 100) {
      return description;
    }
    description = description.substr(0, 99);
    return description.substr(0, description.lastIndexOf(' ')) + '...';
  };

  return (
    <RoomComponent onClick={handleClick} className="card m-3" style={{ maxWidth: 540 }}>
      <div className="row no-gutters h-100">
        <div className="col-md-4 illustration">
          <img src={room.images[0]} alt="..." />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{room.property.location}</h5>
            <p className="card-text description">{description()}</p>
            <p className="card-text">{moment(room.date).format('MMMM Do YYYY')}</p>
          </div>
        </div>
      </div>
    </RoomComponent>
  );
}

export default Room;
