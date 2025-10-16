import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Header from "../Components/Header";
import Sidebar from "../Components/Sidebar";
import AnimatedLetters from "../Components/AnimatedLetters";
import SEO from "../Components/SEO";
import LoadingLayout from "../Components/LoadingLayout";
import { ProjectsData } from "../assets/data/ProjectsData";
import ProjectShowImages from "../Components/ProjectShowImages";
import { FaGithub, FaLink } from "react-icons/fa6";

function Project() {
 const { projectSlug } = useParams();
 const navigate = useNavigate();
 const [projectData, setProjectData] = useState(null);
 const [letterClass, setLetterClass] = useState("text-animate");
 
 useEffect(() => {
  const foundProject = ProjectsData.find((project) => project.slug === projectSlug);
  foundProject ? setProjectData(foundProject) : navigate("/projects");
}, [projectSlug, navigate]);

 useEffect(() => {
  // letter animation
  setTimeout(() => {
   setLetterClass("text-animate-hover");
  }, 3000);
 }, [projectData]);

 // Generate JSON-LD for the specific project
 const projectJsonLd = projectData ? {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": projectData.title,
  "description": projectData.description,
  "url": `https://Abdogoda.github.io/AG/projects/${projectData.slug}`,
  "author": {
    "@type": "Person",
    "name": "Abdulrhman Goda"
  },
  "programmingLanguage": projectData.type,
  "applicationCategory": "WebApplication",
  "operatingSystem": "Web Browser"
 } : null;

 return (
  <>
   {projectData && (
     <SEO 
       title={`${projectData.title} - Web Development Project by AG`}
       description={`${projectData.description.substring(0, 150)}... Built with ${projectData.type} by Abdulrhman Goda.`}
       keywords={`${projectData.title}, ${projectData.type}, Web Development Project, Abdulrhman Goda, ${projectData.languages?.map(lang => lang.alt || '').join(', ')}`}
       url={`https://Abdogoda.github.io/AG/projects/${projectData.slug}`}
       jsonLd={projectJsonLd}
     />
   )}
   <LoadingLayout />
   <Header />
   <Sidebar />
   {projectData && (
    <main className="section project__section" id="project">
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
           <img src={language} alt={`Technology used in project: ${projectData.type}`} />
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
    </main>
   )}
  </>
 );
}

export default Project;
