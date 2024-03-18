import * as React from "react";
import Stack from "@mui/material/Stack";
import DeleteIcon from "@mui/icons-material/Delete";
import Buttons from "../../controllers/Button/Button";
import './Task.css'
const Task = ({task})=>{
  return (
    <div>
      <Stack
        className="task"
        direction={{ xs: "column", sm: "row" }}
        spacing={{ xs: 1, sm: 2, md: 4 }}
      >
        <Buttons variant={"contained"} txt={"Delete"}></Buttons>
        <Buttons variant={"contained"} txt={"Undo"}></Buttons>
        <h2>{task}</h2>
      </Stack>
    </div>
  );
}

export default Task;
