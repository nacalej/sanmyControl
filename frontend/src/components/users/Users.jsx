import React from 'react'
import { Modal, Form, Button, Alert} from 'react-bootstrap';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import Pagination from '../pagination/Pagination';
import {
      getAllUsers,       
    } from "../../actions";
import User from './User';
import AddUser from './AddUser';

const Users = () => {
    const dispatch = useDispatch();  
    const { allUsers } = useSelector((state) => state);

    const [name, setName] = useState("");



       //función de búsqueda
  const searcher = (e) => {
    console.log(e)
    setName(e.target.value)   
}
   
    
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
      dispatch(getAllUsers())
      handleClose();
      return ()=> {
        handleShowAlert();
      }
    }, [dispatch]);
       //Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage] = useState(10);//10

  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers =
    allUsers.length > 0
      ? allUsers.slice(indexOfFirstUser, indexOfLastUser)
      : allUsers;
  const totalPagesNum = Math.ceil(allUsers.length / usersPerPage);
  const results = !name ? allUsers : allUsers.filter((dato)=> dato.name.toLowerCase().includes(name.toLocaleLowerCase()))

    console.log("CURRENT --------", currentUsers);
        return (
         <div className="container min-vh-100  ">
          
      <div className="crud shadow-lg p-4 mb-5 mt-5  rounded" style={{ backgroundColor: "#FFE5E5"}}>
        
        <div className="row ">
          <div className="col-sm-3 mt-5 mb-4 text-gred">
          <Form  className='d-flex flex-sm-row align-items-center justify-content-center'>
    <Form.Group className="mb-2">
        <Form.Control
            size="sm"
            type="text"
            placeholder="Nombre *"
            name="name"
            value={name}
            onChange={(e) => searcher(e)}
            required
            
        />
        
    </Form.Group>
 
    </Form>
             </div>
          <div
            className="col-sm-3 offset-sm-2 mt-5 mb-4 text-gred"
            style={{ color: "#3C3C3D" }}
          >
            <h4 className='text-left'>Administrar {" "} <b>Usuarios</b>
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
          {results && results?.length > 0 ? (
              <table className="table table-striped table-hover text-center table-bordered"
              style={{border: "2px solid #393E46"}}>
    
            <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Apellido</th>
                    <th>Dirección MAC</th>
                    <th>Acciones</th>
              
                </tr>
            </thead>
            <tbody>
    
                    {
                      results?.map(item => (
                          <tr key={item.id}>
                             <User item={item} /> 
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
       {currentUsers && currentUsers.length > 0 ? (

        <Pagination pages = {totalPagesNum}
          setCurrentPage={setCurrentPage}
          currentRentals ={results}
          allRentals = {results}/>
          ) : (
            " "
          )}
          </div>
          </div>
    
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>
                    Agregar usuario
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
               <AddUser />
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

export default Users;