import React, { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Form from "react-bootstrap/Form";

export default function FormDialog({ user }) {
  const [open, setOpen] = React.useState(false);
  const [openDelete, setOpenDelete] = React.useState(false);

  const [name, setName] = useState(user.employee_name);
  const [age, setAge] = useState(user.employee_age);
  const [salary, setSalary] = useState(user.employee_salary);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleDeleteOpen = () => {
    setOpenDelete(true);
  };
  const handleDeleteClose = () => {
    setOpenDelete(false);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleUpdate = () => {
    if (name.length > 0 && age > 0 && salary > 0) {
      fetch(`http://dummy.restapiexample.com/public/api/v1/update/${user.id}`, {
        method: "PUT",
        body: JSON.stringify({
          employee_name: name,
          employee_salary: salary,
          employee_age: age,
        }),
      })
        .then((response) => response.json())
        .then((response) => {
          if (response.status == "success") {
            alert("Updated successfully");
          } else {
            alert("Error occured");
          }
        });
    } else {
      alert("Error value");
    }

    setOpen(false);
  };

  const confirmDelete = () => {
    fetch(`http://dummy.restapiexample.com/public/api/v1/delete/${user.id}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((response) => {
        if (response.status == "success") {
          alert("Deleted successfully");
        } else {
          alert("Error occured");
        }
      });
    setOpenDelete(false);
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
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        key={user.id}
      >
        <div className="data" onClick={handleClickOpen}>
          <ul style={{textAlign:"left"}}>
            <text>Name:{user.employee_name}</text><br />
            <text>Age:{user.employee_age}</text><br />
            <text>Salary:{user.employee_salary}</text>
          </ul>
        </div>
        <button title="Delete" onClick={handleDeleteOpen}>
          Delete
        </button>

        <Dialog
          open={openDelete}
          onClose={handleDeleteClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            {"Delete Employee Data"}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              Are you sure you want to delete?
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleDeleteClose}>Cancel</Button>
            <Button onClick={confirmDelete} autoFocus>
              Confirm
            </Button>
          </DialogActions>
        </Dialog>
      </div>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Update info</DialogTitle>
        <DialogContent>

          <input
            type="text"
            name="name"
            onChange={handleName}
            placeholder="Name"
            value={name}
            style={{marginBottom:10}}
          />
          <br />
          <input
            type="text"
            name="salary"
            onChange={handleSalary}
            placeholder="Salary"
            value={salary}
            style={{marginBottom:10}}
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
          <Button onClick={handleUpdate}>Update</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
