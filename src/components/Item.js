import React, { useState } from 'react';

export default function Item({item}) {

  const {id, name, price, image, category, description, color} = item;
    //----------->   TODO: Handle Toggle Side for Description || Dynamically Update Price Img, etc.   <---------------

    const [isBack, setIsBack] = useState(false);

    const handleFlip = () => {
      setIsBack(prev => !prev)
    }
    const front = 
      <div>
          <h3>{name}</h3>
          <button>Add to Cart</button>
          <img src={image} onClick={handleFlip}/>
          <h4>Price: ${price}</h4>
          <button>Like</button>
          <button>Dislike</button>
      </div>

  const back = 
    <div onClick={handleFlip}>
        <h3>{name}</h3>
        <button>Add to Cart</button>
        <h4>{category}</h4>
        <h4>{description}</h4>
        <h4>{color}</h4>
        <h4>Price: ${price}</h4>
        <button>Like</button>
        <button>Dislike</button>
    </div>

  return (
    isBack ? back : front
  )
}
