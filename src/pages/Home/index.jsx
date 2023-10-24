import {
  Card,
  CardContent,
  Divider,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import { useEffect, useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import CreateTask from "../../components/home/CreateTask";
import Filter from "../../components/home/Filter";
import TaskList from "../../components/home/TaskList";
import EditModal from "../../components/home/EditModal";
function Home() {
  const [task, setTask] = useState({
    id: "",
    title: "",
    priority: "normal",
    isDone: false,
  });
  const [taskList, setTaskList] = useState(
    JSON.parse(localStorage.getItem("tasks")) ?? []
  );
  const [isValidate, setIsValidate] = useState(false);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(taskList));
  }, [taskList]);

  // Filter by RadioGroup
  // const [filter,setFilter] = useState("all")

  // Filter by Checkbox
  const [filter, setFilter] = useState({
    high: true,
    normal: true,
    low: true,
  });

  const [open, setOpen] = useState(false);
  const [editedTask, setEditedTask] = useState({
    id: "",
    title: "",
    priority: "normal",
    isDone: false,
  });

  return (
    <>
      <EditModal
        taskList={taskList}
        editedTask={editedTask}
        setEditedTask={setEditedTask}
        setTaskList={setTaskList}
        open={open}
        setOpen={setOpen}
        isValidate={isValidate}
      ></EditModal>
      <Box
        sx={{
          minWidth: "100vw",
          minHeight: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#ddd",
          padding: 10,
        }}
      >
        <Card sx={{ minWidth: 600 }}>
          <CardContent>
            <Typography variant="h4" textAlign={"center"}>
              Todo App MUI
            </Typography>
            <Filter filter={filter} setFilter={setFilter}></Filter>
            <TaskList
              taskList={taskList}
              filter={filter}
              setTaskList={setTaskList}
              setOpen={setOpen}
              setEditedTask={setEditedTask}
            ></TaskList>
            <Divider sx={{ marginY: 2 }}></Divider>
            <CreateTask
              task={task}
              isValidate={isValidate}
              setTask={setTask}
              setIsValidate={setIsValidate}
              setTaskList={setTaskList}
              taskList={taskList}
            ></CreateTask>
          </CardContent>
        </Card>
      </Box>
    </>
  );
}

export default Home;
