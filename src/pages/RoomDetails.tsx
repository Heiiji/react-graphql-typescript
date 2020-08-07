import React from 'react';
import Header from '../organism/Header';
import { useParams } from "react-router-dom";
import {gql, useQuery} from "@apollo/client";

function RoomDetails() {
    const { roomId } = useParams();
    const query = gql`
{
    room(id: "${roomId}"){
        id,
        size,
        description,
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
    const { loading, error, data } = useQuery(query);
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

    return (
        <div>
            <Header/>
            <div className="container">
                <div className="row mt-5">
                    <div className="col-md-8">
                        {data.id}
                    </div>
                    <div className="col-md-4">
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RoomDetails;
