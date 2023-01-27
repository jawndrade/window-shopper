import React, { useEffect } from 'react';
import { useState } from 'react';
import Header from './Header';
import Search from './Search';
import { Link } from 'react-router-dom';
import ItemList from './ItemList';
import Spotify from "react-spotify-embed";
import { Button, Dropdown, Form } from 'react-bootstrap';


export default function Shop({isWindowShop, setIsWindowShop, itemList, cartItems, setCartItems,likedItems,setLikedItems,dislikedItems,setDislikedItems, index, setIndex, currentUser, handleDarkMode, isDarkMode}) {
  const [musicShowing, setMusicShowing] = useState(true)
  const [searchItem, setSearchItem] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")

// Set State of window shop to false when landing on this page
  setIsWindowShop(false);
  
  // Toggle hide/show music
  const musicToggleClick = () => {
    setMusicShowing(prev => !prev)
  }
  // Filter Items w/ Search input
  const itemToDisplay = itemList.filter((item) =>
  item.name.toLowerCase().includes(searchItem.toLowerCase())
)
// Handle Category Selection Change
const selectedCat = (e) => {
    setSelectedCategory(e.target.value)
}
// Filter Items w/ Category Selected by State
const selectedCategoryToDisplay = itemToDisplay.filter(item =>{
    if(selectedCategory === "All")return true
    return item.category === selectedCategory
})

  return (
    <>
      <Header
          handleDarkMode={handleDarkMode}
          isDarkMode={isDarkMode}
      />
        <div class="container" id="shop-top-div">
          <div id="mini-custom">
            {musicShowing ? <Spotify wide link="https://open.spotify.com/playlist/67WNhw7U3dnXxYX77z0Id0?si=6b360df385604c85"/> : null}
            <button name="spotify" class="btn btn-dark" id="custom-btn" onClick={musicToggleClick}>{musicShowing ? "Hide Store Music" : "Show Store Music"}</button>
          </div>
        <br/>
        <br/>
        <h3>Shop</h3>
        <div>
            <div> 
                <Search
                searchItem = {searchItem}
                onChangeSearch={setSearchItem}/>
            </div>
            <br/>
            <div>
            <Form>
              <Form.Group controlId="formBasicSelect" style={{width: '160px'}}>
                <Form.Label>Category</Form.Label>
                  <Form.Select
                    as="select"
                    name="category"
                    id="category"
                    onChange={selectedCat}>
                    <option value="All">All Categories</option>
                    <option value="Tops">Shirt</option>
                    <option value="bottoms">Pants</option>
                    <option value="shoes">Shoes</option>
                    <option value="Jackets">Jacket</option>
                  </Form.Select>
                </Form.Group>
              </Form>
            </div>
            <br/>
            <div>
                <ItemList 
                    isWindowShop={isWindowShop}
                    setIsWindowShop={setIsWindowShop}
                    itemList={selectedCategoryToDisplay} 
                    cartItems={cartItems}
                    setCartItems={setCartItems}
                    likedItems={likedItems} 
                    setLikedItems={setLikedItems}
                    dislikedItems={dislikedItems}
                    setDislikedItems={setDislikedItems}
                    index={index}
                    setIndex={setIndex}
                    currentUser={currentUser}
                  />
            </div>
        </div>
        </div>
    </>
  )
}
