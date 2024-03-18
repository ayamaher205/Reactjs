import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import ToDo from "../AddTasks/AddTask";
import Buttons from "../../controllers/Button/Button";
import Task from "../../reusableComponents/Task/Task";
const ToDoContainer = () => {
  let toDos = [];
  
    return (
      <React.Fragment>
        <CssBaseline />
        <Container maxWidth="sm" sx={{ textAlign: "center" }}>
          <Box
            sx={{
              bgcolor: "#6969e9",
              height: "90vh",
              border: "1px solid transport",
              borderRadius: "15px",
              textAlign: "center",
            }}
          >
            <ToDo></ToDo>
            <Buttons txt={"Add Task"} variant={"contained"}></Buttons>
            <Task task={"hello"}></Task>
          </Box>
        </Container>
      </React.Fragment>
    );
};

export default ToDoContainer;
