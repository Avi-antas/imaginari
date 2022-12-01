import React, { useEffect, useState } from "react";
import { Card, Container, Table } from "react-bootstrap";

function Admin() {
  const [product, setProduct] = useState([])
  const [user, setUser] = useState([]);
  useEffect(()=>{
    fetch("http://localhost:4000/users").then((data) => {
      data.json().then((users) => {
        setUser(users);
      });
    });
  },[])

  return (
    <>
      <Container>
        <Card>
          <Table striped bordered hover size="sm">
          <tbody>
           
              <tr>
                <th>#</th>
                <th>User Name</th>
                <th>User Email / User Phone</th>
                <th>User City</th>
                <th>User Address</th>
              </tr>
           
           
              {
                user.map((info)=>{
                  return(
                    <tr key={info.id}>
                    <td>{info.id}</td>
                    <td>{info.name}</td>
                    <td>{info.email}</td>
                    <td>{info.city}</td>
                    <td>{info.address}</td>
                  </tr>
                  )
                })
              }
              
            </tbody>
          </Table>
        </Card>
      </Container>
    </>
  );
}

export default Admin;
