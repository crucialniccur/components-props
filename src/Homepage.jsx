import React from "react";
import Card from "./Card";
import EmojiButton from "./EmojiBUtton";

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

export default Homepage;
