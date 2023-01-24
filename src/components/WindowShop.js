import React, {useState} from 'react';
import Header from './Header';
import ItemList from './ItemList';
import { Link } from 'react-router-dom';
import Search from './Search';
import Spotify from "react-spotify-embed";

export default function WindowShop({isWindowShop, setIsWindowShop, itemList, setItemList, cartItems, setCartItems,likedItems,setLikedItems,dislikedItems,setDislikedItems, index, setIndex, currentUser}) {

    //------------->TODO: Render Single Item || STYLE for WindowShop Mode<------------------
    const [musicShowing, setMusicShowing] = useState(true)
    const [searchItem, setSearchItem] = useState("")
    const [selectedCategory, setSelectedCategory] = useState("All")
  
    setIsWindowShop(true);
    
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

    //fetch Item List so you dont have to load Shop module first when landing on windowshop module
      

  return (
        <>
            <Header/>
            <h1>Window Shop</h1>
            {musicShowing ? <Spotify wide link="https://open.spotify.com/playlist/37i9dQZF1DX0MLFaUdXnjA?si=fde25fe7c4f5466d"/> : null}
            <button name="spotify" onClick={musicToggleClick}>{musicShowing ? "Hide Store Music" : "Show Store Music"}</button>
            <div>
              <div>
                <Link to='/shop'><button>Toggle Window Shop</button></Link>
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
        </>
  )
}
