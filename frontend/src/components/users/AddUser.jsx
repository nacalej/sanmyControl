import React, {useState, useEffect} from 'react';
import { Form, Button } from "react-bootstrap"
import { useDispatch, useSelector } from 'react-redux';
import {  addUser } from '../../actions';
import Swal from "sweetalert2";

const AddUser = () => {
  const dispatch = useDispatch();
  const [data, setData] = useState({
    name: "",
    lastName: "",
    macAddress: "",

  });

  const { allUsers } = useSelector((state) => state);
console.log(allUsers);


    const [errors, setErrors] = useState({});
    const validateForm = (input) => {
      let errors = {};
  
    
  
  
      ///// BEGIN OF VALIDATION OF TIME INPUT
      if(data.name === ""){
          errors.name = "Ingresa un valor.";
      }
  
         ///// BEGIN OF VALIDATION OF AMOUNT INPUT
      else if(data.lastName === ""){
          errors.lastName = "Ingresa un valor.";
      }

      if(allUsers.find((user) => user.name.toLowerCase() === data.name.toLowerCase())){
        console.log("Validación", allUsers);
            errors.name = `Lo siento, el nombre: ${data.name} ya se encuentra registrado.`;      
   }
     

     
      else if(data.macAddress === ""){
        errors.macAddress = "Ingresa un valor.";
      }

      if(allUsers.find((user) => user.macAddress == data.macAddress)){
        console.log("Validación", allUsers);
            errors.macAddress = "Lo siento, la dirección MAC ya se encuentra registrada.";      
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
        
    
    
        
        const addNewUser = {
            name: data.name,
            lastName: data.lastName,
            macAddress: data.macAddress,
            
        }
        dispatch((addUser(addNewUser)));
        show("¡Registro guardado! 😊");  
    }

     return (

        <Form  >
            <Form.Group className="mb-2">
            <Form.Label>Nombre</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Nombre *"
                    name="name"
                    onChange={(e) => handleChangeInputs(e)} 
                    required
                    
                />
                 {errors.name 
              ?
               <p className="error">
                {errors.name}</p> 
              : null
              }
            </Form.Group>
         
            <Form.Group className="mb-2">
            <Form.Label>Dirección MAC</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Dirección MAC *"
                    name="macAddress"
                    onChange={(e) => handleChangeInputs(e)} 
                    required
                />
                     {errors.macAddress  && errors.macAddress 
              ?
               <p className="error">
                {errors.macAddress}</p> 
              : null
              }
            </Form.Group>
            
            <Form.Group className="mb-2">
            <Form.Label>Apellido</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Apellido *"
                    name="lastName"
                    onChange={(e) => handleChangeInputs(e)} 
                    required
                />
                     {errors.lastName  && errors.lastName 
              ?
               <p className="error">
                {errors.lastName}</p> 
              : null
              }
            </Form.Group>
            <Button disabled={data.name.length === 0 ||
            data.lastName.length === 0 ||
            data.macAddress.length === 0 } variant="success" type="submit" className="mt-2"  onClick={handleSubmit}>
                Agregar 
            </Button>
        </Form>
  )
}

export default AddUser;