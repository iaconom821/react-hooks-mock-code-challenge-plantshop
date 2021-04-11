import React from "react";
import PlantCard from "./PlantCard";

function PlantList({ plants }) {
  //console.log(plants)
  const plantsList = plants.map((plant) => {
    return <PlantCard key={ plant.id } id={ plant.id } image={ plant.image } price={ plant.price } name={ plant.name }/>
  })
  return (
    <ul className="cards">{ plantsList }</ul>
  );
}

export default PlantList;
