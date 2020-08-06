import React, { useState } from 'react';
import Header from '../organism/Header';
import API from "../_helpers/api";

// TODO : Use a library or a powerfull safemade error managment

function Auth() {
    const [loading, setLoading] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [alert, setAlert] = useState("");

    const _onSubmit = (ev: any) => {
        ev.preventDefault();
        if (!email || !password) {
            setAlert("Please enter valid credentials");
            return;
        }
        setAlert("");
        setLoading(true);
        API.post("/auth", {
            email,
            password
        }).then(res => {
            setLoading(false);
        }).catch(() => {
            setLoading(false);
            setAlert("Invalid Credentials");
        })
    }

    return (
        <div>
            <Header/>
            <div className="container">
                <div className="row align-items-center justify-content-center">
                    <form className="col-md-7 mt-5 text-center" onSubmit={_onSubmit}>
                        <h2 className="text-center my-5">Authentication</h2>
                        <input
                            value={email}
                            onChange={ev => setEmail(ev.target.value.trim())}
                            type="text"
                            name="email"
                            placeholder="email"
                            className="form-control form-control-lg m-2" />
                        <input
                            value={password}
                            onChange={ev => setPassword(ev.target.value)}
                            type="password"
                            name="password"
                            placeholder="password"
                            className="form-control form-control-lg m-2" />
                        {
                            alert && <p className="alert alert-warning">{alert}</p>
                        }
                        <button className="btn btn-outline-primary">Connect</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Auth;
