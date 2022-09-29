import React, { useEffect, useState } from "react";
import AnimatedLetters from "./AnimatedLetters";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import LoadingLayout from "./LoadingLayout";
import { faCode } from "@fortawesome/free-solid-svg-icons";
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
              <span className={letterClass}>Hi,</span>
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
                  "Frontend Developer",
                  "Backend Developer",
                  "Freelancer",
                  "Designer",
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
          <motion.div
            className="box-spinner"
            animate={{
              x: 0,
              opacity: 1,
            }}
            initial={{ x: 20, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
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
                <FontAwesomeIcon icon={faCode} />
              </p>
            </h1>
          </motion.div>
        </div>
      </section>
    </>
  );
}

export default Home;
