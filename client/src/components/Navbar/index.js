import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
    return (

        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid">
                <a class="navbar-brand">Google Books</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <Link
                                to="/"
                                className={window.location.pathname === "/" ? "nav-link active" : "nav-link"}>
                                Search
                            </Link>
                        </li>
                        <li class="nav-item">
                            <Link
                                to="/saved"
                                className={window.location.pathname === "/saved" ? "nav-link active" : "nav-link"}>
                                My Library
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;