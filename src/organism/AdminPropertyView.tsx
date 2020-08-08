import React, {useState} from "react";
import {IProperty, IRoom} from "../interfaces";
import Modal from "../molecules/Modal";
import BookingView from "./BookingView";


type PropertyHeadProps = {
    property: IProperty
}

const AdminPropertyView = ({property} : PropertyHeadProps) => {
    const [modalShow, setModalShow] = useState<boolean>(false);
    const [selectedRoom, setSelectedRoom] = useState(property.rooms[0]);

    const selectRoom = (room :IRoom) => {
        setSelectedRoom(room);
        setModalShow(true);
    }

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
                    property.rooms.map(room => <div onClick={() => selectRoom(room)} key={room.id} className="card" style={{width: "18rem", cursor: "pointer"}}>
                        <img src={room.images[0]} className="card-img-top" alt="..."/>
                        <div className="card-body">
                            {
                                room.active ? <span className="badge badge-success badge-pill">active</span> : ""
                            }
                            {
                                room.bookings.length > 0 ? <span className="badge badge-primary badge-pill">{room.bookings.length}</span> : ""
                            }
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
            <Modal className="pb-5" title="Reservations" show={modalShow} onHide={() => setModalShow(false)}>
                <BookingView room={selectedRoom}/>
            </Modal>
        </div>
    );
}

export default AdminPropertyView;