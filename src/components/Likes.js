import React from 'react';
import Header from './Header';
import Item from './Item';

export default function Likes({handleDarkMode, isDarkMode, likedItems, setLikedItems,dislikedItems,setDislikedItems, cartItems, setCartItems, currentUser}) {
      
    // map state of LikedItems and Display Item Components for each
    const likesToShow= likedItems.map((item) => <Item 
          key={item.id}
          item={item}
          cartItems={cartItems}
          setCartItems={setCartItems}
          likedItems={likedItems}
          setLikedItems={setLikedItems}
          dislikedItems={dislikedItems}
          setDislikedItems={setDislikedItems}
          currentUser={currentUser}
      />)
      // map state of Disliked Items and display Item components for Each
      const dislikesToShow= dislikedItems.map((item) => <Item 
          key={item.id}
          item={item}
          cartItems={cartItems}
          setCartItems={setCartItems}
          likedItems={likedItems}
          setLikedItems={setLikedItems}
          dislikedItems={dislikedItems}
          setDislikedItems={setDislikedItems}
          currentUser={currentUser}
      />)
  return (
    <>
        <Header
            handleDarkMode={handleDarkMode}
            isDarkMode={isDarkMode}
        />
        <h2>Liked Items</h2>
        {likesToShow}
        <h2>Disliked Items</h2>
        {dislikesToShow}
        
    </>
  )
}
