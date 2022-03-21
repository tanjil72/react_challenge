import React,{useState} from 'react'
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";

export default function DialogueComp({open,handleClose}) {
    const [name, setName] = useState();
    const [age, setAge] = useState();
    const [salary, setSalary] = useState();


    const handleName = (e) => {
        setName(e.target.value);
      };
      const handleAge = (e) => {
        setAge(e.target.value);
      };
      const handleSalary = (e) => {
        setSalary(e.target.value);
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
                if (response.status === "success") {
                  alert("Record has been added");
                } else {
                  alert("Something went wrong");
                }
              });
          } catch (e) {
            alert("Something went wrong");
          }
        }
        handleClose();
      };



  return (
    <>
    <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Update info</DialogTitle>
        <DialogContent>
          <input
            type="text"
            name="name"
            onChange={handleName}
            placeholder="Name"
            value={name}
            style={{ marginBottom: 10 }}
          />
          <br />
          <input
            type="text"
            name="salary"
            onChange={handleSalary}
            placeholder="Salary"
            value={salary}
            style={{ marginBottom: 10 }}
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
    </>
  )
}
