import "bootstrap/dist/css/bootstrap.min.css";
 
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams, useNavigate } from 'react-router-dom';
import { getEarnings} from "../../actions";

import Pagination from '../pagination/Pagination';
import '../styles/rentaList.css';
import { Button } from "react-bootstrap";
import CustomPagination from "../pagination/CustomPagination";


   
 function Earnings() {
  const dispatch = useDispatch();  
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getEarnings())
  },[dispatch]);  

  const { earnings } = useSelector((state) => state);
  console.log("Earnings: ", earnings);

  
    //Pagination
    const [currentPage, setCurrentPage] = useState(1);
    const [earningsPerPage] = useState(10);

const indexOfLastEarning = currentPage * earningsPerPage;
const indexOfFirstEarning = indexOfLastEarning - earningsPerPage;
const currentProfits = earnings.length > 0 ? earnings.slice(indexOfFirstEarning, indexOfLastEarning) : earnings;
const totalPagesNum  = Math.ceil(earnings.length / earningsPerPage);


  return (
    <div className="container min-vh-100">
    
    <div className="crud shadow-lg p-4 mb-5 mt-4   rounded" style={{ backgroundColor: "#F1F9F9"}}> 
    <div className="row ">
     
     <div className="col-sm-3 mt-5 mb-4 text-gred"></div>  
     <div
            className="col-sm-3 offset-sm-2 mt-5 mb-4 text-gred"
            style={{ color: "#3C3C3D" }}
          >
            <h2>
              <b>Ingresos diarios</b>
            </h2>
          </div>
    
     </div>  
      <div className="row w-100" align="center">
          <div className="table-responsive table-sm" size="sm" >
           <table className="table table-striped table-hover text-center table-bordered"
           style={{border: "2px solid #393E46"}}>
              <thead>
                  <tr>
                      <th scope="col">Fecha</th>
                      <th scope="col">Ingreso</th>
                  </tr>
              </thead>
              <tbody>
              {earnings.map((item, idx) => {
                            return (
                              <tr key={idx}>
                                  <td>{item.dateRentalWifi}</td>
                                  <td>{item.total_day.toFixed(2)} Bs.</td>
                              </tr>
                            )
                          }
                          )}

              </tbody>
          </table>
          <Pagination  pages = {totalPagesNum}
                setCurrentPage={setCurrentPage}
                currentRentals ={currentProfits}
                allRentals = {earnings}
                  />
                
      </div>   
  </div>  

 </div>  
</div>    
);
}
 export default Earnings;
