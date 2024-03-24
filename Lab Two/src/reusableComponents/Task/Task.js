import * as React from "react";
import Stack from "@mui/material/Stack";
import DeleteIcon from "@mui/icons-material/Delete";
import Buttons from "../../controllers/Button/Button";
import './Task.css'
const Task = ({ task, handler, Undo, h2Class }) => {
  return (
    <div>
      <Stack
        className="task"
        direction={{ xs: "column", sm: "row" }}
        spacing={{ xs: 1, sm: 2, md: 4 }}
      >
        <Buttons
          variant={"contained"}
          txt={"Delete"}
          handleEvent={handler}
        ></Buttons>
        <Buttons
          variant={"contained"}
          txt={"Undo"}
          handleEvent={Undo}
        ></Buttons>
        <h2 className={h2Class}>{task}</h2>
      </Stack>
    </div>
  );
};

export default Task;
