import React, { Component } from 'react';
import Logo from "./LogoProvicional.png";

class NavBar extends Component {
    state = { 

     }
    render() { 
        return ( 
            <div className="NavBar">
                <img src={Logo} alt=""/>
                <div className="btnSensores btnNavBar">Sensores</div>
                <div className="btnAñadirCliente btnNavBar"> Añadir cliente</div>
            </div>
         );
    }
}
 
export default NavBar;