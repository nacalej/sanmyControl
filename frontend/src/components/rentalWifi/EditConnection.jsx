import React, {useState, useEffect} from 'react';
import { Form, Button, Row } from "react-bootstrap";
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { addProduct } from '../../actions';
import Swal from "sweetalert2";

// import {EmployeeContext} from '../contexts/EmployeeContext';
// import {useContext, useState} from 'react';

const EditConnection = ({theConnection}) =>{
    const dispatch = useDispatch();
    //const { categories } = useSelector((state) => state);

       //Alert 
   const showAlert = (message, icon, type) => {
    Swal.fire({
      title: message,
      type: type,
      icon: icon,
    }).then((result) => {
      window.location.reload();
    });
  };

    const idProduct = theConnection.id;

    const [enDateRentalWifi, SetEnDateRentalWifi] = useState(theConnection.enDateRentalWifi);

    
    const handleSubmit = (id) => {
        id = idProduct;
        console.log(id);
        const url = `http://localhost:5000/rentalWifi/${id}`;
        const connectionToUpdate = {enDateRentalWifi}
      
        axios
          .put(url, connectionToUpdate )
          .then((response) => {
            console.log("Response: ", response);
            const result = response.data;
            console.log("Results",result)
            if (response.status === 200) {
              console.log("Éxitooo!");
              showAlert("¡Registro actualizado!", "success", "success")
            } else {
                showAlert("¡No se actualizó!", "error", "error")
            }
          })
          .catch((err) => {
            console.log(err);
          });
    
        
    }

     return (

        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-2">
            <Form.Label>Tiempo</Form.Label>
                <Form.Control
                    type="text"                   
                    value={theConnection.time}
                    readOnly
                />
            </Form.Group>
            
            <Form.Group className="mb-2">
            <Form.Label>Monto</Form.Label>
                <Form.Control
                   type='text'
                    rows={3}                  
                    value={theConnection.amountRentalWifi}
                   readOnly
                />
            </Form.Group>

            <Form.Group className="mb-2">
            <Form.Label>Conectado desde</Form.Label>
                <Form.Control
                   type='text'
                    rows={3}                  
                    value={theConnection.dateRentalWifi}
                   readOnly
                />
            </Form.Group>

            <Form.Group className="mb-2 ">
            <Form.Label>Usuario conectado</Form.Label>
            <div className='d-sm-flex justify-content-sm-center align-items-center '>
                <Form.Control
                   type='text'
                    rows={1}                  
                    value={theConnection.nameUser}
                   readOnly
                />
                 <Form.Control
                   type='text'
                    rows={3}                  
                    value={theConnection.addressUser}
                   readOnly
                />
                </div>
            </Form.Group>

            <Form.Group className="mb-2">
            <Form.Label>Desconexión</Form.Label>
                <Form.Control
                    type='datetime-local'
                    
                    rows={3}
                    name="enDateRentalWifi"
                    value={enDateRentalWifi}
                    onChange={(e)=> SetEnDateRentalWifi(e.target.value)}
                    required
                />
            </Form.Group>
         
            <Button variant="success" type="submit" block className='mt-2'>
                Editar conexión
            </Button>
        </Form>

     )
}

export default EditConnection;