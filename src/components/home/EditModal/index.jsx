/* eslint-disable react/prop-types */
import { Box, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, FormControl, InputLabel, MenuItem, Select, Stack, TextField } from '@mui/material'

function EditModal({taskList, editedTask, setEditedTask, setTaskList, setOpen, isValidate, open }) {
    const handleUpdateTask = () => {
        // eslint-disable-next-line no-unused-vars
        const newTaskList = taskList.map((task, index) => {
          if (editedTask.id === task.id) {
            return editedTask;
          } else {
            return task;
          }
        });
        setTaskList(newTaskList);
        setOpen(false);
      };
  return (
    <Dialog maxWidth={"lg"} open={open} onClose={() => setOpen(false)}>
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
          <Button onClick={() => setOpen(false)}>Cancel</Button>
          <Button onClick={handleUpdateTask}>Submit</Button>
        </DialogActions>
      </Dialog>
  )
}

export default EditModal