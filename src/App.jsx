import { useState } from "react";
import "./App.css";
import React from "react";
import EmojiBUtton from "./EmojiBUtton";
import Header from "./Header";
import Card from "./Card";
import Homepage from "./Homepage";

const pets = [
  { id: 1, name: "Fezzik", image: "https://picsum.photos/200/300" },
  { id: 2, name: "Lucy", image: "https://picsum.photos/200/300" },
];

function App() {
  return (
    <div>
      <Header heading="Pet Landia" />
      <Homepage />
    </div>
  );
}

export default App;
