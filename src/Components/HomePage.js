import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import List from "./List";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

export default function HomePage({ setAuth }) {
  const [open, setOpen] = React.useState(false);
  const [inputText, setInputText] = useState("");

  const [name, setName] = useState();
  const [age, setAge] = useState();
  const [salary, setSalary] = useState();

  let inputHandler = (e) => {
    let lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
  };

  const logout = () => {
    setAuth(false);
    localStorage.setItem("Auth", JSON.stringify(false));
  };
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  const handleCreate = () => {
    if (name.length > 0 && age > 0 && salary > 0) {
      try {
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
            if (response.status == "success") {
              alert("Record has been added");
            } else {
              alert("Something went wrong");
            }
          });
      } catch (e) {
        alert("Something went wrong");
      }
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
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div className="main">
        <div className="search">
          <TextField
            id="outlined-basic"
            onChange={inputHandler}
            variant="outlined"
            fullWidth
            label="Search"
          />
          <button
            style={{ marginLeft: 10 }}
            title="Create"
            onClick={handleClickOpen}
          >
            Create
          </button>
        </div>
        <List input={inputText} />
        <div style={{ paddingBottom: 20 }}>
          {" "}
          <button title="Logout" onClick={logout}>
            Logout
          </button>
        </div>
      </div>
      
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Create</DialogTitle>
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
          <Button onClick={handleCreate}>Create</Button>
        </DialogActions>
      </Dialog>

    </div>
  );
}
