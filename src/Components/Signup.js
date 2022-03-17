import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
};

export default function Signup() {
  const [values, setValues] = useState(initialValues);

  function validateForm() {
    return values.email.length > 0 && values.password.length > 0;
  }
  const handleInputChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  //this is comment

  const handleSubmit = () => {
    alert(values.email);
  };

  return (
    <div className="LoginContainer">
      <Form onSubmit={handleSubmit}>
        <Form.Group size="lg" controlId="firstName">
          <Form.Label>First Name</Form.Label>
          <Form.Control
            autoFocus
            type="text"
            name="firstName"
            value={values.firstName}
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group size="lg" controlId="lastName">
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            autoFocus
            type="text"
            name="lastName"
            value={values.lastName}
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group size="lg" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            autoFocus
            name="email"
            type="email"
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
        <Button
          style={{ marginTop: 10 }}
          block
          size="lg"
          type="submit"
          disabled={!validateForm()}
        >
          Signup
        </Button>
      </Form>
    </div>
  );
}
