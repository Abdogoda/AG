import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Header from "../Components/Header";
import Sidebar from "../Components/Sidebar";
import AnimatedLetters from "../Components/AnimatedLetters";
import LoadingLayout from "../Components/LoadingLayout";
import { ProjectsData } from "../assets/data/Data";
import ProjectShowImages from "../Components/ProjectShowImages";
import { FaGithub, FaLink } from "react-icons/fa6";
function Project() {
 document.title = "AG | PROJECT";
 const { projectSlug } = useParams();
 const navigate = useNavigate();
 const [projectData, setProjectData] = useState(null);
 const [letterClass, setLetterClass] = useState("text-animate");
 useEffect(() => {
  if (projectSlug) {
   setProjectData(ProjectsData.find((project) => project.slug === projectSlug));
  } else {
   navigate("/projects");
  }
 }, [projectSlug]);
 useEffect(() => {
  // letter animation
  setTimeout(() => {
   setLetterClass("text-animate-hover");
  }, 3000);
 }, [projectData]);
 return (
  <>
   <LoadingLayout />
   <Header />
   <Sidebar />
   {projectData && (
    <section className="section project__section" id="project">
     <div className="container project__container container__flex__column">
      <h1 className="section__title">
       <AnimatedLetters
        letterClass={letterClass}
        strArray={projectData.title.split("")}
        index={10}
       />
      </h1>
      <div className="project-container">
       <div className="project__images__container">
        <ProjectShowImages projectImages={projectData.images} />
       </div>
       <p style={{ marginTop: "15px", fontSize: "18px" }}>
        {projectData.description}
       </p>
       <ul className="languages__list">
        {projectData.languages.map((language, index) => {
         return (
          <li
           key={index}
           style={{
            animationDelay: `${0.2 * index + 1.5}s`,
           }}
          >
           <img src={language} alt={`langauge__image__${index}`} />
          </li>
         );
        })}
       </ul>
       <div className="d__flex">
        <a
         href={projectData.githubLink}
         target="_blank"
         rel="noreferrer"
         className="main__button"
        >
         Github Link <FaGithub />
        </a>
        {projectData.liveDemoLink && (
         <a
          href={projectData.liveDemoLink}
          target="_blank"
          rel="noreferrer"
          className="main__button"
         >
          Live Demo <FaLink />
         </a>
        )}
       </div>
      </div>
     </div>
    </section>
   )}
  </>
 );
}

export default Project;
