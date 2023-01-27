import React, {useState} from 'react';
import Header from './Header';
import ItemList from './ItemList';
import { Link } from 'react-router-dom';
import Search from './Search';
import Spotify from "react-spotify-embed";
import { Form } from 'react-bootstrap';


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
      <div class="container" id="shop-top-div">
        <div id="mini-custom">
          {musicShowing ? <Spotify wide link="https://open.spotify.com/playlist/67WNhw7U3dnXxYX77z0Id0?si=6b360df385604c85"/> : null}
          <button name="spotify" class="btn btn-dark" id="custom-btn" onClick={musicToggleClick}>{musicShowing ? "Hide Store Music" : "Show Store Music"}</button>
        <br/>
        <br/>
        <h3>Window Shop</h3>
          <h4>Like or dislike to view more items!</h4>
        </div>
      </div>
          {/* <div class="container" id="shop-search-bar"> 
            <Search
              searchItem = {searchItem}
              onChangeSearch={setSearchItem}/>
          </div>
        </div>
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
            <br/>
            </div> */}
          <div id="window-shop-item">
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
          {/* <br/>
          <br/> */}
        </>
  )
}
