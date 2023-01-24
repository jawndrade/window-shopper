import React from 'react';
import { useState } from 'react';
import Header from './Header';
import Search from './Search';
import { Link } from 'react-router-dom';
import ItemList from './ItemList';
import Spotify from "react-spotify-embed"


export default function Shop({itemList, cartItems, setCartItems,likedItems,setLikedItems,dislikedItems,setDislikedItems}) {
  const [musicShowing, setMusicShowing] = useState(true)
  const [searchItem, setSearchItem] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")

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
        <button name="spotify" onClick={musicToggleClick}>{musicShowing ? "Hide Store Music" : "Show Store Music"}</button>
        <div>
            <div>
                <Link to='/windowshop'><button>Toggle Window Shop</button></Link>
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
                <ItemList itemList={selectedCategoryToDisplay} 
                    cartItems={cartItems}
                    setCartItems={setCartItems}
                    likedItems={likedItems} 
                    setLikedItems={setLikedItems}
                    dislikedItems={dislikedItems}
                    setDislikedItems={setDislikedItems}
                  />
            </div>
        </div>
    </>
  )
}
