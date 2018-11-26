import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './Navbar.scss';


const NavBar = () => (
<nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" href="/board">MesSend</a>
    <div class="collapse navbar-collapse" id="navBar">
        <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
            <li class="nav-item active">
                <a class="nav-link" href="/board">Home <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="/board">Second</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="/board">Third</a>
            </li>
        </ul>
        <form class="form-inline my-2 my-lg-0">
            <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form>
    </div>
</nav>
)
export default NavBar;