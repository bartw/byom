import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUtensils } from "@fortawesome/free-solid-svg-icons";
import Authentication from "./Authentication";
import "./App.css";

export default () => (
  <div className="app">
    <header>
      <h1>byom</h1>
      <Authentication />
    </header>
    <main>
      <div className="hero">
        <h1>byom</h1>
        <h2>bring your own music</h2>
      </div>
    </main>
    <footer>
      <div className="copyright">&copy; 2019 byom</div>
      <a
        href="https://github.com/bartw/byom"
        target="_blank"
        rel="noopener noreferrer"
        title="fork me"
      >
        <FontAwesomeIcon icon={faUtensils} fixedWidth />
      </a>
    </footer>
  </div>
);
