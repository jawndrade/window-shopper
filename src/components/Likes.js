import React from 'react';
import Header from './Header';
import Item from './Item';

export default function Likes({handleDarkMode, isDarkMode, likedItems, setLikedItems,dislikedItems,setDislikedItems}) {
      const likesToShow= likedItems.map((item) => <Item 
          key={item.id}
          item={item}
          likedItems={likedItems}
          setLikedItems={setLikedItems}
      />)
      const dislikesToShow= dislikedItems.map((item) => <Item 
          key={item.id}
          item={item}
          dislikedItems={dislikedItems}
          setDislikedItems={setDislikedItems}
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
