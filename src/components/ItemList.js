import React, {useState} from 'react';
import Item from './Item';


export default function ItemList({isWindowShop, setIsWindowShop, itemList, cartItems, setCartItems,likedItems, setLikedItems,dislikedItems,setDislikedItems}) {

  const [index, setIndex] = useState(0);

  const itemCards = itemList.map(item => 
    <Item 
      key={item.id}
      item={item}
      cartItems={cartItems}
      setCartItems={setCartItems}
      likedItems={likedItems}
      setLikedItems={setLikedItems}
      dislikedItems={dislikedItems}
      setDislikedItems={setDislikedItems}
      isWindowShop={isWindowShop}
      index={index}
      setIndex={setIndex}
    />
  )
  
  return (
    <div>
        <h1>Item List</h1>
        {isWindowShop? itemCards[index] : itemCards }
        
    </div>
  )
}
