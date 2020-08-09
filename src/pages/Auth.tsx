import React, { useState } from 'react';
import {connectUser} from "../store/user/actions";
import { withRouter } from 'react-router-dom';

// TODO : Use a library or a powerfull safemade error managment

function Auth(props: any) {
    const [loading, setLoading] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [alert, setAlert] = useState("");

    const _onSubmit = (ev: any) => {
        ev.preventDefault();
        if (loading) {
            return;
        }
        if (!email || !password) {
            setAlert("Please enter valid credentials");
            return;
        }
        setAlert("");
        setLoading(true);
        connectUser(email, password).then(user => {
            if (props.redirect !== false) {
                props.history.push('/')
            }
            if (props.onLogged) {
                props.onLogged(user);
            }
        }).catch(() => {
            setLoading(false);
            setAlert("Invalid Credentials");
        });
    }

    return (
        <div>
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
                        <button className="btn btn-outline-primary">
                            {
                                loading ?
                                    <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"/> : "Connect"
                            }
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default withRouter(Auth);
