import React from 'react';
import Header from '../organism/Header';

function Auth() {
    const _onSubmit = (ev: any) => {
        ev.preventDefault();
    }

    return (
        <div>
            <Header/>
            <div className="container">
                <div className="row align-items-center justify-content-center">
                    <form className="col-md-7 mt-5 text-center" onSubmit={_onSubmit}>
                        <h2 className="text-center my-5">Authentication</h2>
                        <input type="text" name="email" placeholder="email" className="form-control form-control-lg m-2" />
                        <input type="password" name="password" placeholder="password" className="form-control form-control-lg m-2" />
                        <button className="btn btn-outline-primary">Connect</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Auth;
