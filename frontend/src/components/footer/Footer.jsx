import React from "react";
import { useLocation } from "react-router-dom";
import '../styles/footer.css';


const Footer = () => {
    const year = new Date().getFullYear();

    const { pathname } = useLocation();
    console.log(pathname);
    // you can check a more conditions here
    // if (
    //     pathname    === "/rentalWifi") return null;
  
    return <div className="navbar navbar-fixed-bottom bg-dark justify-content-center py-6 text-white">
          <span>{" "}Hecho con 💜. Nacarith Sequera</span>&nbsp; ©  {` ${year} `}
        | Todos los derechos reservados.</div>
            
  };
  
  export default Footer;
