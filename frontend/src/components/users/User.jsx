import { useContext, useState, useEffect } from "react";
import { Modal, Button, OverlayTrigger, Tooltip, Image } from "react-bootstrap";
import EditUser from "./EditUser";
// import EditProduct from './EditProduct';
// import EditForm from './EditForm'
import axios from "axios";
import Swal from "sweetalert2";
import { URL_DELETE_USER } from "../../const/constants";

const User = ({ item }) => {
  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Editar
    </Tooltip>
  );

  const renderTooltipDelete = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Eliminar
    </Tooltip>
  );

  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  useEffect(() => {
    handleClose();
  }, [item]);

  //alert
  const showAlert = (icon, message, type, text) => {
    Swal.fire({
      icon: icon,
      title: message,
      type: type,
      text: text,
    }).then((result) => {
      window.location.reload();
    });
  };
  const URL = process.env.REACT_APP_BACKEND_URL || 'http://localhost:3001';

  const handleDelete = () => {
    const urlDelete = `${URL_DELETE_USER}/${item.id}`;
    console.log("ID: ", item.id);
    axios
      .delete(urlDelete)
      .then((response) => {
        const result = response.data;
        const { status, message } = result;
        if (status !== "SUCCESS") {
          //   icon, message, type, text
          console.log("Éxitooo al borrraaaarrrr!");
          showAlert("success", "¡Registro eliminado!", "success");
        } else {
          console.log("Éxitooo al borrraaaarrrr!");
          showAlert("error", "No se pudo eliminar.", "error", "Elimine el registro de red, asociado al usuario.");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <td>{item.name}</td>
      <td>{item.lastName}</td>
      <td>{item.macAddress}</td>

      <td>
        <OverlayTrigger
          placement="top"
          delay={{ show: 250, hide: 400 }}
          overlay={renderTooltip}
        >
          <Button
            className="btn btn-outline-warning btn-sm m-2"
            onClick={handleShow}
            variant="light"
          >
            <i className="material-icons">&#xe3c9;</i>
          </Button>
        </OverlayTrigger>
        <OverlayTrigger
          placement="right"
          delay={{ show: 250, hide: 400 }}
          overlay={renderTooltipDelete}
        >
          <Button
            className="btn btn-outline-danger btn-sm"
            variant="light"
            onClick={handleDelete}
          >
            <i className="material-icons">&#xe872;</i>
          </Button>
        </OverlayTrigger>
      </td>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Editar conexión</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <EditUser theUser={item} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default User;
