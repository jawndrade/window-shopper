import React, { useState } from 'react';

export default function Item({item, cartItems, setCartItems, likedItems, setLikedItems,dislikedItems,setDislikedItems, isWindowShop, index, setIndex}) {

  const {id, name, price, image, category, description, color} = item;

    const [isBack, setIsBack] = useState(false);
    const [displayToolTip, setDisplayToolTip] = useState(false);
    
    const handleFlip = () => {
      setIsBack(prev => !prev)
    }
    const handleHover = () => {
      setDisplayToolTip(prev => !prev);
    }
    const frontHover = <div>Click To View Description</div>
    const backHover = <div>Click To View Item</div>

    const front = 
      <div id={id} onMouseOver={handleHover} onMouseOut={handleHover}>
          <h3>{name}</h3>
          <button onClick={() => onAddToCart(item)}>Add to Cart</button>
          <img src={image} onClick={handleFlip} alt={description} />
          {displayToolTip? frontHover : null }
          <h4>Price: ${price}</h4>
          <button onClick={() => onAddToLikes(item)}>Like</button>
          <button onClick={() => onAddToDislikes(item)}>Dislike</button>
          
      </div>

  const back = 
    <div id={id} onClick={handleFlip} onMouseOver={handleHover} onMouseOut={handleHover}>
        <h3>{name}</h3>
        <button onClick={() => onAddToCart(item)} >Add to Cart</button>
        <h4>{category}</h4>
        <h4>{description}</h4>
        <h4>{color}</h4>
        <h4>Price: ${price}</h4>
        {displayToolTip? backHover: null}
        <button onClick={() => onAddToLikes(item)}>Like</button>
        <button onClick={() => onAddToDislikes(item)}>Dislike</button>
    </div>

  //add item to cart
  const onAddToCart = (item) => {
    const existingCartItems = cartItems.find((x) => x.id === item.id)
    if (isWindowShop === true) {
      setIndex(prev => prev + 1);
      if (existingCartItems) {
        const newCartItems = cartItems.map((x) => 
          x.id === item.id ? {...existingCartItems, item} : x
        )
        setCartItems(newCartItems)
      } else {
        const newCartItems = [...cartItems, item]
        setCartItems(newCartItems)
      }
    }
    else {
      if (existingCartItems) {
        const newCartItems = cartItems.map((x) => 
          x.id === item.id ? {...existingCartItems, item} : x
        )
        setCartItems(newCartItems)
      } else {
        const newCartItems = [...cartItems, item]
        setCartItems(newCartItems)
      }
    }
  }

  //remove item from cart
  const onRemoveFromCart = (item) => {
    const existingCartItems = cartItems.find((x) => x.id === item.id)
    if (existingCartItems.quantity === 1) {
      const newCartItems = cartItems.filter((x) => x.id !== item.id)
  }
} 

  //add to likes

  const onAddToLikes = (item) => {
    const yourLikedItems = likedItems.find((liked) => liked.id === item.id)
    if (isWindowShop === true) {
      setIndex(prev => prev + 1);
      if (yourLikedItems) {
        const newLikedItems = likedItems.map((liked) => 
        liked.id === item.id ? {...yourLikedItems, item} : liked
        ) 
        setLikedItems(newLikedItems)
      } else {
        const newLikedItems = [...likedItems, item]
        setLikedItems(newLikedItems)
      }
    }
    else {
      if (yourLikedItems) {
        const newLikedItems = likedItems.map((liked) => 
        liked.id === item.id ? {...yourLikedItems, item} : liked
        ) 
        setLikedItems(newLikedItems)
      } else {
        const newLikedItems = [...likedItems, item]
        setLikedItems(newLikedItems)
      }
    }
  }
 //add to dislikes

 
 const onAddToDislikes = (item) => {
  const yourDislikedItems = dislikedItems.find((disliked) => disliked.id === item.id)
  if (isWindowShop === true) {
    setIndex(prev => prev + 1);
    if (yourDislikedItems) {
      const newDislikedItems = dislikedItems.map((disliked) => 
      disliked.id === item.id ? {...yourDislikedItems, item} : disliked
      ) 
      setDislikedItems(newDislikedItems)
    } else {
      const newDislikedItems = [...dislikedItems, item]
      setDislikedItems(newDislikedItems)
    }
  }
  else {
    if (yourDislikedItems) {
      const newDislikedItems = dislikedItems.map((disliked) => 
      disliked.id === item.id ? {...yourDislikedItems, item} : disliked
      ) 
      setDislikedItems(newDislikedItems)
    } else {
      const newDislikedItems = [...dislikedItems, item]
      setDislikedItems(newDislikedItems)
    }
  }
  
}
  return (
    isBack ? back : front
  )
}
