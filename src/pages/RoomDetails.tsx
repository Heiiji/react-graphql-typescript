import React, {useState} from 'react';
import { useParams } from "react-router-dom";
import {gql, useQuery, useMutation} from "@apollo/client";
import StateSnippet from "../molecules/StateSnippet";
import Modal from "../molecules/Modal";
import Auth from "./Auth";
import {useSelector} from "react-redux";
import {getUser} from "../store/selectors";

const ADD_BOOK = gql`
  mutation AddBook($userId: String!, $roomId: String!) {
    addBook(userId: $userId, roomId: $roomId) {
      id
      userId,
      roomId
    }
  }
`;


function RoomDetails() {
    const user = useSelector(getUser);
    const { roomId } = useParams();
    const [modalShow, setModalShow] = useState<boolean>(false);
    const [activeImage, setActiveImage] = useState(0);
    const [booked, setBooked] = useState(false);
    const query = gql`
{
    room(id: "${roomId}"){
        id,
        size,
        description,
        date,
        images,
        price,
        user{
            id,
            firstName,
            email
        },
        property{
            id,
            location,
            images,
            description,
            date,
            size
        }
    }
}
`;
    const { loading, error, data } = useQuery(query);
    const [addBook] = useMutation(ADD_BOOK);
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

    const slideSize = data.room.images.length + data.room.property.images.length;

    const slideNext = () => {
        let cursor = activeImage;
        cursor += 1;
        if (cursor >= slideSize) {
            cursor = 0;
        }
        setActiveImage(cursor);
    }

    const slidePrev = () => {
        let cursor = activeImage;
        cursor -= 1;
        if (cursor < 0) {
            cursor = slideSize - 1;
        }
        setActiveImage(cursor);
    }

    const book = () => {
        if (user.isConnected) {
            addBook({ variables: { userId: user.id, roomId: roomId } });
            setBooked(true);
        } else {
            setModalShow(true);
        }
    }

    const _isLogged = () => {
        setModalShow(false);
    }

    return (
        <div>
            <div className="container">
                <div className="row mt-5">
                    <div className="col-md-8">
                        <div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel" style={{height: 500}}>
                            <div className="carousel-inner h-100">
                                {
                                    data.room.images.map((img : string, index: number) => <div key={img} className={`carousel-item ${activeImage === index ? "active" : ""}`}>
                                        <img src={img} className="d-block w-100" alt="..."/>
                                        <div className="carousel-caption d-none d-md-block">
                                            <h5>Room preview</h5>
                                        </div>
                                    </div>)
                                }
                                {
                                    data.room.property.images.map((img : string, index: number) => <div key={img} className={`carousel-item ${activeImage === (data.room.images.length + index) ? "active" : ""}`}>
                                        <img src={img} className="d-block w-100" alt="..."/>
                                        <div className="carousel-caption d-none d-md-block">
                                            <h5>Appartment preview</h5>
                                        </div>
                                    </div>)
                                }
                            </div>
                            <a className="carousel-control-prev" href="#carouselExampleCaptions" role="button"
                               data-slide="prev" onClick={slidePrev}>
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="sr-only">Previous</span>
                            </a>
                            <a className="carousel-control-next" href="#carouselExampleCaptions" role="button"
                               data-slide="next" onClick={slideNext}>
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="sr-only">Next</span>
                            </a>
                        </div>
                        <h3>{`${data.room.property.location} - ${data.room.size}m`}</h3>
                        <p>{data.room.description}</p>
                        <hr/>
                        <h3>{`Property - ${data.room.property.size}m`}</h3>
                        <p>{data.room.property.description}</p>
                    </div>
                    <div className="col-md-4">
                        <StateSnippet title="Price" state={data.room.price + "€"} highlight={""}/>
                        {
                            booked ? <div className="cta-container">
                                <button className="cta bg-success">Reserved</button>
                            </div> : <div className="cta-container">
                                <button className="cta" onClick={book}>Book now!</button>
                            </div>
                        }
                    </div>
                    <Modal className="pb-5" title="login to book now!" show={modalShow} onHide={() => setModalShow(false)}>
                        <Auth redirect={false} onLogged={_isLogged}/>
                    </Modal>
                </div>
            </div>
        </div>
    );
}

export default RoomDetails;
