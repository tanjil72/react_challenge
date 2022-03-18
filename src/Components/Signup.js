import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

const initialValues = [
  {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  },
];

export default function Signup() {
  const [values, setValues] = useState(initialValues);

  const checkPasswordValidity = (value) => {
    const isNonWhiteSpace = /^\S*$/;
    if (!isNonWhiteSpace.test(value)) {
      return "Password must not contain Whitespaces.";
    }

    const isContainsUppercase = /^(?=.*[A-Z]).*$/;
    if (!isContainsUppercase.test(value)) {
      return "Password must have at least one Uppercase Character.";
    }

    const isContainsLowercase = /^(?=.*[a-z]).*$/;
    if (!isContainsLowercase.test(value)) {
      return "Password must have at least one Lowercase Character.";
    }

    const isContainsNumber = /^(?=.*[0-9]).*$/;
    if (!isContainsNumber.test(value)) {
      return "Password must contain at least one Digit.";
    }

    const isContainsSymbol =
      /^(?=.*[~`!@#$%^&*()--+={}\[\]|\\:;"'<>,.?/_₹]).*$/;
    if (!isContainsSymbol.test(value)) {
      return "Password must contain at least one Special Symbol.";
    }

    const isValidLength = /^.{7,}$/;
    if (!isValidLength.test(value)) {
      return "Password must be 8 Characters Long.";
    }

    return null;
  };
  const handleInputChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  function SaveDataToLocalStorage(data)
{
  let retrievedData = localStorage.getItem("registeredUsers");
  let users = JSON.parse(retrievedData);
  let Found = users.find(function(user, index) {
    if(user.email === values.email){
      return true
    }
      
  });
  if(Found){
    alert("User is already registered")
  }else{
    var registeredUsers = [];
    registeredUsers = JSON.parse(localStorage.getItem('registeredUsers')) || [];
    registeredUsers.push(data); 
    localStorage.setItem('registeredUsers', JSON.stringify(registeredUsers));
    alert("Registration Successful")
  }
}

  const handleSubmit = (e) => {

    if (values.password === values.confirmPassword) {
      const check = checkPasswordValidity(values.password);
      if (!check) {
        SaveDataToLocalStorage(values)
      } else {
        alert(check);
        e.preventDefault();
      }
    } else {
      alert("Password doesn't match!");
      e.preventDefault();
    }
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
            type="text"
            name="lastName"
            value={values.lastName}
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group size="lg" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
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
        <Form.Group size="lg" controlId="confirmPassword">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            type="password"
            name="confirmPassword"
            value={values.confirmPassword}
            onChange={handleInputChange}
          />
        </Form.Group>
        <Button
          style={{ marginTop: 10, width: 400 }}
          block
          size="lg"
          type="submit"
          // disabled={!validateForm()}
        >
          Register
        </Button>
      </Form>
      <text style={{ marginTop: 10 }}>
        Already a user? <Link to="/">Login</Link>
      </text>
    </div>
  );
}
