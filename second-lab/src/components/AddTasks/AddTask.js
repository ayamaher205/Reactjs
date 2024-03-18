import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import './AddTask.css'
const ToDo = () => {
  const handleSubmit = (e) => {
    console.log( e.target.value );
  }
  return (
    <Box className="txt" component="form" noValidate autoComplete="off">
      <h1>To-DO App</h1>
      <TextField 
        onChange={handleSubmit}
        className="inpt"
        id="outlined-basic"
        variant="outlined"
        placeholder="Enter task"
      />
    </Box>
  );
}
export default ToDo;
