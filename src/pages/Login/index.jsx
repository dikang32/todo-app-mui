import {
  Box,
  Button,
  Card,
  CardContent,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function Login() {
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
              Login
            </Typography>
            <TextField
              id="outlined-basic"
              label="Username"
              variant="outlined"
              fullWidth
              sx={{ marginBottom: 2 }}
            />
            <TextField
              id="outlined-basic"
              label="Password"
              variant="outlined"
              fullWidth
            />
            <Button variant="contained" fullWidth sx={{ my: 2 }}>
              Login
            </Button>
            <Typography variant="body" textAlign={"center"}>
              Don't have an account?
            </Typography>
            <Link to={"/register"} style={{ width: "100%" }}>
              <Button variant="outlined" fullWidth sx={{ mt: 2 }}>
                Register
              </Button>
            </Link>
          </CardContent>
        </Card>
      </Box>
    </>
  );
}

export default Login;
