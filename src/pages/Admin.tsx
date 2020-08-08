import React, {useState} from 'react';
import {gql, useQuery} from "@apollo/client";
import {IProperty} from "../interfaces";
import StateSnippet from "../molecules/StateSnippet";
import AdminPropertyView from "../organism/AdminPropertyView";

function AdminDetails() {
    const [selection, setSeletion] = useState<IProperty>();
    const query = gql`
{
    properties(userId: "2"){
        id,
        location,
        description,
        date,
        size,
        images,
        address,
        rooms{
            id,
            active,
            size,
            price,
            description,
            date,
            images,
            bookings{
                id,
                date,
                message,
                user {
                    id,
                    firstName
                }
            }
        }
    }
}
`
    const { loading, error, data } = useQuery(query);
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

    const getPropertyBadge = (property : IProperty) : number => {
        let count : number = 0;
        count = property.rooms.reduce((accumulator : number, currentValue : any) => {
            accumulator += currentValue.bookings.length;
            return accumulator;
        }, 0);
        return count;
    }

    const getState = () : string => {
        let roomCount : number = 0;
        let activeCount : number = 0;

        for (let i = 0; i < data.properties.length; i++) {
            let roomList = data.properties[i].rooms;
            roomCount += roomList.length;

            for (let j = 0; j < roomList.length; j++) {
                if (roomList[j].active) {
                    activeCount += 1;
                }
            }
        }

        return `${activeCount}/${roomCount}`;
    }

    const getHighlight = () : string => {
        let cash : number = 0;

        for (let i = 0; i < data.properties.length; i++) {
            let roomList = data.properties[i].rooms;
            for (let j = 0; j < roomList.length; j++) {
                if (roomList[j].active) {
                    cash += roomList[j].price;
                }
            }
        }

        return `${cash}€/Month`;
    }

    return (
        <div>
            <div className="container">
                <div className="row mt-5">
                    <div className="col-md-8">
                        <h1 className="mb-4">
                            { selection ? `${selection.address}` : "My properties"}
                        </h1>

                        {
                            selection ? <>
                                <button className="btn btn-outline-primary" onClick={() => setSeletion(undefined)}> Back</button>
                                <AdminPropertyView property={selection} />
                            </>: <ul className="list-group properties-list">
                                {
                                    data.properties.map((property:IProperty) => <li key={property.id} onClick={() => setSeletion(property)} className="list-group-item d-flex justify-content-between align-items-center">
                                            { `${property.location} - ${property.size}m²` }
                                            {
                                                getPropertyBadge(property) ? <span className="badge badge-primary badge-pill">{getPropertyBadge(property)}</span> : ""
                                            }
                                        </li>)

                                }
                            </ul>
                        }

                    </div>
                    <div className="col-md-4 mt-4">
                        <StateSnippet title="Actives rooms" state={getState()} highlight={getHighlight()} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AdminDetails;
