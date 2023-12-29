import React, {useState, useEffect} from 'react';
import { Form, Button } from "react-bootstrap"
import { useDispatch, useSelector } from 'react-redux';
import {  postRentalWifi, getAllUsers} from '../../actions';
import Swal from "sweetalert2";

const AddConnection = () => {
  const dispatch = useDispatch();

  const { allUsers } = useSelector((state) => state);
  useEffect(() => {
    dispatch(getAllUsers())
  }, [dispatch]);

  const [data, setData] = useState({
    amountRentalWifi: "",
    typeOfPay: "",
    time: "",
    dateRentalWifi: "",
    paymentId: "",
    addressUser: ""
  });


    const [errors, setErrors] = useState({});
    const validateForm = (input) => {
      let errors = {};
  
    
  
  
      ///// BEGIN OF VALIDATION OF TIME INPUT
      if(data.time === ""){
          errors.time = "Ingresa un valor.";
      }
  
         ///// BEGIN OF VALIDATION OF AMOUNT INPUT
      else if(data.amountRentalWifi === ""){
          errors.amountRentalWifi = "Ingresa un valor.";
      }
     
      else if(data.typeOfPay === ""){
        errors.typeOfPay = "Ingresa un valor.";
      }

      

 
          
  ///// END OF VALIDATION OF IDMACHINE INPUT
      return errors;
  
  }//close validateForm
  
    const [success, setSuccess] = useState(null);
   

    function handleChangeInputs(e) {
        e.preventDefault();
       
       setData({
           ...data, 
           [e.target.name] : e.target.value
       });

    console.log("CreateProduct, Input change: ", data);
    setErrors(validateForm({
      ...data,                        
      [e.target.name] : e.target.value
      }));
      }
          //alert 
  const show = (message) => {
    Swal.fire({
      icon: 'success',
      title: message, 
      type: "success", 
      text: ""
  
  }).then((result) => { window.location.reload(); });


  } 


    async function handleSubmit (e) {
        e.preventDefault();
        
    
    
        
        const addNewConnection = {
            amountRentalWifi: data.amountRentalWifi,
            time: data.time,
            dateRentalWifi: data.dateRentalWifi,
            typeOfPay: data.typeOfPay,
            paymentId: data.paymentId,
            addressUser: data.addressUser    
        }
        dispatch((postRentalWifi(addNewConnection)));
        show("¡Registro guardado! 😊");  
    }

     return (

        <Form  >
            <Form.Group className="mb-2">
            <Form.Label>Tiempo</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="1h *"
                    name="time"
                    onChange={(e) => handleChangeInputs(e)} 
                    required
                    
                />
                 {errors.time 
              ?
               <p className="error">
                {errors.time}</p> 
              : null
              }
            </Form.Group>
            <Form.Group className="mb-2">
            <Form.Label>Monto</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="100 *"
                    name="amountRentalWifi"
                    onChange={(e) => handleChangeInputs(e)} 
                    required
                />
                     {errors.amountRentalWifi  && errors.amountRentalWifi 
              ?
               <p className="error">
                {errors.amountRentalWifi}</p> 
              : null
              }
            </Form.Group>
            <Form.Label>Usuario</Form.Label>
            <Form.Select size="sm"
             name="addressUser"
             defaultValue={'Elegir'} 
             aria-label="Default select example" 
             className="mb-2"
             onChange={(e) => handleChangeInputs(e)} >
            <option value={'Elegir'} disabled >Elegir usuario...</option>
            {
              allUsers?.map((user) => {
                return (
                  <option  key={user.id} value={user.macAddress}>{user.name} - {user.macAddress}</option>
                )
              })
            }
            </Form.Select>
            <Form.Label>Tipo de pago</Form.Label>

            <Form.Select size="sm"
             name="typeOfPay"
             defaultValue={'Elegir'} 
             aria-label="Default select example" 
             className="mb-2"
             onChange={(e) => handleChangeInputs(e)} >
            <option value={'Elegir'} disabled >Elegir...</option>
            <option value='Pago móvil'>Pago móvil </option>
            <option value='Efectivo'>Efectivo </option>
            <option value='Transferencia'>Transferencia  </option>
     
            </Form.Select>

            {data.typeOfPay && data.typeOfPay !== 'Efectivo' ?
              <Form.Group className="mb-2">
              <Form.Label>Referencia</Form.Label>
                  <Form.Control
                      type="text"
                      placeholder="2554597898 *"
                      name="paymentId"
                      onChange={(e) => handleChangeInputs(e)} 
                      required
                  />
              </Form.Group> :
              <div className="d-none">No debes agregar nada</div> 
            }
            <Button disabled={data.time.length === 0 ||
            data.typeOfPay.length === 0 ||
            data.amountRentalWifi.length === 0 ||
            data.addressUser.length === 0} variant="success" type="submit" className="mt-2"  onClick={handleSubmit}>
                Agregar 
            </Button>
        </Form>
  )
}

export default AddConnection;