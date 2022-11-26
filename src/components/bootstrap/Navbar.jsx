import React from "react";
import CartWidget from "../CartWidget/CartWidget";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-primary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          EASYPLAY
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">
                Inicio
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="#">
                Terror
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="#">
                Deportes
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active">Accion</a>
            </li>
            <li className="nav-item">
              <a className="nav-link ">
                <CartWidget />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
