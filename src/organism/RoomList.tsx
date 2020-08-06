import React from 'react';
import {gql, useQuery} from "@apollo/client";
import Room from '../molecules/Room';
import { IRoom } from "../interfaces";

const query = gql`
{
    rooms{
        id,
        size,
        description,,
        date,
        user{
            id,
            firstName,
            email
        },
        property{
            id,
            location,
            description,
            date,
            size
        }
    }
}
`

function RoomList(props: any) {
    const { loading, error, data } = useQuery(query);
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;
    console.log(JSON.stringify(new Date()))
  return (
    <div className="container-fluid text-left">
        <div className="row justify-content-center flex-wrap">
            {
                data.rooms.map((room: IRoom) => <Room room={room} key={room.id}/>)
            }
        </div>
    </div>
  );
}


export default RoomList;
