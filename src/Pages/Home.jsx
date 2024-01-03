import React, { useEffect, useState } from "react";
import AnimatedLetters from "../Components/AnimatedLetters";
import Header from "../Components/Header";
import Sidebar from "../Components/Sidebar";
import { Link } from "react-router-dom";
import { FaCode } from "react-icons/fa6";
import LoadingLayout from "../Components/LoadingLayout";
import { Typewriter } from "react-simple-typewriter";
function Home() {
 document.title = "AG | HOME";
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
   <section className="section home__section " id="home">
    <div className="container home__container container__flex">
     <div className="home__info">
      <h1>
       <AnimatedLetters
        letterClass={letterClass}
        strArray={["H", "i", ","]}
        index={18}
       />
       <br />
       <span className={`${letterClass} _20 text__space`}> I'm</span>
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
      <h1>
       <p>
        <FaCode />
       </p>
      </h1>
     </div>
    </div>
   </section>
  </>
 );
}

export default Home;
