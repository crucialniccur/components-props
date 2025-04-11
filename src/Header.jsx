import React from "react";
import EmojiButton from "./EmojiBUtton";

function Header(props) {
  return (
    <header>
      <h1>{props.heading}</h1>
      <nav>
        <EmojiButton emoji="👤" label="Loginn" />
      </nav>
    </header>
  );
}

export default Header;
