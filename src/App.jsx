import {
  Button,
  Card,
  CardContent,
  Checkbox,
  Chip,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Divider,
  FormControl,
  FormControlLabel,
  IconButton,
  InputLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { Box, Container, Stack } from "@mui/system";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { getColor } from "./assets/utils/color";
import { useState } from "react";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  const [task, setTask] = useState({
    id: "",
    title: "",
    priority: "normal",
    isDone: false,
  });
  const [taskList, setTaskList] = useState([
    {
      id: 1,
      title: "Ăn Cơm",
      priority: "high",
      isDone: false,
    },
    {
      id: 2,
      title: "Nấu cơm",
      priority: "normal",
      isDone: true,
    },
    {
      id: 3,
      title: "Rửa chén",
      priority: "low",
      isDone: false,
    },
  ]);
  const [isValidate, setIsValidate] = useState(false);
  const handleSubmit = () => {
    if (task.title.trim() === "") {
      setIsValidate(true);
      toast.error("Unsuccessfully");
      return;
    }
    setTaskList([...taskList, task]);
    setTask({
      id: "",
      title: "",
      priority: "normal",
      isDone: false,
    });
    toast.success("Successfully");
    setIsValidate(false);
  };

  const [filter, setFilter] = useState("all");

  const handleDelete = (x) => {
    const newArray = taskList.filter((task, index) => index !== x);
    setTaskList(newArray);
    toast.success("Successfully");
  };

  const toggleStatus = (x) => {
    const newTaskList = taskList.map((task, index) => {
      if (x === index) {
        return {
          ...task,
          isDone: !task.isDone,
        };
      } else {
        return task;
      }
    });
    setTaskList(newTaskList);
  };

  const [open, setOpen] = useState(false);
  const [editedTask, setEditedTask] = useState({
    id: "",
    title: "",
    priority: "normal",
    isDone: false,
  });
  const handleEditClick = (task)=>{
    setOpen(true)
    setEditedTask(task)
  }
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      <Dialog maxWidth={'lg'} open={open} onClick={()=>setOpen(false)}>
        <DialogTitle>Edit</DialogTitle>
        <DialogContent>
          <DialogContentText>Edit your task</DialogContentText>
          <Stack direction={"row"} gap={2} width={600} marginTop={2}>
            <TextField
              error={isValidate && editedTask.title.trim() === ""}
              id="outlined-basic"
              label="Title"
              variant="outlined"
              value={editedTask.title}
              sx={{ flex: 3 }}
              onChange={(e) =>
                setEditedTask({
                  ...editedTask,
                  title: e.target.value,
                })
              }
            />
            <Box sx={{ flex: 1 }}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Priority</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  defaultValue={editedTask.priority}
                  label="Priority"
                  onChange={(e) =>
                    setEditedTask({
                      ...editedTask,
                      priority: e.target.value,
                    })
                  }
                >
                  <MenuItem value={"high"}>High</MenuItem>
                  <MenuItem value={"normal"}>Normal</MenuItem>
                  <MenuItem value={"low"}>Low</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </Stack>
        </DialogContent>
        <DialogActions>
          <Button onClick={()=>setOpen(false)}>Cancel</Button>
          <Button onClick={()=>setOpen(false)}>Submit</Button>
        </DialogActions>
      </Dialog>
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
            <Container>
              <Typography variant="h6" marginTop={2} marginBottom={1}>
                Filter by status
              </Typography>
              <FormControl>
                <RadioGroup
                  onChange={(e) => setFilter(e.target.value)}
                  aria-labelledby="demo-radio-buttons-group-label"
                  defaultValue={"all"}
                  name="radio-buttons-group"
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                  }}
                >
                  <FormControlLabel
                    value="all"
                    control={<Radio />}
                    label="All"
                  />
                  <FormControlLabel
                    value="high"
                    control={<Radio />}
                    label="High"
                  />
                  <FormControlLabel
                    value="normal"
                    control={<Radio />}
                    label="Normal"
                  />
                  <FormControlLabel
                    value="low"
                    control={<Radio />}
                    label="Low"
                  />
                </RadioGroup>
              </FormControl>
            </Container>
            <Container sx={{ height: 400 }}>
              <Typography variant="h6" marginTop={2} marginBottom={1}>
                Your Tasks
              </Typography>
              <Stack direction={"column"}>
                {taskList.map((task, index) =>
                  task.priority === filter || filter === "all" ? (
                    <Stack
                      direction={"row"}
                      gap={1}
                      alignItems={"center"}
                      key={index}
                    >
                      <Checkbox
                        checked={task.isDone}
                        onChange={() => toggleStatus(index)}
                      />
                      <Typography
                        variant="body"
                        flex={1}
                        sx={{
                          textDecoration: task.isDone ? "line-through" : "none",
                        }}
                      >
                        {task.title}
                      </Typography>
                      <Chip
                        label={task.priority}
                        color={getColor(task.priority)}
                      />
                      <IconButton
                        aria-label="edit"
                        size="large"
                        onClick={()=>handleEditClick(task)}
                      >
                        <EditIcon fontSize="inherit" />
                      </IconButton>
                      <IconButton
                        aria-label="delete"
                        size="large"
                        onClick={() => handleDelete(index)}
                      >
                        <DeleteIcon fontSize="inherit" />
                      </IconButton>
                    </Stack>
                  ) : (
                    <></>
                  )
                )}
                {taskList.filter(
                  (task, index) => task.priority === filter || filter === "all"
                ).length === 0 ? (
                  <Typography variant="h8">Empty</Typography>
                ) : (
                  <></>
                )}
              </Stack>
            </Container>
            <Divider sx={{ marginY: 2 }}></Divider>
            <Container>
              <Typography variant="h6" marginBottom={1} marginTop={2}>
                Create task
              </Typography>
              <Stack direction={"row"} gap={2}>
                <TextField
                  error={isValidate && task.title.trim() === ""}
                  id="outlined-basic"
                  label="Title"
                  variant="outlined"
                  value={task.title}
                  sx={{ flex: 3 }}
                  onChange={(e) =>
                    setTask({
                      ...task,
                      title: e.target.value,
                    })
                  }
                />
                <Box sx={{ flex: 1 }}>
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">
                      Priority
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      defaultValue={"normal"}
                      label="Priority"
                      onChange={(e) =>
                        setTask({
                          ...task,
                          priority: e.target.value,
                        })
                      }
                    >
                      <MenuItem value={"high"}>High</MenuItem>
                      <MenuItem value={"normal"}>Normal</MenuItem>
                      <MenuItem value={"low"}>Low</MenuItem>
                    </Select>
                  </FormControl>
                </Box>
              </Stack>
              <Button
                variant="contained"
                sx={{ width: "100%", marginTop: 2 }}
                onClick={handleSubmit}
              >
                Add task
              </Button>
            </Container>
          </CardContent>
        </Card>
      </Box>
    </>
  );
}

export default App;
