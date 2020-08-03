import React from 'react';

function Room() {
  return (
    <div className="card m-3" style={{ maxWidth: 540 }}>
        <div className="row no-gutters">
            <div className="col-md-4">
                <img src="https://lh3.googleusercontent.com/proxy/tJGxiwC2noehxPLOjNgwvsv2Lw_GxVdTdv6M3ylnkcBXxJgU-XjzkTp7vq8qX-55jseNoxyLnfdgnizmwJueR5jbX6Zy2S2vARBXBeonV8RVqrwpnPDMixjeqw" className="card-img" alt="..."/>
            </div>
            <div className="col-md-8">
            <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
            </div>
            </div>
        </div>
    </div>
  );
}

export default Room;
