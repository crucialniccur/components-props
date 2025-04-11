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

function Card(props) {
  console.log(props);
  return (
    <div className="card">
      <h2>{props.title}</h2>
      {props.children}
    </div>
  );
}

function Homepage() {
  return (
    <main>
      <Card title="Welcome to Petland">
        <em>Find dream pet</em>
      </Card>
      <Card title="What pets would you like to see?">
        <div>
          <EmojiButton emoji="😸" label="Cats" />
          <EmojiButton emoji="🐕" label="Dogi" />
        </div>
      </Card>
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
