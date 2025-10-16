import React, { useEffect, useState } from "react";
import Header from "../Components/Header.jsx";
import Sidebar from "../Components/Sidebar.jsx";
import AnimatedLetters from "../Components/AnimatedLetters.jsx";
import SEO from "../Components/SEO.jsx";
import LoadingLayout from "../Components/LoadingLayout.jsx";
import emailjs from "@emailjs/browser";
import { SocailData } from "../assets/data/Data";

function Contact() {
 // letter animation
 const [letterClass, setLetterClass] = useState("text-animate");
 useEffect(() => {
  setTimeout(() => {
   setLetterClass("text-animate-hover");
  }, 3000);
 }, []);

 const contactJsonLd = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "name": "Contact Abdulrhman Goda",
  "description": "Get in touch with Abdulrhman Goda for web development projects, Laravel development, React development, or any freelance work",
  "url": "https://Abdogoda.github.io/AG/contact",
  "mainEntity": {
    "@type": "Person",
    "name": "Abdulrhman Goda",
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer service",
      "email": "abdogoda0a@gmail.com",
      "telephone": "+2001019135059"
    }
  }
 };
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
   <SEO 
     title="AG | Contact Abdulrhman Goda"
     description="Get in touch with Abdulrhman Goda for your web development needs. Specializing in Laravel, PHP, React, and JavaScript development. Available for freelance projects and consulting."
     keywords="Hire Full Stack Developer, Contact Abdulrhman Goda, Laravel Developer for Hire, Web Development Services, Freelance Web Developer"
     url="https://Abdogoda.github.io/AG/contact"
     jsonLd={contactJsonLd}
   />
   <LoadingLayout />
   <Header />
   <Sidebar />
   <main className="section contact__section" id="contact">
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
         <li className="half">
          <input
           type="text"
           name="name"
           autoComplete="off"
           required
           minLength="3"
           id="name"
          />
          <label htmlFor="name">Your Name</label>
         </li>
         <li className="half">
          <input
           type="email"
           name="email"
           autoComplete="off"
           required
           id="email"
          />
          <label htmlFor="email">Your Email</label>
         </li>
         <li>
          <input
           type="text"
           name="subject"
           autoComplete="off"
           required
           id="subject"
          />
          <label htmlFor="subject">Your Subject</label>
         </li>
         <li>
          <textarea
           name="message"
           required
           minLength="6"
           id="message"
          ></textarea>
          <label htmlFor="message">Your Message</label>
         </li>
        </ul>
        <input type="submit" value="Send Messsage" className="main__button" />
        <div className="container icons-effect ">
         {SocailData.map((social, index) => {
          return (
           <div
            key={index}
            className={`icon ${social.class}`}
            style={{ animationDelay: `${index * 0.1 + 2.4}s` }}
           >
            <div className="tooltip">{social.name}</div>
            <a href={social.link} target="_blank" rel="noopener noreferrer">
             {social.icon}
            </a>
           </div>
          );
         })}
        </div>
       </form>
      </div>
     </div>
    </div>
   </main>
  </>
 );
}

export default Contact;
