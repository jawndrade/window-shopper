import React from 'react';
import Item from './Item';

export default function ItemList({itemList, cartItems, setCartItems,likedItems, setLikedItems}) {

  const itemCards = itemList.map(item => 
    <Item 
      key={item.id}
      item={item}
      cartItems={cartItems}
      setCartItems={setCartItems}
      likedItems={likedItems}
      setLikedItems={setLikedItems}
    />
  )

    //TODO: Render All Items in STORE.JSON
  return (
    <div>
        <h1>Item List</h1>
        {itemCards}
    </div>
  )
}
