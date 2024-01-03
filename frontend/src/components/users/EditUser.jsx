import React, { useState, useEffect } from "react";
import { Form, Button, Row } from "react-bootstrap";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import { URL_UPDATE_USER } from "../../const/constants";


const EditUser = ({ theUser }) => {
  const dispatch = useDispatch();

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

  const idProduct = theUser.id;
  const [name, setName] = useState(
    theUser.name
  );
  const [lastName, setLastName] = useState(
    theUser.lastName
  );
  const [macAddress, setMacAddress] = useState(
    theUser.macAddress
  );


  const URL = process.env.REACT_APP_BACKEND_URL || 'http://localhost:3001';

  const handleSubmit = (id) => {
    id = idProduct;
    console.log(id);  
    const urlPut = `${URL_UPDATE_USER}/${id}`;
    const connectionToUpdate = { name, lastName, macAddress };

    axios
      .put(urlPut, connectionToUpdate)
      .then((response) => {
        console.log("Response: ", response);
        const result = response.data;
        console.log("Results", result);
        if (response.status === 200) {
          console.log("Éxitooo!");
          showAlert("¡Registro actualizado!", "success", "success");
        } else {
          showAlert("¡No se actualizó!", "error", "error");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-2">
        <Form.Label>Nombre</Form.Label>
        <Form.Control type="text" defaultValue={theUser.name}  onChange={(e) => setName(e.target.value)}  />
      </Form.Group>

      <Form.Group className="mb-2">
        <Form.Label>Apellido</Form.Label>
        <Form.Control
          type="text"
          rows={3}
          defaultValue={theUser.lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
      </Form.Group>

      <Form.Group className="mb-2">
        <Form.Label>Dirección MAC</Form.Label>
        <Form.Control
          type="text"
          rows={3}
          defaultValue={theUser.macAddress}
          onChange={(e) => setMacAddress(e.target.value)}
        />
      </Form.Group>

      <Button  variant="success" type="submit" block className="mt-2">
        Editar usuario
      </Button>
    </Form>
  );
};

export default EditUser;
