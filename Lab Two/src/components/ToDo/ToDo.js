import { useState, Fragment, useRef } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import ToDo from "../AddTasks/AddTask";
import Buttons from "../../controllers/Button/Button";
import Task from "../../reusableComponents/Task/Task";
import './ToDo.css'
const ToDoContainer = () => {
  const [ toDos, setToDos ] = useState( [ {
    id:0,
    title: "",
    isUndo:false
  }])
  const [ task, setTask ] = useState( "" );
  const handleChange = ( e ) => {
      setTask(e.target.value);
  };
  const handleSubmit = () => {
    const newTask = {
      title: task,
      id: toDos.length,
      isUndo: false
    }
    setToDos( [ ...toDos, newTask ] );
  }
  const handleDelete = (taskId) => {
    const tempToDos = toDos.filter((e) => e.id !== taskId);
    setToDos( [ ...tempToDos] );
  }
  const handleUndo = (taskId) => {
  setToDos((prevToDos) =>
    prevToDos.map((task) =>
      task.id === taskId ? { ...task, isUndo: !task.isUndo } : task
    )
  );
};
    return (
      <Fragment>
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
            <ToDo handler={handleChange} ></ToDo>
            <Buttons
              txt={"Add Task"}
              variant={"contained"}
              handleEvent={handleSubmit}
            ></Buttons>
            {
              toDos.length === 1 ? (
              <p>There is no tasks</p>
            ) : (
                  toDos.map( (e) => {
                if(e.id!== 0)
                return (
                  <Fragment>
                    <Task
                      task={e.title}
                      handler={() => handleDelete( e.id )}
                      Undo={()=>handleUndo(e.id)}
                      h2Class={e.isUndo?'line':' '}
                      key={e.id}
                    />
                  </Fragment>
                );
              })
              )
            }
          </Box>
        </Container>
      </Fragment>
    );
};
export default ToDoContainer;
