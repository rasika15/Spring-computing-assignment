import React, { useState } from "react";
import { Form, Button, Row, Container } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import "./user.css";
const AddUsers = () => {
  const [newUser, setNewUser] = useState({
    name: "",
    email: "",
    number: "",
    address: "",
  });
  const history = useHistory();
  const dispatch = useDispatch();
  const handleUser = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    setNewUser({ ...newUser, [name]: value });
    console.log(name, value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(newUser);
    dispatch({ type: "ADD_USERS", payload: newUser });
    history.push("/users");
  };
  return (
      <Container className="userForm">
      <Form onSubmit={handleSubmit}>
        <Form.Row>
          <Form.Group as={Row}>
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              value={newUser.email}
              name="email"
              onChange={handleUser}
              placeholder="Enter email"
            />
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group as={Row}>
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              value={newUser.name}
              name="name"
              onChange={handleUser}
              placeholder="Enter Name"
            />
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group as={Row}>
            <Form.Label>Phone No</Form.Label>
            <Form.Control
              type="text"
              value={newUser.phone}
              name="phone"
              onChange={handleUser}
              placeholder="Enter number"
            />
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group as={Row}>
            <Form.Label>Address</Form.Label>
            <Form.Control
              placeholder="Enter Address"
              value={newUser.address}
              name="address"
              onChange={handleUser}
            />
          </Form.Group>
        </Form.Row>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default AddUsers;
