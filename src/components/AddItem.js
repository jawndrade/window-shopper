import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import Header from './Header';

export default function AddItem({handleAddItem, handleDarkMode, isDarkMode}) {
  const navigate = useNavigate();
  const initialData = {
    name: "",
    price: 0,
    description: "",
    color: "",
    image: "",
    category: ""
  }

  const [formData, setFormData] = useState(initialData)

  const handleInputs = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value})
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const newItemObj = {
      name: formData.name,
      price: formData.price,
      description: formData.description,
      color: formData.color,
      image: formData.image,
      category: formData.category,
    }
    handleNewItemPost(newItemObj)
  }

  const handleNewItemPost = (formData) => {
    fetch("http://localhost:3000/items", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    })
    .then(response => response.json())
    .then(handleAddItem)
    setFormData(initialData)
    navigate("/shop")
  }


  //TODO: POST New Item to DB.json || Redirect to SHOP onSubmit
  return (
    <>
        <Header
          handleDarkMode={handleDarkMode}
          isDarkMode={isDarkMode}
        />
        <h1>List Item</h1>
        <form onSubmit={handleSubmit}>
          <label for="category">Category:</label>
            <select 
              name="category" 
              id="category" 
              required
              value={formData.category}
              onChange={handleInputs}
            >
              <option value="shirt">Shirt</option>
              <option value="pants">Pants</option>
              <option value="shoes">Shoes</option>
              <option value="jacket">Jacket</option>
            </select>

            <input
              class="form-control"
              type="text" 
              name="name"
              placeholder="Item Name" 
              required
              value={formData.name}
              onChange={handleInputs}
            />
            <input 
              class="form-control"
              type="number"
              name="price"
              placeholder="Price" 
              step="0.01" 
              required
              value={formData.price}
              onChange={handleInputs}
            />
            <input 
              class="form-control"
              type="text" 
              name="description"
              placeholder="Description" 
              required
              value={formData.description}
              onChange={handleInputs}
            />
            <input 
              class="form-control"
              type="text" 
              name="color"
              placeholder="Color" 
              required
              value={formData.color}
              onChange={handleInputs}
            />
            <input 
              class="form-control"
              type="text" 
              name="image"
              placeholder="Image URL" 
              required
              value={formData.image}
              onChange={handleInputs}
            />
            <br/>
            <button class="btn btn-dark me-2" type="submit">List Item</button>
        </form>
    </>
  )
}
