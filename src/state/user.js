import { createAsyncThunk, createReducer } from "@reduxjs/toolkit";
import { fetchApi } from "../config/axiosInstance";
import Cookies from "js-cookie";

export const checkLogin = createAsyncThunk("check", async () => {
  try {
    const res = await fetchApi({
      method: "get",
      url: "/api/users/me",
      headers: { Authorization: `Bearer ${Cookies.get("token")}` },
    });
    return res.data;
  } catch (error) {
    console.log(error);
  }
});

const usersReducer = createReducer(
  {},
  {
    [checkLogin.fulfilled]: (state, action) => action.payload,
  }
);

export default usersReducer;
