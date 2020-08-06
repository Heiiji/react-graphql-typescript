import React from 'react';
import { Link } from "react-router-dom";

function Header() {
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
            <li className="nav-item">
                <a className="nav-link" href="#">My Rooms</a>
            </li>
        </ul>
        <ul className="navbar-nav">
            <li className="nav-item active">
                <Link className="nav-link" to="/auth">Connection</Link>
            </li>
        </ul>
        </div>
    </nav>
  );
}

export default Header;
