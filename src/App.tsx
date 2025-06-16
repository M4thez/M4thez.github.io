// import { useState } from "react";
import "./App.css";
import "@dotlottie/player-component";
import WelcomeMessage from "./components/WelcomeMessage";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <WelcomeMessage />
        <hr />
        <Projects />
        <hr />
        <Contact />
      </main>
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
