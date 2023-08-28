import React from "react";
import notes from "../notes";

function Header() {
  return (
    <header>
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

function NoteComponent({ title, content }) {
  return (
    <div className="note">
      <h1>{title}</h1>
      <p>{content}</p>
    </div>
  );
}

function App() {
  return (
    <div>
      <Header />
      <Footer />
      {notes.map((note) => (
        <NoteComponent
          key={note.key}
          title={note.title}
          content={note.content}
        />
      ))}
    </div>
  );
}

export default App;
