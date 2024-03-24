import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import './AddTask.css'
const ToDo = ({handler}) => {
  return (
    <Box className="txt" component="form" noValidate autoComplete="off">
      <h1>To-DO App</h1>
      <TextField
        onChange={handler}
        className="inpt"
        id="outlined-basic"
        variant="outlined"
        placeholder="Enter task"
      />
    </Box>
  );
};
export default ToDo;
