import React, { Component } from 'react';
import Logo from "./LogoProvicional.png";
import "./NavBar.css"
import { Link, NavLink } from "react-router-dom"

class NavBar extends Component {
    render() {
        return (
            <div className="NavBar">
                <img src={Logo} alt="" />
                <Link
                    className="btnSensores btnNavBar animate__animated animate__fadeInTopLeft"
                    to={`/`}
                >Inicio</Link>
                <Link
                    className="btnSensores btnNavBar animate__animated animate__fadeInTopLeft"
                    to={`/Sensores`}
                >Sensores</Link>
                <p className="btnAñadirCliente btnNavBar animate__animated animate__fadeInTopLeft"> Añadir cliente</p>
                <p className="btnAñadirCliente btnNavBar animate__animated animate__fadeInTopLeft"> Reportes</p>
            </div>
        );
    }
}

export default NavBar;