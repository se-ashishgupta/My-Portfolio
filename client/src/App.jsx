import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Toaster, toast } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "./redux/actions/user";

//Main Website
import Layout from "./components/layout/Layout";
import Home from "./components/home/Home";
import Contact from "./components/contact/Contact";
import Login from "./components/admin/login/Login";
import About from "./components/about/About";
import Skills from "./components/skills/Skills";
import Projects from "./components/projects/Projects";
import Services from "./components/services/Services";
import Blogs from "./components/blogs/Blogs";

//Loader
import Loader from "./components/layout/Loading/Loader";

//Admin Panel
import AdminPanel from "./components/admin/adminPanel/AdminPanel";
import Dashboard from "./components/admin/dashboard/Dashboard";
import Account from "./components/admin/account/Account";
import AdminQualifications from "./components/admin/qualifications/Qualifications";
import AdminSkills from "./components/admin/skills/Skills";
import AdminProjects from "./components/admin/projects/Projects";
import AdminServices from "./components/admin/services/Services";
import AdminBlogs from "./components/admin/blogs/Blogs";
import AdminMessages from "./components/admin/messages/Messages";

const App = () => {
  const [ratio, setRatio] = useState(window.innerWidth / window.innerHeight);
  useEffect(() => {
    const resizeRatio = () => {
      setRatio(window.innerWidth / window.innerHeight);
    };

    window.addEventListener("resize", resizeRatio);

    return () => {
      window.removeEventListener("resize", resizeRatio);
    };
  }, [ratio]);

  const dispatch = useDispatch();
  const { user, loading, message, error } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);

  useEffect(() => {
    if (message) {
      toast.success(message);
      dispatch({ type: "clearMessage" });
    }
    if (error) {
      toast.error(error);
      dispatch({ type: "clearErrors" });
    }
  }, [dispatch, message, error]);
  return (
    <>
      <Router>
        {loading ? (
          <Loader />
        ) : (
          <>
            <Routes>
              <Route path="/" element={<Layout user={user} />}>
                <Route index element={<Home user={user} />} />
                <Route path="about" element={<About user={user} />} />
                <Route path="skills" element={<Skills user={user} />} />
                <Route path="projects" element={<Projects user={user} />} />
                <Route path="services" element={<Services />} />
                <Route path="blogs" element={<Blogs />} />
                <Route path="contact" element={<Contact user={user} />} />
              </Route>

              {/* LoginPanel */}
              <Route path="/admin" element={<Login />} />

              {/* AdminPanel */}
              <Route path="/adminpanel" element={<AdminPanel />}>
                <Route index element={<Dashboard />} />
                <Route path="account" element={<Account />} />
                <Route
                  path="qualifications"
                  element={<AdminQualifications />}
                />
                <Route path="skills" element={<AdminSkills />} />
                <Route path="projects" element={<AdminProjects />} />
                <Route path="services" element={<AdminServices />} />
                <Route path="blogs" element={<AdminBlogs />} />
                <Route path="messages" element={<AdminMessages />} />
              </Route>
            </Routes>

            <Toaster />
          </>
        )}
      </Router>
    </>
  );
};

export default App;
