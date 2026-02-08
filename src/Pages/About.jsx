import React, { useEffect, useState } from "react";
import Header from "../Components/Header";
import Sidebar from "../Components/Sidebar";
import AnimatedLetters from "../Components/AnimatedLetters";
import SEO from "../Components/SEO";
import LoadingLayout from "../Components/LoadingLayout";
import { Link } from "react-router-dom";
import useData from "../hooks/useData";
import languageIconMap from "../utils/languageIcons";
import { LazyImage } from "../hooks/useLazyImage";

function About() {
 const { data: aboutData, loading, error } = useData('about');
 
 // letter animation
 const [letterClass, setLetterClass] = useState("text-animate");
 useEffect(() => {
  setTimeout(() => {
   setLetterClass("text-animate-hover");
  }, 3000);
 }, []);

 if (loading) return <LoadingLayout />;
 if (error) return <p>Error loading about data: {error}</p>;

 const aboutJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Abdulrhman Goda",
  "alternateName": "AG",
  "description": "Dedicated and skilled PHP Laravel Web Developer with a passion for creating dynamic and user-friendly web applications",
  "url": "https://Abdogoda.github.io/AG/about",
  "jobTitle": "Software Engineer",
  "worksFor": {
    "@type": "Organization",
    "name": "Freelancer"
  },
  "knowsAbout": [
    "Laravel", "PHP", "React", "JavaScript", "HTML", "CSS", "MySQL", 
    "Bootstrap", "Sass", "Python", "Java", "Angular", "API Development"
  ],
  "hasOccupation": {
    "@type": "Occupation",
    "name": "Software Engineer",
    "description": "Specialized in Laravel, PHP, React, and JavaScript development with over 40 completed projects"
  }
 };
 return (
  <>
   <SEO 
     title="AG | About Abdulrhman Goda"
     description="Learn about Abdulrhman Goda (AG), a dedicated Software Engineer with expertise in Laravel, PHP, React, and JavaScript. Discover my skills, experience with 40+ projects, and technical background."
     keywords="About Abdulrhman Goda, Full Stack Developer Background, Laravel Expert, PHP Developer Skills, React Developer Experience, Web Developer Portfolio"
     url="https://Abdogoda.github.io/AG/about"
     jsonLd={aboutJsonLd}
   />
   <LoadingLayout />
   <Header />
   <Sidebar />
   <main className="section about__section" id="about">
    <div className="container about__container container__flex">
     <div className="about__info">
      <h1 className="section__title">
       <AnimatedLetters
        letterClass={letterClass}
        strArray={["A", "b", "o", "u", "t", " ", "M", "e"]}
        index={22}
       />
      </h1>
      {aboutData?.paragraphs &&
       aboutData.paragraphs.map((text, index) => {
        return (
         <p 
          className="description" 
          key={index} 
         >
          {text}
         </p>
        );
       })}

       <p className="description">💡 I’m all about:</p>
       
      <ul className="about-list-items">
       {aboutData?.listItems &&
        aboutData.listItems.map((text, index) => {
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

      <a href={aboutData?.resumeLink} download="abdo-goda-resume" className="main__button">
       Download CV
      </a>
      <Link to="/contact" className="main__button ml-1">
       Lets Talk
      </Link>
     </div>
     <div className="skills-zone">
      <div className="box">
       {aboutData?.skills && aboutData.skills.map((skill, index) => {
        return (
         <div className="card" id={skill.side} key={index}>
          <LazyImage src={languageIconMap[skill.icon]} alt={`${skill.icon} technology skill`} />
         </div>
        );
       })}
      </div>
     </div>
    </div>
   </main>
  </>
 );
}

export default About;
