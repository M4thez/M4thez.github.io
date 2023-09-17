// import { useState } from "react";
import "./App.css";
import "@dotlottie/player-component";
import WelcomeMessage from "./components/WelcomeMessage";
import AboutMe from "./components/AboutMe";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <WelcomeMessage />
      <hr />
      <AboutMe />
      <hr />
      <Experience />
      <hr />
      <Projects />
      <hr />
      <Contact />
      {/* Attribution */}
      {/* <a href="https://lordicon.com/">Animated icons by Lordicon.com</a> */}
    </>
  );
}

export default App;

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "dotlottie-player": any;
    }
  }
}
