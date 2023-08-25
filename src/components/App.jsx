import React from 'react';
import './styles.css'; 

function Header() {
  return (
    <header> <h1>Keeper</h1></header>
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

function Note() {
  return (
    <div className='note'>
      <h1>This is the note title</h1>
      <p>This is the note content</p>
    </div>
  );
}

function App() {
  return (
    <div>
      <Header />
      <Footer />
      <Note />
    </div>
  );
}

export default App;