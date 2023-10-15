import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  TextField,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";

function Register() {
  return (
    <>
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
          <CardContent
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography variant="h4" textAlign={"center"} marginBottom={2}>
              Register
            </Typography>
            <TextField
              fullWidth
              id="outlined-basic"
              label="Username"
              variant="outlined"
              sx={{ marginBottom: 2 }}
            />
            <TextField
              fullWidth
              id="outlined-basic"
              label="Password"
              variant="outlined"
            />
            <Button variant="contained" fullWidth sx={{ my: 2 }}>
              Register
            </Button>
            <Typography variant="body" textAlign={"center"}>
               {/* eslint-disable-next-line react/no-unescaped-entities */}
              Don't have an account?
            </Typography>
            <Link to={"/login"} style={{ width: "100%" }}>
              <Button variant="outlined" fullWidth sx={{ mt: 2 }}>
                Login
              </Button>
            </Link>
          </CardContent>
        </Card>
      </Box>
    </>
  );
}

export default Register;
