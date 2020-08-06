import React from 'react';

function SearchZone() {
  return (
    <div className="container">
        <div className="row justify-content-center">
            <div className="col-lg-8 text-center">
                <img width="400" alt="home" className="m-4" src="/media/images/appartment.svg" />
                <input type="text" placeholder="search" className="form-control m-4" />
            </div>
        </div>
    </div>
  );
}

export default SearchZone;
