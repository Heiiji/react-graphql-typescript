import React from 'react';
import { gql, useQuery } from '@apollo/client';
import Room from '../molecules/Room';
import { IRoom } from '../interfaces';
import { useSelector } from 'react-redux';
import { getSearch } from '../store/selectors';

const query = gql`
  {
    rooms {
      id
      size
      description
      date
      images
      user {
        id
        firstName
        email
      }
      property {
        id
        location
        description
        date
        size
      }
    }
  }
`;

function RoomList(props: any) {
  const storeSearch = useSelector(getSearch);
  const { loading, error, data } = useQuery(query);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  const searchFilter = (rooms: [IRoom]) => {
    return rooms.filter((room: IRoom) => {
      if (room.description.toLowerCase().includes(storeSearch.text.toLowerCase())) {
        return true;
      }
      return room.property.location.toLowerCase().includes(storeSearch.text.toLowerCase());
    });
  };

  return (
    <div className="container-fluid text-left">
      <div className="row justify-content-center flex-wrap">
        {searchFilter(data.rooms).map((room: IRoom) => (
          <Room room={room} key={room.id} />
        ))}
      </div>
    </div>
  );
}

export default RoomList;
