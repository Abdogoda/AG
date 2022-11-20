import React, { useEffect, useState } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import AnimatedLetters from "./AnimatedLetters";
import LoadingLayout from "./LoadingLayout";
import emailjs from "@emailjs/browser";
import SocialData from "../assets/data/SocialData.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function Contact() {
 document.title = "AG | CONTACT";
 // letter animation
 const [letterClass, setLetterClass] = useState("text-animate");
 useEffect(() => {
  setTimeout(() => {
   setLetterClass("text-animate-hover");
  }, 3000);
 }, []);
 // email js contact
 const sendEmail = (e) => {
  e.preventDefault();
  emailjs
   .sendForm(
    "service_eu0ps1a",
    "template_io48jwb",
    e.target,
    "Luo1LI6NtVeUvpKay"
   )
   .then(
    () => {
     alert("Your Message Is Successfully Sent!");
     window.location.reload(false);
    },
    () => {
     alert("Faild To Send The Message, Please Try Again!");
    }
   );
 };
 return (
  <>
   <LoadingLayout />
   <Header />
   <Sidebar />
   <section className="section contact__section" id="contact">
    <div className="container contact__container container__flex__column">
     <h1 className="section__title">
      <AnimatedLetters
       letterClass={letterClass}
       strArray={["C", "o", "n", "t", "a", "c", "t", "", "M", "e"]}
       index={22}
      />
     </h1>
     <div className="contact__content">
      <div className="contact-form">
       <form action="" onSubmit={sendEmail}>
        <ul>
         <div className="halfs">
          <li>
           <input type="text" name="name" required id="name" />
           <label htmlFor="name">Your Name</label>
          </li>
          <li>
           <input type="email" name="email" required id="email" />
           <label htmlFor="email">Your Email</label>
          </li>
         </div>
         <li>
          <input type="text" name="subject" required id="subject" />
          <label htmlFor="subject">Your Subject</label>
         </li>
         <li>
          <textarea name="message" required id="message"></textarea>
          <label htmlFor="message">Your Message</label>
         </li>
         <input type="submit" value="Send" className="contact__button" />
         <div className="container icons-effect ">
          {SocialData.map((social, index) => {
           return (
            <div
             key={index}
             className={`icon ${social.class}`}
             style={{ animationDelay: `${index * 0.1 + 2.4}s` }}
            >
             <div className="tooltip">{social.name}</div>
             <a href={social.link} target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={social.icon} />
             </a>
            </div>
           );
          })}
         </div>
        </ul>
       </form>
      </div>
     </div>
    </div>
   </section>
  </>
 );
}

export default Contact;
