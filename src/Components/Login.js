import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Link, useNavigate } from "react-router-dom";

const initialValues = {
  email: "",
  password: "",
};

export default function Login() {
  const navigate = useNavigate();
  const [values, setValues] = useState(initialValues);
  // const navigate = useNavigate();
  function validateForm() {
    return values.email.length > 0 && values.password.length > 0;
  }

  const handleSubmit = () => {
    alert(values.email);
  };
  const routeChange = () => {
    let path = `/Signup`;
    navigate(path);
  };

  const handleInputChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  return (
    <div className="LoginContainer">
     <div style={{display:'flex',width:'100%'}}>
        <Form onSubmit={handleSubmit}>
          <Form.Group size="lg" controlId="email">
            <Form.Label>Email</Form.Label>
            <Form.Control
              autoFocus
              type="email"
              name="email"
              value={values.email}
              onChange={handleInputChange}
            />
          </Form.Group>
          <Form.Group size="lg" controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              name="password"
              value={values.password}
              onChange={handleInputChange}
            />
          </Form.Group>
        </Form>
        </div>
     

      <div style={{display:'flex',width:'100%',justifyContent:'center'}}>
        <Button
          style={{ marginTop: 10 }}
          block
          size="lg"
          type="submit"
          disabled={!validateForm()}
        >
          Login
        </Button>
        <Button style={{ marginTop: 10,marginLeft:10 }} block size="lg" onClick={routeChange}>
          Signup
        </Button>
      </div>
      {/* <Link to="/signup">Signup</Link> */}
    </div>
  );
}
