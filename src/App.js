import { Route, Routes } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Home from "./pages/Home";
import { useEffect, useState } from "react";

import AdminPanel from "./pages/AdminPanel";
import { fetchApi } from "./config/axiosInstance";
import Cookies from "js-cookie";


function App() {
  const [user, setUser] = useState({});
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
