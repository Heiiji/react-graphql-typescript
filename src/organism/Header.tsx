import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getUser } from '../store/selectors';
import { disconnectUser } from '../store/user/actions';
import { useLocation } from 'react-router-dom';

function Header() {
  const user = useSelector(getUser);
  const [collapse, setCollapse] = useState(true);
  const location = useLocation();

  const _onLogout = () => {
    disconnectUser();
  };

  const toggleCollapse = () => {
    setCollapse(!collapse);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <Link className="navbar-brand border-right pr-4" to="/">
        myHome
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" onClick={toggleCollapse}></span>
      </button>

      <div className={`${collapse ? 'collapse' : ''} navbar-collapse`} id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className={`nav-selection ${location.pathname === '/' ? 'active' : ''}`}>
            <Link className="nav-link" to="/">
              Home
            </Link>
          </li>
          {user.role === 0 && (
            <li className={`nav-selection ${location.pathname.includes('/admin') ? 'active' : ''}`}>
              <Link className="nav-link" to="/admin">
                My profil
              </Link>
            </li>
          )}
        </ul>
        <ul className="navbar-nav">
          <li className="nav-item active">
            {user.isConnected ? (
              <Link onClick={_onLogout} className="nav-link" to="/">
                Logout
              </Link>
            ) : (
              <Link className="nav-link" to="/auth">
                Login
              </Link>
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
