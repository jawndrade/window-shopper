import React, { useEffect } from 'react';
import { useState } from 'react';
import Header from './Header';
import Search from './Search';
import { Link } from 'react-router-dom';
import ItemList from './ItemList';
import Spotify from "react-spotify-embed";
import { Button } from 'react-bootstrap';


export default function Shop({isWindowShop, setIsWindowShop, itemList, cartItems, setCartItems,likedItems,setLikedItems,dislikedItems,setDislikedItems, index, setIndex, currentUser}) {
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
        <Header/>
        <h1>Shop</h1>
        {musicShowing ? <Spotify wide link="https://open.spotify.com/playlist/37i9dQZF1DX0MLFaUdXnjA?si=fde25fe7c4f5466d"/> : null}
        <Button name="spotify" class="btn btn-outline-dark" onClick={musicToggleClick}>{musicShowing ? "Hide Store Music" : "Show Store Music"}</Button>
        <div>
            <div>
                <Link to='/windowshop'><Button class="btn btn-outline-dark">Toggle Window Shop</Button></Link>
            </div>

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
