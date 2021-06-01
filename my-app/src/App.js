import React from "react";
import logo from "./owl.jpg";
import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={logo} className="App-logo img-fluid" alt="logo" />
          <strong>Dictionary</strong>
        </header>
        <Dictionary defaultKeyword="Wild" />
        <footer>
      <div className="row">
        <a className="footer"
          href="https://www.linkedin.com/in/c%C3%A1tia-filipa-alves/"
          target="_blank" rel="noreferrer"
          >Dictionary by Cátia Alves Sponsored by Capgemini</a
        >
        <a className="footer"
        href="https://github.com/KatAlves/DictionaryApp" target="_blank" rel="noreferrer"
          >Open-sourced on GitHub</a
        >
      </div>
    </footer>
      </div>
    </div>
  );
}
