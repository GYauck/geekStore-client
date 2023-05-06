import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Home from "./pages/Home";
import { useContext, useEffect } from "react";
import axios from "axios";
import AuthContext from "../../client/src/context/AuthProvider";
import AdminPanel from "./pages/AdminPanel";
import { fetchApi } from "./config/axiosInstance";
import Cookies from "js-cookie";


function App() {
  const { user, setUser } = useContext(AuthContext);
  const token = Cookies.get("token");

  const fetchData = async()=> {
    const res = await fetchApi({
      method:"get",
      url:"/api/users/me",
      headers: { Authorization: `Bearer ${token}` }
    })
    setUser(res.data)
    return res
  }
  useEffect(() => {
    fetchData()
  }, []);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />

        { user?.admin? <Route path="/adminPanel" element={<AdminPanel />}/> : <></>}
      </Routes>
    </>
  );
}

export default App;
