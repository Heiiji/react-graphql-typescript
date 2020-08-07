import React from 'react';
import {IRoom} from "../interfaces";
import { Modal } from "react-bootstrap";

type BookingProps = {
    onHide: any,
    show: boolean
}

const ViewBookingModal = (props: BookingProps) => {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Modal heading
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h4>Centered Modal</h4>
                <p>
                    Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
                    dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
                    consectetur ac, vestibulum at eros.
                </p>
            </Modal.Body>
            <Modal.Footer>
                <button className="btn btn-primary" onClick={props.onHide}>Close</button>
            </Modal.Footer>
        </Modal>
    );
}

export default ViewBookingModal;