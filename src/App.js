import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Portfolio from "./Pages/Portfolio";
import Project from "./Pages/Project";
import Contact from "./Pages/Contact";
import Login from "./Pages/Login";
import Error from "./Pages/Error";
import Particle from "./Components/Particle";
function App() {
 return (
  <>
   <Particle />
   <Routes>
    <Route path="/">
     <Route index element={<Home />} />
     <Route path="about" element={<About />} />
     <Route path="projects">
      <Route index element={<Portfolio />} />
      <Route path=":projectSlug" element={<Project />} />
     </Route>
     <Route path="contact" element={<Contact />} />
     <Route path="login" element={<Login />} />
     <Route path="*" element={<Error />} />
    </Route>
   </Routes>
  </>
 );
}

export default App;
