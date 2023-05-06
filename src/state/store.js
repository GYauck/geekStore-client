import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "./user";

const store = configureStore({
  reducer: {
    users: usersReducer,
  },
});

export default store;
