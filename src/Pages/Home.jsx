import React, { useEffect, useState } from "react";
import AnimatedLetters from "../Components/AnimatedLetters";
import Header from "../Components/Header";
import Sidebar from "../Components/Sidebar";
import SEO from "../Components/SEO";
import { Link } from "react-router-dom";
import { FaCode } from "react-icons/fa6";
import LoadingLayout from "../Components/LoadingLayout";
import { Typewriter } from "react-simple-typewriter";

function Home() {
 // letter animation
 const [letterClass, setLetterClass] = useState("text-animate");
 useEffect(() => {
  setTimeout(() => {
   setLetterClass("text-animate-hover");
  }, 3000);
 }, []);

 const homeJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "AG Portfolio - Abdulrhman Goda",
  "alternateName": "Abdulrhman Goda Portfolio",
  "url": "https://Abdogoda.github.io/AG/",
  "description": "Portfolio website of Abdulrhman Goda, a Software Engineer specializing in Laravel, PHP, React, and JavaScript",
  "author": {
    "@type": "Person",
    "name": "Abdulrhman Goda",
    "jobTitle": "Software Engineer",
    "url": "https://Abdogoda.github.io/AG/"
  },
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://Abdogoda.github.io/AG/projects",
    "query-input": "required name=search_term_string"
  }
 };

 return (
  <>
   <SEO 
     title="Abdulrhman Goda (AG) - Software Engineer"
     description="Welcome to AG Portfolio! I'm Abdulrhman Goda, a dedicated Full Stack Developer with expertise in Laravel, PHP, React, and JavaScript. Explore my 40+ web development projects and get in touch for your next project."
     keywords="Abdulrhman Goda, AG Portfolio, Full Stack Developer, Laravel Developer, PHP Developer, React Developer, JavaScript, Web Development, eCommerce, Freelancer"
     url="https://Abdogoda.github.io/AG/"
     jsonLd={homeJsonLd}
   />
   <LoadingLayout />
   <Header />
   <Sidebar />
   <main className="section home__section " id="home">
    <div className="container home__container container__flex">
     <div className="home__info">
      <h1>
       <AnimatedLetters
        letterClass={letterClass}
        strArray={["H", "i", ","]}
        index={18}
       />
       <br />
       <span className={`${letterClass} _20 text__space`}> I</span>
       <span className={`${letterClass} _21 a__text`}>A</span>
       <AnimatedLetters
        letterClass={letterClass}
        strArray={["b", "d", "o"]}
        index={22}
       />
       <span className={`${letterClass} _22 a__text`}>G</span>
       <AnimatedLetters
        letterClass={letterClass}
        strArray={["o", "d", "a"]}
        index={22}
       />
      </h1>
      <h2 className="dynamic__texts">
       <span className={`${letterClass} _23 text__space`}> I'm</span>
       <span className={`${letterClass} _24`}> a</span>

       <Typewriter
        words={[
         "Full Stack Developer",
         "Frontend Developer",
         "Backend Developer",
         'YouTuber',
         "Freelancer",
        ]}
        loop={false}
        cursor
        cursorStyle="|"
        typeSpeed={100}
        deleteSpeed={100}
        delaySpeed={1000}
       />
      </h2>
      <Link to="/contact" className="main__button">
       Let's Talk
      </Link>
     </div>
     <div className="box-spinner">
      <div className="spinner">
       <span style={{ "--j": "1" }}></span>
       <span style={{ "--j": "2" }}></span>
       <span style={{ "--j": "3" }}></span>
       <span style={{ "--j": "4" }}></span>
       <span style={{ "--j": "5" }}></span>
       <span style={{ "--j": "6" }}></span>
       <span style={{ "--j": "7" }}></span>
       <span style={{ "--j": "8" }}></span>
       <span style={{ "--j": "9" }}></span>
       <span style={{ "--j": "10" }}></span>
       <span style={{ "--j": "11" }}></span>
       <span style={{ "--j": "12" }}></span>
      </div>
      <h2 aria-label="Code Icon">
       <p>
        <FaCode />
       </p>
      </h2>
     </div>
    </div>
   </main>
  </>
 );
}

export default Home;
