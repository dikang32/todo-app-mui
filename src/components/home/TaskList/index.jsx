/* eslint-disable react/prop-types */
import {
  Checkbox,
  Chip,
  Container,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { getColor } from "../../../assets/utils/color";
import { toast } from "react-toastify";

function TaskList({taskList, filter, setTaskList, setOpen, setEditedTask}) {
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

  const handleEditClick = (task) => {
    setOpen(true);
    setEditedTask(task);
  };

  const handleDelete = (x) => {
    const newArray = taskList.filter((task, index) => index !== x);
    setTaskList(newArray);
    toast.success("Successfully");
  };
  return (
    <Container sx={{ height: 400 }}>
      <Typography variant="h6" marginTop={2} marginBottom={1}>
        Your Tasks
      </Typography>
      <Stack direction={"column"}>
        {taskList.map((task, index) =>
          filter[task.priority] ? (
            <Stack direction={"row"} gap={1} alignItems={"center"} key={index}>
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
              <Chip label={task.priority} color={getColor(task.priority)} />
              <IconButton
                aria-label="edit"
                size="large"
                onClick={() => handleEditClick(task)}
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
          // eslint-disable-next-line no-unused-vars
          (task, index) =>
            // Filter by Checkbox
            filter[task.priority]

          // Filter by RadioGroup
          // task.priority === filter || filter === "all"
        ).length === 0 ? (
          <Typography variant="h8">Empty</Typography>
        ) : (
          <></>
        )}
      </Stack>
    </Container>
  );
}

export default TaskList;
