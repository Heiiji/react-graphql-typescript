import React from 'react';
import Header from '../organism/Header';
import SearchZone from '../organism/SearchZone';
import RoomList from '../organism/RoomList';

function Home() {
    return (
        <div>
            <Header/>
            <SearchZone/>
            <RoomList/>
        </div>
    );
}

export default Home;
