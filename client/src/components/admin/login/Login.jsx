import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadUser, loginAdmin } from "../../../redux/actions/user";
import { Navigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import Loader from "../../layout/Loading/Loader";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const { isAuthenticated, error, message, loading } = useSelector(
    (state) => state.login
  );

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(loginAdmin(email, password));
  };

  useEffect(() => {
    if (message) {
      toast.success(message);
      dispatch({ type: "clearMessage" });
    }
    if (error) {
      toast.error(error);
      dispatch({ type: "clearErrors" });
    }
  }, [dispatch, error, message]);

  useEffect(() => {
    dispatch(loadUser());
  }, [dispatch]);
  if (isAuthenticated) return <Navigate to={"/adminpanel"} />;
  return loading ? (
    <Loader />
  ) : (
    <div className="login">
      <form onSubmit={submitHandler}>
        <h1>Welcome Admin</h1>
        <input
          type="email"
          placeholder="Email"
          required
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <input
          type="password"
          placeholder="Password"
          required
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <button type="submit">Log In</button>
      </form>
    </div>
  );
};

export default Login;
