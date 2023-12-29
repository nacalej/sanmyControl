import {useContext, useState, useEffect} from 'react';
import { Modal, Button, OverlayTrigger, Tooltip, Image } from 'react-bootstrap';
import EditConnection from './EditConnection';
// import EditProduct from './EditProduct';
// import EditForm from './EditForm'
import axios from "axios";
import Swal from "sweetalert2";



const WifiRental = ({item}) => {
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
        handleClose()
    }, [item])

              //alert 
  const showAlert = (message) => {
    Swal.fire({
      icon: 'success',
      title: message, 
      type: "success", 
      text: ""
  
  }).then((result) => { window.location.reload(); });


  } 
  const URL = process.env.REACT_APP_BACKEND_URL || 'http://localhost:3001';


    const handleDelete = () => {
        const urlDelete = `${URL}/${item.id}`;
        console.log("ID: ", item.id);
        axios
          .delete(urlDelete)
          .then((response) => {
            const result = response.data;
            const { status, message } = result;
            if (status !== "SUCCESS") {
              //   alert(message, status)
              console.log("Éxitooo al borrraaaarrrr!");
              showAlert("¡Registro eliminado!");
            } else {
              console.log("Éxitooo al borrraaaarrrr!");
              showAlert();
            }
          })
          .catch((err) => {
            console.log(err);
          });
      };

    return (
        <>
            <td>{item.time}</td>
            <td >{item.amountRentalWifi}</td>
            <td >{item.typeOfPay}</td>
            { item.typeOfPay === 'Efectivo'
            ? (<td className='warn'>No aplica</td>) : 
            (<td>{item.paymentId}</td>)
    }
            <td>{item.dateRentalWifi}</td>
            <td>{item.enDateRentalWifi}</td>
            <td>{item.nameUser}</td>
            <td>{item.addressUser}</td>
            <td >
                <OverlayTrigger
                placement="top"
                delay={{ show: 250, hide: 400 }}
                overlay={renderTooltip}
                >
                <Button className='btn btn-outline-warning btn-sm m-2'
                onClick={handleShow} 
                variant="light">
                <i className='material-icons'>&#xe3c9;</i></Button>
                </OverlayTrigger>
                <OverlayTrigger
                placement="right"
                delay={{ show: 250, hide: 400 }}
                 overlay={renderTooltipDelete}
                >
                <Button 
                className='btn btn-outline-danger btn-sm'
                variant="light"
                onClick={handleDelete}>
                <i className='material-icons'>&#xe872;</i>
                </Button>
                </OverlayTrigger>
            </td>

            <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
            <Modal.Title>
                Editar conexión
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <EditConnection theConnection={item} />
        </Modal.Body>
        <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Cerrar
                </Button>
        </Modal.Footer>
    </Modal>
        </>
    )
}

export default WifiRental;