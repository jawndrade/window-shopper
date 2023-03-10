import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import Header from './Header';
import { Form, Col, Row } from 'react-bootstrap';

export default function AddItem({handleAddItem, handleDarkMode, isDarkMode}) {

  const navigate = useNavigate();
  const initialData = {
    name: "",
    price: "",
    description: "",
    color: "",
    image: "",
    category: ""
  }

  const [formData, setFormData] = useState(initialData)
  // handle update State based on inputs
  const handleInputs = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value})
  }
  // on Submite create new item Obj and post to database
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
  // Helper function for posting new item to database/ after posting navigate to shop and update state
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

  return (
    <>
      <Header
        handleDarkMode={handleDarkMode}
        isDarkMode={isDarkMode}
      />
      <div class="container" id="add-item-form-custom">
      <h3>List your items using the form below</h3>
      <br/>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formBasicSelect" style={{width: '100px'}}>
            <Form.Label>Category</Form.Label>
            <Form.Select
              as="select"
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
            </Form.Select>
          </Form.Group>
          <br/>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridItem">
              <Form.Label>Item Name</Form.Label>
              <Form.Control
                type="text" 
                name="name"
                placeholder="Item Name" 
                required
                value={formData.name}
                onChange={handleInputs}
              />
            </Form.Group>
            <Form.Group as={Col} controlId="formGridPrice">
              <Form.Label>Price</Form.Label>
              <Form.Control 
                type="number"
                name="price"
                placeholder="Price" 
                step="0.01" 
                required
                value={formData.price}
                onChange={handleInputs}
              />
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} controlID="formGridColor">
              <Form.Label>Color</Form.Label>
              <Form.Control
                type="text" 
                name="color"
                placeholder="Color" 
                required
                value={formData.color}
                onChange={handleInputs}
              />
            </Form.Group>
            <Form.Group as={Col} controlID="formGridImageURL">
              <Form.Label>Image URL</Form.Label>
              <Form.Control
                type="text" 
                name="image"
                placeholder="Image URL" 
                required
                value={formData.image}
                onChange={handleInputs}
              />
            </Form.Group>
          </Row>
          <Form.Group className="mb-3" controlID="formGridDescription">
              <Form.Label>Description</Form.Label>
              <Form.Control  
                type="text" 
                name="description"
                placeholder="Description" 
                required
                value={formData.description}
                onChange={handleInputs}
              />
            </Form.Group>
            <br/>
            <button class="btn btn-dark me-2" id="custom-btn" type="submit">List Item</button>
        </Form>
      </div>
    </>
  )
}
