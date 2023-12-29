import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

import '../styles/navBar.css';


import { Nav, Navbar, NavDropdown } from 'react-bootstrap'

const NavBar = () => {





  return (
  
    // <header>
    // <img src={logo} alt="GNSO Arcade" />
     <Navbar bg="dark" variant="dark"
        sticky="top" expand="sm" collapseOnSelect>
        <Navbar.Brand>
          {/* <img src={logo} width="50px" height="50px" />{' '} */}
          
        </Navbar.Brand>

        <Navbar.Toggle className="coloring" />
        <Navbar.Collapse>
          <Nav className="mx-auto" > 
     
             <Nav.Link  as={Link} to="/#">Inicio</Nav.Link>  
             <Nav.Link as={Link} to="/users">Usuarios</Nav.Link> 
             <Nav.Link as={Link} to="/rentalWifi">Red</Nav.Link> 
             <Nav.Link as={Link} to="/earnings">Ingresos diarios</Nav.Link> 
      
             
        </Nav>
        </Navbar.Collapse>

      </Navbar> 

      
      

  );
};

export default NavBar;