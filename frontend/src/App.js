import NavBar from "./components/navbar/Navbar";
import "./App.css";
import Home from "./pages/Home.jsx";
import Footer from "./components/footer/Footer.jsx"
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

import WifiRentals from "./components/rentalWifi/WifiRentals";
import Users from "./components/users/Users.jsx";
import Earnings from "./components/earnings/Earnings.jsx";


const App = () => {

  return (
    <BrowserRouter>
      <div  className="" style={{backgroundColor: "#748DA6"}}>
        {/* <Navbar user={user} /> */}
        <NavBar  />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users" element={ < Users />} > </Route>
          <Route path="/earnings" element={ <Earnings/>} > </Route>
          <Route path="/rentalWifi" element={ < WifiRentals />} > </Route>

        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;