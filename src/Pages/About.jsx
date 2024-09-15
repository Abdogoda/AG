import React, { useEffect, useState } from "react";
import Header from "../Components/Header";
import Sidebar from "../Components/Sidebar";
import AnimatedLetters from "../Components/AnimatedLetters";
import CV from "../assets/data/abdogoda-resume.pdf";
import LoadingLayout from "../Components/LoadingLayout";
import { Link } from "react-router-dom";
import { AboutSkills, AboutParagraphs, AboutListItems } from "../assets/data/Data";

function About() {
 document.title = "AG | ABOUT";
 // letter animation
 const [letterClass, setLetterClass] = useState("text-animate");
 useEffect(() => {
  setTimeout(() => {
   setLetterClass("text-animate-hover");
  }, 3000);
 }, []);
 return (
  <>
   <LoadingLayout />
   <Header />
   <Sidebar />
   <section className="section about__section" id="about">
    <div className="container about__container container__flex">
     <div className="about__info">
      <h1 className="section__title">
       <AnimatedLetters
        letterClass={letterClass}
        strArray={["A", "b", "o", "u", "t", " ", "M", "e"]}
        index={22}
       />
      </h1>
      {AboutParagraphs &&
       AboutParagraphs.map((text, index) => {
        return (
         <p 
          className="description" 
          key={index} 
         >
          {text}
         </p>
        );
       })}
       
      <ul className="about-list-items">
       {AboutListItems &&
        AboutListItems.map((text, index) => {
         return (
          <li 
           key={index}
           style={{
            animationDelay: `${0.1 * index + 1.5}s`,
           }}
          >
           {text}
          </li>
         );
        })}
      </ul>

      <a href={CV} download="abdo-goda-resume" className="main__button">
       Download CV
      </a>
      <Link to="/contact" className="main__button ml-1">
       Lets Talk
      </Link>
     </div>
     <div className="skills-zone">
      <div className="box">
       {AboutSkills.map((skill, index) => {
        return (
         <div className="card" id={skill.side} key={index}>
          <img src={skill.img} alt={`skill__${index}`} />
         </div>
        );
       })}
      </div>
     </div>
    </div>
   </section>
  </>
 );
}

export default About;
