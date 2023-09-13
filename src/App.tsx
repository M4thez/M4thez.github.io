// import { useState } from "react";
import "./App.css";
import WelcomeMessage from "./components/WelcomeMessage";
import "@dotlottie/player-component";

function App() {
  return (
    <>
      <WelcomeMessage />
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
