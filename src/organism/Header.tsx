import React from 'react';
import { Link } from "react-router-dom";
import {useSelector} from "react-redux";
import {getUser} from "../store/selectors";
import {disconnectUser} from "../store/user/actions";

function Header() {
    const user = useSelector(getUser);

    const _onLogout = () => {
        disconnectUser();
    }

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" to="/">myHome</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>
    
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                    <Link className="nav-link" to="/">
                        Home <span className="sr-only">(current)</span>
                    </Link>
                </li>
                {
                    user.role === 0 && <li className="nav-item">
                        <Link className="nav-link" to="/admin">My profil</Link>
                    </li>
                }
            </ul>
            <ul className="navbar-nav">
                <li className="nav-item active">
                    {
                        user.isConnected ?
                            <Link onClick={_onLogout} className="nav-link" to="/">Logout</Link> :
                            <Link className="nav-link" to="/auth">Login</Link>
                    }
                </li>
            </ul>
        </div>
    </nav>
  );
}

export default Header;
