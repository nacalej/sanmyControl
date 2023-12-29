import React from 'react'
  import { Modal, Button, Alert} from 'react-bootstrap';
    import { useEffect, useState } from 'react';
    import { useDispatch, useSelector } from "react-redux";

    // import Employee from './Employee';
    // import AddForm from './AddForm';
    import Pagination from '../pagination/Pagination';
    import {
        getAllRentalsWifi,
        getRentalWifiById,
        postRentalWifi,
      } from "../../actions";
import WifiRental from './WifiRental';
import AddConnection from './AddConnection';
// import Product from './Product';
// import AddProducts from './AddProducts';

const WifiRentals = () => {
    const dispatch = useDispatch();

    //const [ products, setProducts ] = useState([]);
  
  

  
    const { allRentalWifi, detailRentalWifi } = useSelector((state) => state);
    console.log("PRODUCT IN PRODUCTSCRUD: ", allRentalWifi);

  
    
    
    
        const [showAlert, setShowAlert] = useState(false);
    
        const [show, setShow] = useState(false);
        
        const handleShow = () => setShow(true);
        const handleClose = () => setShow(false);
        //const handleShowAlert = () =>setShowAlert(true);
    
      
        const handleShowAlert = () => {
            setShowAlert(true);
            setTimeout(()=> {
                setShowAlert(false);
            }, 2000)
        }
  
        useEffect(() => {
      dispatch(getAllRentalsWifi())
      handleClose();
      return ()=> {
        handleShowAlert();
      }
    }, [dispatch]);
       //Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [rentalWifiPerPage] = useState(10);

  const indexOfLastRentalWifi = currentPage * rentalWifiPerPage;
  const indexOfFirstRentalWifi = indexOfLastRentalWifi - rentalWifiPerPage;
  const currentRentalsWifi =
    allRentalWifi.length > 0
      ? allRentalWifi.slice(indexOfFirstRentalWifi, indexOfLastRentalWifi)
      : allRentalWifi;
  const totalPagesNum = Math.ceil(allRentalWifi.length / rentalWifiPerPage);
    console.log("CURRENT --------", currentRentalsWifi);
        return (
         <div className="container min-vh-100  ">
      <div className="crud shadow-lg p-4 mb-5 mt-5  rounded" style={{ backgroundColor: "#EFFFFB"}}>
        <div className="row ">
          <div className="col-sm-3 mt-5 mb-4 text-gred"> </div>
          <div
            className="col-sm-3 offset-sm-2 mt-5 mb-4 text-gred"
            style={{ color: "#3C3C3D" }}
          >
            <h4 className='text-left'>Administrar {" "} <b>Red</b>
            </h4>
          </div>
          <div className="col-sm-3 offset-sm-1  mt-5 mb-4 text-gred">
        
                <Button 
                style={{backgroundColor: "#748DA6", border: "1px solid #748DA6"}} 
                onClick={handleShow} data-toggle="modal">
                    {/* <i className="material-icons">&#xE147;</i> */}
              Agregar nuevo
            </Button>
          </div>              
            </div>
    
        <Alert show={showAlert} variant="success">
            ¡Lista de red actualizada!
        </Alert>
        <div className="row w-100" align="center">
          <div className="table-responsive " size="lg">
          {currentRentalsWifi && currentRentalsWifi?.length > 0 ? (
              <table className="table table-striped table-hover text-center table-bordered"
              style={{border: "2px solid #393E46"}}>
    
            <thead>
                <tr>
                    <th>Tiempo</th>
                    <th>Monto</th>
                    <th>Tipo de pago</th>
                    <th>Ref</th>
                    <th>Conexión</th>
                    <th>Desconexión</th>
                    <th>Usuario</th>
                    <th>Dirección MAC</th>
                    <th>Acciones</th>
              
                </tr>
            </thead>
            <tbody>
    
                    {
                      currentRentalsWifi?.map(item => (
                          <tr key={item.id}>
                             <WifiRental item={item} /> 
                        </tr>
                      ))  
                    }
                    
    
            </tbody>
        </table>
      ) : (
        <div className="row justify-content-center offset-sm-1 mt-5 mb-4 ">
          <h4 style={{ color: "#EF4C76" }}> No hay registros.</h4>{" "}
        </div>
      )}
       {currentRentalsWifi && currentRentalsWifi.length > 0 ? (

        <Pagination pages = {totalPagesNum}
          setCurrentPage={setCurrentPage}
          currentRentals ={currentRentalsWifi}
          allRentals = {allRentalWifi}/>
          ) : (
            " "
          )}
          </div>
          </div>
    
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>
                    Agregar conexión
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
               <AddConnection />
            </Modal.Body>
            <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cerrar
                    </Button>
            </Modal.Footer>
        </Modal>
        </div>
    </div>
        )
    }

export default WifiRentals;