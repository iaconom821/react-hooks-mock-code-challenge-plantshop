import React, { useState } from "react";

function PlantCard({ image, price, name, id }) {
  const [deleted, setDeleted] = useState(false)
  const [stock, setStock] = useState(true)
  const [editPrice, setEditPrice] = useState('')
  const [newPrice, setNewPrice] = useState(price)

  function handleClick (){
    setStock(!stock)
  }

  function handleDelete (){
    fetch(`http://localhost:6001/plants/${id}`, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json"
      },
    })
    .then(res => res.json())
    .then(()=> setDeleted(!deleted))
  }

  function handleChange (evt) {
    console.log(evt.target.value)
    setEditPrice(evt.target.value)
  }

  function handleSubmit(evt) {
    evt.preventDefault()

    fetch(`http://localhost:6001/plants/${id}`, {
      method: "PATCH",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify({
        price: parseFloat(editPrice)
      })
    })
    .then(res=>res.json())
    .then(data=> {
      setNewPrice(data.price)
    })
  }

  return (
    <>
    {deleted ? null : (<li className="card">
      <img src={ image } alt={ name } />
      <h4>{ name }</h4>
      <p>Price: { newPrice }</p>
      <form onSubmit={ handleSubmit }>
        <label htmlFor="editPrice">Edit Price: </label>
        <input onChange={ handleChange } type="number" step="0.01" name="editPrice" value={ editPrice } />
        <input type="submit" />
      </form>
      {stock ? (
        <button onClick={ handleClick } className="primary">In Stock</button>
      ) : (
        <button onClick={ handleClick }>Out of Stock</button>
      )}
      <button onClick={ handleDelete }>Delete Plant</button>
    </li>)}
    </>
  );
}

export default PlantCard;
