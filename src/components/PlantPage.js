import React, { useState, useEffect } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plants, setPlants] = useState([])
  const [search, setSearch] = useState('')
  //console.log(plants)

  useEffect(() => {
    fetch(`http://localhost:6001/plants`)
    .then(res => res.json())
    .then(plantsArray => setPlants(plantsArray))
    }, []
  )
  
  function handleAddPlant(newPlant) {
    //console.log(newPlant)
    fetch(`http://localhost:6001/plants`, {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(newPlant)
    })
    .then(res => res.json())
    .then(plant => setPlants([...plants, plant]))
  } 
  
  function handleSearch(newSearch){
    //console.log(newSearch)
    setSearch(newSearch)
  }

  const filteredArray = plants.filter(plant=> {
    return plant.name.toLowerCase().includes(search.toLowerCase())
  })




  return (
    <main>
      <NewPlantForm onAddPlant={ handleAddPlant } />
      <Search onSearch={ handleSearch }/>
      <PlantList plants={ filteredArray }/>
    </main>
  );
}

export default PlantPage;
