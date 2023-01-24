import React from 'react';
import { useState } from 'react';
import Header from './Header';
import Search from './Search';
import { Link } from 'react-router-dom';
import ItemList from './ItemList';

export default function Shop({itemList, cartItems, setCartItems,likedItems,setLikedItems}) {

  const [searchItem, setSearchItem] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")
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
                  />
            </div>
        </div>
    </>
  )
}
