import React from "react";
import "./styles.css";
import Note from "./Note";
import notes from "../notes";

function Header() {
  return (
    <header>
      {" "}
      <h1>Keeper</h1>
    </header>
  );
}

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer>
      <p>&copy; {currentYear} Keeper App. All rights reserved.</p>
    </footer>
  );
}

function App() {
  return (
    <div>
      <Header />
      <Footer />
      {notes.map((note) => (
        <Note key={note.key} title={note.title} content={note.content} />
      ))}
    </div>
  );
}

export default App;
