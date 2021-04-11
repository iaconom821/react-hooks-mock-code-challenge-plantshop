import React, { useState } from "react";

function NewPlantForm({ onAddPlant }) {
  const [plantData, setPlantData] = useState({
    name: '',
    image: '', 
    price:''
  })
  //console.log(plantData)

  function handleChange(evt) {
    evt.preventDefault()

    if(evt.target.name === "name"){
      setPlantData({
        name: evt.target.value,
        image: plantData.image,
        price: plantData.price
      })
    }
    if(evt.target.name === "image"){
      setPlantData({
        name: plantData.name,
        image: evt.target.value,
        price: plantData.price
      })
    }
    if(evt.target.name === "price"){
      setPlantData({
        name: plantData.name,
        image: plantData.image,
        price: evt.target.value
      })
    }
  }

  function handleSubmit (evt) {
    evt.preventDefault()
    onAddPlant(plantData)
   
    return 
  }

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={ handleSubmit }>
        <input onChange={ handleChange } type="text" name="name" placeholder="Plant name" value={plantData.name}/>
        <input onChange={ handleChange } type="text" name="image" placeholder="Image URL" value={plantData.image}/>
        <input onChange={ handleChange } type="number" name="price" step="0.01" placeholder="Price" value={plantData.price}/>
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
