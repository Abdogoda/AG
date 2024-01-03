import React, { useEffect, useState } from "react";
import Header from "../Components/Header";
import AnimatedLetters from "../Components/AnimatedLetters.jsx";
import LoadingLayout from "../Components/LoadingLayout.jsx";
import { FaGoogle } from "react-icons/fa6";
function Login() {
 document.title = "AG | LOGIN";
 const [email, setEmail] = useState("");
 const [password, setPassword] = useState("");
 // letter animation
 const [letterClass, setLetterClass] = useState("text-animate");
 useEffect(() => {
  setTimeout(() => {
   setLetterClass("text-animate-hover");
  }, 3000);
 }, []);
 const loginFunc = (e) => {
  e.preventDefault();
 };
 const loginGoogleFunc = () => {};
 return (
  <>
   <LoadingLayout />
   <Header />
   <section className="section contact__section login__section">
    <div className="container contact__container">
     <div className="login__container">
      <h1 className="section__title">
       <AnimatedLetters
        letterClass={letterClass}
        strArray={["S", "i", "g", "n", "", "I", "n"]}
        index={22}
       />
      </h1>
      <div className="contact__content">
       <div className="contact-form">
        <form action="" onSubmit={loginFunc}>
         <ul>
          <li>
           <input
            type="email"
            name="email"
            autoComplete="off"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            id="email"
           />
           <label htmlFor="email">Email Address</label>
          </li>
          <li>
           <input
            type="password"
            name="password"
            autoComplete="off"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            id="password"
           />
           <label htmlFor="password">Password</label>
          </li>
         </ul>
         <div className="d__flex">
          <input
           type="submit"
           value="Sign In"
           className="main__button"
           style={{ marginRight: "10px" }}
          />
          <button
           className="main__button"
           onClick={loginGoogleFunc}
           style={{ display: "flex", alignItems: "center", gap: "10px" }}
          >
           Sign In With Google <FaGoogle />
          </button>
         </div>
        </form>
       </div>
      </div>
     </div>
    </div>
   </section>
  </>
 );
}

export default Login;
