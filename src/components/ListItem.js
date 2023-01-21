import React from 'react';
import Header from './Header';

export default function ListItem() {
  return (
    <>
        <Header/>
        <h1>List Item</h1>
        <form>
            <input type="text" placeholder="Item Name" required/>
            <input type="text" placeholder="Price" required/>
            <input type="text" placeholder="Description" required/>
            <input type="text" placeholder="Color" required/>

            <label for="category">Category:</label>
            <select name="category" id="category" required>
                <option value="shirt">Shirt</option>
                <option value="pants">Pants</option>
                <option value="shoes">Shoes</option>
                <option value="hat">Hat</option>
                <option value="jacket">Jacket</option>
            </select>

            <button type="submit">List Item</button>
        </form>
    </>
  )
}
