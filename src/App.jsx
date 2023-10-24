import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Register from "./pages/Register"

function App() {
  return (
    <>
      <Routes>
        <Route element={<Home></Home>} path="/"></Route>
        <Route element={<Home></Home>} path="/home"></Route>
        <Route element={<Login></Login>} path="/login"></Route>
        <Route element={<Register></Register>} path="/register"></Route>
        <Route path="*" element={<h1>404</h1>} />
      </Routes>
    </>
  )
}

export default App