import React from 'react';
import Header from './Header';
import Item from './Item';

export default function Likes({likedItems, setLikedItems}) {
      const likesToShow= likedItems.map((item) => <Item 
          key={item.id}
          item={item}
          likedItems={likedItems}
          setLikedItems={setLikedItems}
      />)
  return (
    <>
        <Header/>
        <h2>Liked Items</h2>
        {likesToShow}
        <h2>Disliked Items</h2>
        
    </>
  )
}
