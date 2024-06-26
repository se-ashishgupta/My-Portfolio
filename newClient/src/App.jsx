import React, { Suspense, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Sidebar from "./components/layout/Sidebar";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import Services from "./pages/Services";
// import About from "./pages/About";
import Footer from "./components/layout/Footer";
import "./App.css";
import Header from "./components/layout/Header";

// Animation Library
import Aos from "aos";
import "aos/dist/aos.css";

const About = React.lazy(() => import("./pages/About"));

const App = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
    });
  }, []);
  return (
    <Router>
      <Sidebar />
      {/* <Header /> */}
      <div className="md:ml-[6rem]  text-white transition-all duration-300">
        <Suspense fallback={<p>Loading</p>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/services" element={<Services />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </Suspense>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
