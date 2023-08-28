import React from "react";
import ReactDOM from "react-dom/client"; // Import ReactDOM from 'react-dom'
import "./components/styles.css";
import App from "./components/App";
//Challenge. Render all the notes inside notes.js as a seperate Note
//component.

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div>
    <App></App>
  </div>
);
