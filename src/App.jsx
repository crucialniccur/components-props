import { useState } from "react";
import "./App.css";
import React from "react";
import EmojiBUtton from "./EmojiBUtton";
import Header from "./Header";
import Card from "./Card";
import Homepage from "./Homepage";
import PetCard from "./PetCard";

const pets = [
  { id: 1, name: "Fezzik", image: "https://picsum.photos/200" },
  { id: 2, name: "Lucy", image: "https://picsum.photos/200/?blur" },
];

function App() {
  const petCards = pets.map((petObj) => {
    return <PetCard name={petObj.name} src={petObj.image} />;
  });

  console.log(petCards);

  return (
    <div>
      <Header heading="Pet Landia" />
      {/* <Homepage /> */}
      {petCards}
    </div>
  );
}

export default App;
