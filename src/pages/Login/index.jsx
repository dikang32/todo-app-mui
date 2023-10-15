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
import * as yup from "yup";

// yup là thư viện giúp tạo ra một chuỗi điều kiện dài khi chỉ cần gọi schema
export const ValidationSchema = yup.object().shape({
  username: yup
    .string()
    .required("Username is required!!!")
    .min(8, "Your username must be at least 8 characters!!!"),
  password: yup
    .string()
    .required("Password is required!!!")
    .min(8, "Your password must be at least 8 characters!!!")
    .max(32, "Your password must be at least 32 characters!!!"),
});

function Login() {
  const [inputValues, setInputValues] = useState({
    username: "",
    password: "",
  });
  const [validate, setvalidate] = useState({
    username: false,
    password: false,
  });
  const navigate = useNavigate();
  const handleLogin = async () => {
    try {
      await ValidationSchema.validate(inputValues, { abortEarly: false });
      if (
        inputValues.username === "admin1234" &&
        inputValues.password === "123456789"
      ) {
        toast.success("Login successfully!!!");
        navigate("/home");
      } else {
        toast.error("Invalid username or password");
      }
    } catch (error) {
      let newValidate = {
        username: false,
        password: false,
      };
      for (let err of error.inner) {
        newValidate = {
          ...newValidate,
          [err.path]: true,
        };
        break;
      }
      setvalidate(newValidate);
      toast.error(error.errors[0]);
    }
  };
  console.log(validate);
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
              error={validate.username}
              fullWidth
              id="outlined-basic"
              label="Username"
              variant="outlined"
              sx={{ marginBottom: 2 }}
              onChange={(e) =>
                setInputValues({ ...inputValues, username: e.target.value })
              }
            />
            <TextField
              error={validate.password}
              fullWidth
              id="outlined-basic"
              label="Password"
              variant="outlined"
              onChange={(e) =>
                setInputValues({ ...inputValues, password: e.target.value })
              }
            />
            <Button
              variant="contained"
              fullWidth
              sx={{ my: 2 }}
              onClick={handleLogin}
            >
              Login
            </Button>
            <Typography variant="body" textAlign={"center"}>
              {/* eslint-disable-next-line react/no-unescaped-entities */}
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
