import React from "react";
import { Dropdown,  NavLink   } from "react-bootstrap";
import { Link } from "react-router-dom";

import CartWidget from "./CartWidget";

export const NavBar = () => {
  return (
    <div  className="navList">
      <ul className="header" >
        <li className="nav__li">
        <Dropdown>
      <Dropdown.Toggle className="sign" style={{fontFamily:" Cabin Sketch', cursive", marker:"none", backgroundColor:"#090909", border:"none"}}>SHELLY'S BOOKSHOP
      </Dropdown.Toggle>

      <Dropdown.Menu style={{width:"15rem", display:"flex", flexDirection:"column", justifyContent:"space-around", backgroundColor:"rgb(200, 63, 86)"} }>
        <NavLink
        to="cienciaFiccion"><h3 style={{ fontFamily:"'Alegreya Sans SC', sans-serif", justifyContent:"space-around"}}>Ciencia Ficcion</h3></NavLink>
        <NavLink
         to="novelaNoir"><h3 style={{ fontFamily:"'Alegreya Sans SC', sans-serif"}}>Novela Noir</h3></NavLink>
      </Dropdown.Menu>
    </Dropdown>
        </li>
        <li className="nav__li">
          <Link className="nav__link" href="">
            <CartWidget />
            </Link>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
