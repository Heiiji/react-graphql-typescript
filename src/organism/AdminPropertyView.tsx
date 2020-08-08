import React from "react";
import {IProperty} from "../interfaces";


type PropertyHeadProps = {
    property: IProperty
}

const AdminPropertyView = ({property} : PropertyHeadProps) => {
    return (
        <div className="container mt-4">
            <div className="row justify-content-around pb-4 border-bottom flex-nowrap overflow-hidden">
                {
                    property.images.map(img => <img key={img} alt="test" src={img} className="col-3 offset-1" style={{height: 200, objectFit: "cover"}}/>)
                }
            </div>
            <div className="row justify-content-around mt-3 pb-4 border-bottom">
                <h3 className="col-12">Rooms</h3>
                {
                    property.rooms.map(room => <div key={room.id} className="card" style={{width: "18rem"}}>
                        <img src={room.images[0]} className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <p className="card-text">{room.description}</p>
                        </div>
                    </div>)
                }
            </div>
            <div className="row justify-content-around mt-3 text-left">
                <h3 className="col-12">Details</h3>
                <div className="col-12 p-4">
                    <p><b>surface :</b> {`${property.size}m²`}</p>
                    <p><b>location :</b> {property.location}</p>
                    <p><b>description :</b> {property.description}</p>
                </div>
            </div>
        </div>
    );
}

export default AdminPropertyView;