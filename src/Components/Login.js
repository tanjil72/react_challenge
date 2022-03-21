import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Link, useNavigate } from "react-router-dom";

const initialValues = {
  email: "",
  password: "",
};

export default function Login({ setAuth }) {
  //alert(setAuth)
  const navigate = useNavigate();
  const [values, setValues] = useState(initialValues);
  // function validateForm() {
  //   return values.email.length > 0 && values.password.length > 0;
  // }

  const handleSubmit = (e) => {
    e.preventDefault();
    Login();
  };

  const handleInputChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  function Login() {
    let olddata = localStorage.getItem("registeredUsers");
    let oldArr = JSON.parse(olddata);
    let found=false;
    oldArr.some((user) => {
      if(user.email===values.email && user.password===values.password){
        found=true
      }
    });
    if(found){
      setAuth(true)
      localStorage.setItem('Auth', JSON.stringify(true));
      alert("Login success")
      navigate('/')
    }else{
      alert("Error email/password")
    }
  }

  return setAuth!==undefined?(
    <div className="LoginContainer">
      <div style={{ display: "flex", width: "100%" }}>
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
          <Button
            style={{ marginTop: 10, width: 400 }}
            block
            size="lg"
            type="submit"
            // disabled={!validateForm()}
          >
            Login
          </Button>
        </Form>
      </div>
      <text style={{ marginTop: 10 }}>
        New User? <Link to="/signup"  >Register</Link>
      </text>
    </div>
  ):(<div style={{display:'flex',justifyContent:'center'}}><h1>You are not authorized to access this</h1></div>)
}
