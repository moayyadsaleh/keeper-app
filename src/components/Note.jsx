import React from "react";
import notes from "../notes";

//Extract Notes as props
///  {
//key: 1,
//title: "Delegation",
//content:
// "Q. How many programmers does it take to change a light bulb? A. None – It’s a hardware problem",
//},

function Note({ key, title, content }) {
  return (
    <div className="note">
      <h1>{title}</h1>
      <p>{content}</p>
    </div>
  );
}

export default Note;
