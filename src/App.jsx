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
  { id: 3, name: "Inda", image: "https://picsum.photos/200/?grayscale" },
  { id: 4, name: "Moha", image: "https://picsum.photos/200/?blur" },
  { id: 5, name: "Liza", image: "https://picsum.photos/200/?" },
];

function App() {
  const petCards = pets.map((petObj) => {
    return <PetCard key={petObj.id} name={petObj.name} src={petObj.image} />;
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
