/* eslint-disable react/prop-types */
import {
  Checkbox,
  Container,
  FormControl,
  FormControlLabel,
  FormGroup,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";

function Filter({filter, setFilter }) {
  const handleFilter = (event) => {
    setFilter({
      ...filter,
      [event.target.name]: event.target.checked,
    });
  };
  return (
    <Container>
      <Typography variant="h6" marginTop={2} marginBottom={1}>
        Filter by status
      </Typography>

      {/* Filter by Checkbox */}
      <FormControl component="fieldset" variant="standard">
        <FormGroup sx={{ display: "flex", flexDirection: "row" }}>
          <FormControlLabel
            control={
              <Checkbox
                checked={filter.high}
                onChange={handleFilter}
                name="high"
              />
            }
            label="High"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={filter.normal}
                onChange={handleFilter}
                name="normal"
              />
            }
            label="Normal"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={filter.low}
                onChange={handleFilter}
                name="low"
              />
            }
            label="Low"
          />
        </FormGroup>
      </FormControl>

      {/* Filter by RadioGroup */}
      {/* <FormControl>
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
          <FormControlLabel value="all" control={<Radio />} label="All" />
          <FormControlLabel value="high" control={<Radio />} label="High" />
          <FormControlLabel value="normal" control={<Radio />} label="Normal" />
          <FormControlLabel value="low" control={<Radio />} label="Low" />
        </RadioGroup>
      </FormControl> */}
    </Container>
  );
}

export default Filter;
