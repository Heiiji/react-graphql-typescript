import React from 'react';
import Header from '../organism/Header';
import { useParams } from "react-router-dom";
import {gql, useQuery} from "@apollo/client";

function AdminDetails() {
    const { roomId } = useParams();
    const query = gql`
{
    rooms{
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
                        <h1 className="mb-4">
                            My properties
                        </h1>
                        <ul className="list-group">
                            <li className="list-group-item d-flex justify-content-between align-items-center">
                                Cras justo odio
                                <span className="badge badge-primary badge-pill">14</span>
                            </li>
                            <li className="list-group-item d-flex justify-content-between align-items-center">
                                Dapibus ac facilisis in
                                <span className="badge badge-primary badge-pill">2</span>
                            </li>
                            <li className="list-group-item d-flex justify-content-between align-items-center">
                                Morbi leo risus
                                <span className="badge badge-primary badge-pill">1</span>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-4">
                        <div className="card bg-light mb-3 text-center">
                            <div className="card-header">Active rooms</div>
                            <div className="card-body">
                                <h5 className="card-title">1/12</h5>
                                <h6 className="card-title text-primary">2500€/month</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AdminDetails;
