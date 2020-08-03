import React from 'react';
import Room from '../molecules/Room';

function RoomList() {
  return (
    <div className="container-fluid text-left">
        <div className="row justify-content-center flex-wrap">
            <Room/>
            <Room/>
            <Room/>
            <Room/>
            <Room/>
            <Room/>
        </div>
    </div>
  );
}

export default RoomList;
