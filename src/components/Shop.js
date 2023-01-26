import React, { useEffect } from 'react';
import { useState } from 'react';
import Header from './Header';
import Search from './Search';
import { Link } from 'react-router-dom';
import ItemList from './ItemList';
import Spotify from "react-spotify-embed";
import { Button, Dropdown } from 'react-bootstrap';


export default function Shop({isWindowShop, setIsWindowShop, itemList, cartItems, setCartItems,likedItems,setLikedItems,dislikedItems,setDislikedItems, index, setIndex, currentUser, handleDarkMode, isDarkMode}) {
  const [musicShowing, setMusicShowing] = useState(true)
  const [searchItem, setSearchItem] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")

  setIsWindowShop(false);
  
  const musicToggleClick = () => {
    setMusicShowing(prev => !prev)
  }
  
  const itemToDisplay = itemList.filter((item) =>
  item.name.toLowerCase().includes(searchItem.toLowerCase())
)

const selectedCat = (e) => {
    setSelectedCategory(e.target.value)
}

const selectedCategoryToDisplay = itemToDisplay.filter(item =>{
    if(selectedCategory === "All")return true
    return item.category === selectedCategory
})

    //------------------->TODO: Handle Category Filter onChange || Styling  <------------------
  return (
    <>
        <Header
            handleDarkMode={handleDarkMode}
            isDarkMode={isDarkMode}
        />
        <h1>Shop</h1>
        {musicShowing ? <Spotify wide link="https://open.spotify.com/track/6wuR7kYZIlA7XbCidEO1Op?si=38693832ded24406"/> : null}
        <button name="spotify" class="btn btn-dark" id="custom-btn" onClick={musicToggleClick}>{musicShowing ? "Hide Store Music" : "Show Store Music"}</button>
        <br />
        <br />
        <div>
            <div>
                <Link to='/windowshop'><button class="btn btn-dark" id="custom-btn">Toggle Window Shop</button></Link>
            </div>
            <br />
            <div> 
                <Search
                searchItem = {searchItem}
                onChangeSearch={setSearchItem}/>
            </div>

            <div>
                <label for="category">Category:</label>
                <select name="category" id="category" onChange={selectedCat}>
                    <option value="All">All Categories</option>
                    <option value="Tops">Shirt</option>
                    <option value="bottoms">Pants</option>
                    <option value="shoes">Shoes</option>
                    <option value="Jackets">Jacket</option>
                </select>
            </div>

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
    </>
  )
}
