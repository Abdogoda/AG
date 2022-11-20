import React, { useEffect, useState } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import AnimatedLetters from "./AnimatedLetters";
import LoadingLayout from "./LoadingLayout";
import ProjectsData from "../assets/data/ProjectsData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function Portfolio() {
 document.title = "AG | PROJECTS";
 // letter animation
 const [letterClass, setLetterClass] = useState("text-animate");
 useEffect(() => {
  setTimeout(() => {
   setLetterClass("text-animate-hover");
  }, 3000);
 }, []);
 // projects effect
 useEffect(() => {
  const mediaQuery = window.matchMedia("(max-width:767px)");
  document.querySelectorAll(".project-box").forEach((projectBox) => {
   projectBox.addEventListener("mousemove", (e) => {
    if (mediaQuery.matches) {
     var xAxis = (window.innerWidth / 2 - e.pageX) / 0;
     var yAxis = (window.innerHeight / 2 - e.pageY) / 0;
    } else {
     var xAxis = (window.innerWidth / 2 - e.pageX) / 65;
     var yAxis = (window.innerHeight / 2 - e.pageY) / 65;
    }
    projectBox.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
   });
   projectBox.addEventListener("mouseenter", (e) => {
    projectBox.style.transition = "none";
   });
   projectBox.addEventListener("mouseleave", (e) => {
    projectBox.style.transition = "all 0.4s ease";
    projectBox.style.transform = "rotateY(0deg) rotateX(0deg)";
   });
  });
 });
 return (
  <>
   <LoadingLayout />
   <Header />
   <Sidebar />
   <section className="section portfolio__section" id="portfolio">
    <div className="container portfolio__container container__flex__column">
     <h1 className="section__title">
      <AnimatedLetters
       letterClass={letterClass}
       strArray={[
        "M",
        "y",
        " ",
        "R",
        "e",
        "c",
        "e",
        "n",
        "t",
        " ",
        "W",
        "o",
        "r",
        "k",
       ]}
       index={22}
      />
     </h1>
     <div className="projects-container">
      {ProjectsData.map((projectData, index) => {
       const {
        img,
        mobileImg,
        title,
        description,
        languages,
        liveDemoLink,
        githubLink,
       } = projectData;
       return (
        <div
         className="project-box"
         key={index}
         style={{
          animationDelay: `${0.2 * index + 1.6}s`,
         }}
        >
         <div
          className="box__img__overlay"
          style={{
           backgroundImage: `url(${img})`,
          }}
         >
          <img
           src={mobileImg}
           alt={title}
           className="mobile__img"
           style={{ animationDelay: `${0.2 * index + 1.7}s` }}
          />
          <div className="project-cover">
           <h2 className="title">{title}</h2>
           <p>{description}</p>
           <div className="languages">
            {languages.map((language, index) => {
             return (
              <FontAwesomeIcon
               key={index}
               icon={language.icon}
               className={`language__icon ${language.class}__icon`}
              />
             );
            })}
           </div>
           <div className="project-links">
            <a
             href={`${liveDemoLink}`}
             target="_blank"
             rel="noopener"
             className="project-link"
            >
             Live Demo
            </a>
            <a
             href={`${githubLink}`}
             target="_blank"
             rel="noopener"
             className="project-link"
            >
             See Code
            </a>
           </div>
          </div>
         </div>
        </div>
       );
      })}
     </div>
    </div>
   </section>
  </>
 );
}

export default Portfolio;
