import React from "react";

function EmojiButton(props) {
  return (
    <button>
      <span role="img">{props.emoji}</span>
      {props.label}
    </button>
  );
}

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

function Homepage() {
  return (
    <main>
      <div className="card">
        <h2>Welcome to Petland</h2>
        <em>Find dream pet</em>
      </div>
      <div className="card">
        <h2>WHat pets would you like to see?</h2>
        <div>
          <EmojiButton emoji="😸" label="Cats" />
          <EmojiButton emoji="🐕" label="Dogi" />
        </div>
      </div>
    </main>
  );
}

function CreateCard() {
  return (
    <div>
      <Header heading="Pet Landia" />
      <Homepage />
    </div>
  );
}

export default CreateCard;
