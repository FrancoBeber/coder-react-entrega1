import React from "react";
import CartWidget from "../CartWidget/CartWidget";
import { Link } from "react-router-dom";
import Contacto from "../../pages/Contacto";

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
              <Link className="nav-link active" aria-current="page" to="/">
                Inicio
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/genero/horror">
                Horror
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/genero/deportes">
                Deportes
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/genero/accion">
                Accion
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/item">
                Detalle
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/Contacto">
                Contacto
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active">
                <CartWidget />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
