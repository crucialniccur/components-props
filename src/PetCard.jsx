import React from "react";

function PetCard(props) {
  //   console.log(props);

  console.log(props.favSnacks);
  const showSnacks = props.favSnacks.map((snack) => <ul>{snack}</ul>);

  return (
    <div className="card">
      <h2>{props.name}</h2>
      <img src={props.src} alt={props.name} />
      <h3>Favorite snacks innit</h3>
      {showSnacks}
      {/* <ul>{props.favSnacks}</ul> */}
    </div>
  );
}

export default PetCard;
