import React, { useState } from "react";
import { Form, Button, Container } from "react-bootstrap";
import "./Login.css";
import { useHistory } from "react-router-dom";

const Login = () => {
  const [email, SetEmail] = useState("");
    const [password, setPassword] = useState("");
    const [admin, setAdmin] = useState(true);
  let history = useHistory();

  const OnhandleSubmit = (e) => {
    history.push("/users");
    e.preventDefault();
  };

  return (
    <Container>
      <h3>Login</h3>
      <div className="login">
        <Form onSubmit={OnhandleSubmit}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              name="name"
              value={email}
              onChange={(e) => SetEmail(e.target.value)}
              placeholder="Enter email"
            />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              password="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
            />
          </Form.Group>
          <Form.Group controlId="formBasicCheckbox">
            <Form.Check type="checkbox" onChange={(e)=>setAdmin(e.target.value)} value={admin} label="Admin" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </Container>
  );
};

export default Login;
