import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './Navbar.scss';


const NavBar = () => (
<nav className="navbar navbar-expand-lg navbar-light bg-light">
    <a className="navbar-brand" href="/board">MesSend</a>
    <div className="collapse navbar-collapse" id="navBar">
        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            <li className="nav-item active">
                <a className="nav-link" href="/board">Home <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="/board">Second</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="/board">Third</a>
            </li>
        </ul>
        <form className="form-inline my-2 my-lg-0">
            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form>
    </div>
</nav>
)
export default NavBar;