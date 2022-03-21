import React, { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Form from "react-bootstrap/Form";

export default function FormDialog({ value }) {
  const [open, setOpen] = React.useState(false);

  const [name, setName] = useState();
  const [age, setAge] = useState();
  const [salary, setSalary] = useState();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleUpdate = () => {
    if (name.length > 0 && age > 0 && salary > 0) {
      fetch(`http://dummy.restapiexample.com/api/v1/create`, {
        method: "POST",
        body: JSON.stringify({
          name: name,
          salary: salary,
          age: age,
        }),
      })
        .then((response) => response.json())
        .then((response) => {
          console.log(response);
        });
    } else {
      alert("Error value");
    }

    setOpen(false);
  };

  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleAge = (e) => {
    setAge(e.target.value);
  };
  const handleSalary = (e) => {
    setSalary(e.target.value);
  };

  return (
    <div>
     
      <Dialog open={value} onClose={handleClose}>
        <DialogTitle>Update</DialogTitle>
        <DialogContent>
          <input
            type="text"
            name="name"
            onChange={handleName}
            placeholder="Name"
            value={name}
          />
          <br />
          <input
            type="text"
            name="salary"
            onChange={handleSalary}
            placeholder="Salary"
            value={salary}
          />
          <br />
          <input
            type="text"
            name="age"
            onChange={handleAge}
            placeholder="Age"
            value={age}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
          <Button onClick={handleUpdate}>Create</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
