import { Route, Routes } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { CacheProvider } from "./contexts/CacheContext";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Portfolio from "./Pages/Portfolio";
import Project from "./Pages/Project";
import YouTube from "./Pages/YouTube";
import PlaylistDetail from "./Pages/PlaylistDetail";
import Contact from "./Pages/Contact";
import Login from "./Pages/Login";
import Error from "./Pages/Error";
import Particle from "./Components/Particle";

function App() {
 return (
  <CacheProvider>
   <HelmetProvider>
    <Particle />
    <Routes>
     <Route path="/">
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="projects">
       <Route index element={<Portfolio />} />
       <Route path=":projectSlug" element={<Project />} />
      </Route>
      <Route path="youtube">
       <Route index element={<YouTube />} />
       <Route path=":playlistSlug" element={<PlaylistDetail />} />
      </Route>
      <Route path="contact" element={<Contact />} />
      <Route path="login" element={<Login />} />
      <Route path="*" element={<Error />} />
     </Route>
    </Routes>
   </HelmetProvider>
  </CacheProvider>
 );
}

export default App;
