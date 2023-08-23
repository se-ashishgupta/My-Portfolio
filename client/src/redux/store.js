import { configureStore } from "@reduxjs/toolkit";
import { adminReducer, loginReducer, userReducer } from "./reducers/user";

const store = configureStore({
  reducer: {
    user: userReducer,
    login: loginReducer,
    admin: adminReducer,
  },
});

export default store;

export const server = import.meta.env.VITE_SERVER_API;
