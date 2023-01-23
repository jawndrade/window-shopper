import React, { useState } from 'react';

export default function Item({item, cartItems, setCartItems}) {

  const {id, name, price, image, category, description, color} = item;
    //----------->   TODO: Handle Toggle Side for Description || Dynamically Update Price Img, etc.   <---------------

    const [isBack, setIsBack] = useState(false);

    const handleFlip = () => {
      setIsBack(prev => !prev)
    }
    const front = 
      <div>
          <h3>{name}</h3>
          <button onClick={() => onAddToCart(item)}>Add to Cart</button>
          <img src={image} onClick={handleFlip}/>
          <h4>Price: ${price}</h4>
          <button>Like</button>
          <button>Dislike</button>
      </div>

  const back = 
    <div onClick={() => onAddToCart(item)}>
        <h3>{name}</h3>
        <button onClick={handleFlip}>Add to Cart</button>
        <h4>{category}</h4>
        <h4>{description}</h4>
        <h4>{color}</h4>
        <h4>Price: ${price}</h4>
        <button>Like</button>
        <button>Dislike</button>
    </div>

  //add item to cart
  const onAddToCart = (item) => {
    const existingCartItems = cartItems.find((x) => x.id === item.id)
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

  //remove item from cart
  const onRemoveFromCart = (item) => {
    const existingCartItems = cartItems.find((x) => x.id === item.id)
    if (existingCartItems.quantity === 1) {
      const newCartItems = cartItems.filter((x) => x.id !== item.id)
  }
}  
  return (
    isBack ? back : front
  )
}
