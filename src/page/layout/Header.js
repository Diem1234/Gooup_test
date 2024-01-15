import React, { useContext, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import Profile from './../Profile';
import { AuthContext } from '../../AuthContext/AuthContext';

const Header = () => {
    const user = JSON.parse(localStorage.getItem("user"));
    const {handleLogout} = useContext(AuthContext)
    const navigate = useNavigate();
    // useEffect(() => {
    //     if (!user) {
    //       // Người dùng chưa đăng nhập, chuyển hướng về trang đăng nhập
    //       navigate("/signin");
    //     }
    //   }, []);
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container container-fluid">
          <a className="navbar-brand" href="#">
            GOOUP1
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <form className="d-flex ms-5" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          <div className=" collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/home">
                  Home
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/popup">
                  Popup
                </Link>
              </li>
              {!user ? (
                <>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/signin">
                    Đăng nhập 
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/signup">
                    Đăng ký
                    </NavLink>
                </li> </>) :(<>
                <li className="nav-item dropdown">
                    <NavLink
                    className="nav-link dropdown-toggle"
                    to="/dashboard"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    >
                    {user.name}
                    </NavLink>
                    <ul className="dropdown-menu">
                    <li>
                        <NavLink className="dropdown-item" to="/profile">
                        Profile
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className="dropdown-item" to="">
                        Something else here
                        </NavLink>
                    </li>
                    <li>
                        <hr className="dropdown-divider" />
                    </li>
                    <li>
                        <NavLink className="dropdown-item" to="/signin" onClick={handleLogout}>
                        Đăng xuất
                        </NavLink>
                    </li>
                    </ul>
                </li></>)}
            </ul>
            
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header