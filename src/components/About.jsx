import React, { useEffect, useState } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import AnimatedLetters from "./AnimatedLetters";
import CV from "../assets/data/cv.pdf";
import LoadingLayout from "./LoadingLayout";
import { Link } from "react-router-dom";
function About() {
 document.title = "AG | ABOUT";
 // letter animation
 const [letterClass, setLetterClass] = useState("text-animate");
 useEffect(() => {
  setTimeout(() => {
   setLetterClass("text-animate-hover");
  }, 3000);
 }, []);
 // skills effect
 const [skillSize, setSkillSize] = useState("400");
 const mediaQuery = window.matchMedia("(max-width:500px)");
 useEffect(() => {
  if (mediaQuery.matches) {
   setSkillSize("270");
  } else {
   setSkillSize("500");
  }
 }, [mediaQuery]);
 useEffect(() => {
  eval(
   `try {
        TagCanvas.Start('myCanvas', 'tags', {
          textColour: '#ffff',
          outlineColour: '#45f3ff',
          outlineMethod: 'colour',
          reverse: true,
          depth: 0.8,
          maxSpeed: 0.04,
          fadeIn: 800,
          shape: "sphere",
          textFont: 'Helvetiva Neue'
        })
      } catch (e) {
        document.getElementById('myCanvasContainer').style.display = 'none'
      }`
  );
 });
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
      <p className="description">
       Hello! My name is Abdo Goda and i enjoy creating things that live on the
       internet. My interest in web development started back in 2017 when i
       decided to try editing custome themes, turns out i love this track so
       much.
      </p>
      <p className="description">
       I'm quitly confident, naturally curious, and perpetually working on
       improving my chops one design problem at a time.
      </p>
      <p className="description">
       I completed many training projects that contain great design and a lot of
       good skills. You can view them from <Link to="/projects">here</Link>
      </p>
      <p className="description">
       Here are a few technologies i've been working with recently:
      </p>
      <a href={CV} download="download" className="main__button">
       Download CV
      </a>
      <Link to="/contact" className="main__button ml-1">
       Lets Talk
      </Link>
     </div>
     <div className="skills-zone">
      <div id="myCanvasContainer">
       <canvas width={skillSize} height={skillSize} id="myCanvas">
        <p>
         Anything in here will be replaced on browsers that support the canvas
         element
        </p>
       </canvas>
      </div>
      <div id="tags">
       <ul>
        <li>
         <a>HTML</a>
        </li>
        <li>
         <a> CSS </a>
        </li>
        <li>
         <a> TypeScript </a>
        </li>
        <li>
         <a> JSON </a>
        </li>
        <li>
         <a> SASS </a>
        </li>
        <li>
         <a> Bootstrap </a>
        </li>
        <li>
         <a>Animation</a>
        </li>
        <li>
         <a> JavaScript </a>
        </li>
        <li>
         <a> PHP </a>
        </li>
        <li>
         <a> API </a>
        </li>
        <li>
         <a> C++ </a>
        </li>
        <li>
         <a>React</a>
        </li>
        <li>
         <a> Git </a>
        </li>
        <li>
         <a>Node JS</a>
        </li>
        <li>
         <a> MySql </a>
        </li>
        <li>
         <a> Fonts </a>
        </li>
        <li>
         <a>Jquery</a>
        </li>
       </ul>
      </div>
     </div>
    </div>
   </section>
  </>
 );
}

export default About;
