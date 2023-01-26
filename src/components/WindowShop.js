import React, {useState} from 'react';
import Header from './Header';
import ItemList from './ItemList';
import { Link } from 'react-router-dom';
import Search from './Search';
import Spotify from "react-spotify-embed";

export default function WindowShop({handleDarkMode, isDarkMode, isWindowShop, setIsWindowShop, itemList, setItemList, cartItems, setCartItems,likedItems,setLikedItems,dislikedItems,setDislikedItems, index, setIndex, currentUser}) {

    //------------->TODO: Render Single Item || STYLE for WindowShop Mode<------------------
    const [musicShowing, setMusicShowing] = useState(true)
    const [searchItem, setSearchItem] = useState("")
    const [selectedCategory, setSelectedCategory] = useState("All")

    // update window shop state to true when landing on /windowShop
    setIsWindowShop(true);
    
    // onClick toggle state of MusicShowing
    const musicToggleClick = () => {
      setMusicShowing(prev => !prev)
    }
    
    // filtered items based on search query
    const itemToDisplay = itemList.filter((item) =>
    item.name.toLowerCase().includes(searchItem.toLowerCase())
  )
  
  // update state of selected category input
  const selectedCat = (e) => {
      setSelectedCategory(e.target.value)
  }
  
  // display items based on filtered search and category selection
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
            <h1>Window Shop</h1>
            {musicShowing ? <Spotify wide link="https://open.spotify.com/playlist/67WNhw7U3dnXxYX77z0Id0?si=6b360df385604c85"/> : null}
            <button name="spotify" class="btn btn-dark" id="custom-btn" onClick={musicToggleClick}>{musicShowing ? "Hide Store Music" : "Show Store Music"}</button>
            <div>
              <div>
                <Link to='/shop'><button class="btn btn-dark" id="custom-btn">Toggle Window Shop</button></Link>
              </div>
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
          <br/>
          <br/>
        </>
  )
}
