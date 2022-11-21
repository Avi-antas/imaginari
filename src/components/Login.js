import React, { useEffect, useState } from 'react'
import { Modal, Button } from 'react-bootstrap'
function Login(props) {
    const [name, setName] = useState("");
    const [mail, setMail] = useState("");
    const [city, setCity] = useState("");
    const [add, setAdd] = useState("");

    const [show, setShow] = useState(false);

   
    
    const getData = (e) =>{
      console.log({name,mail,city,add})
    }
    
  return (
    

    <>

    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Modal heading
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <input type="text" placeholder='Enter your name'  class="form-control mb-3" value={name} onChange={(e)=>{setName(e.target.value)}} />
        <input type="mail" placeholder='Enter your email'  class="form-control mb-3"  value={mail} onChange={(e)=>{setMail(e.target.value)}}/>
        <select class="form-control mb-3" value={city} onChange={(e)=>{setCity(e.target.value)}}>
            <option>Kolkata</option>
            <option>Mumbai</option>
            <option>Chennai</option>
            <option>Bangalore</option>
            <option>Delhi</option>
            <option>Noida</option>
        </select>
        <input type="text" placeholder='Enter your address'  class="form-control mb-3" value={add} onChange={(e)=>{setAdd(e.target.value)}}/>
        <button class="form-control bg-dark text-white" onClick={getData}>Login</button>
      </Modal.Body>
      
      </Modal>
    </>
    
  )
}

export default Login
