import React, { useState } from 'react';
import { Button, ButtonToolbar, Card } from 'react-bootstrap';

export default function Item({item, cartItems, setCartItems, likedItems, setLikedItems,dislikedItems,setDislikedItems}) {

  const {id, name, price, image, category, description, color} = item;
    //----------->   TODO: Handle Toggle Side for Description || Dynamically Update Price Img, etc.   <---------------

    const [isBack, setIsBack] = useState(false);

    const handleFlip = () => {
      setIsBack(prev => !prev)
    }
    const handleLikes = () => {
      console.log("ADDTOLIKE")
    }

    const front = 
      <>
        <Card border="dark" style={{ width: '19rem' }}>
          <Card.Img variant="top" src={image} onClick={handleFlip}/>
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Button variant="dark" onClick={() => onAddToCart(item)}>Add to Cart</Button>
            <Card.Text>Price: ${price}</Card.Text>
            <div class="container">
              <div class="row">
                <div class="col-3">
                  <Button variant="dark" onClick={() => onAddToLikes(item)}>Like</Button></div>
                <div class="col-3">
                  <Button variant="dark" onClick={() => onAddToDislikes(item)}>Dislike</Button>
                </div>
              </div>
            </div>
          </Card.Body>
        </Card>
      </>

  const back = 
    <>
      <Card className=".card-deck" border="dark" style={{ width: '19rem' }}>
        <Card.Title onClick={handleFlip}>{name}</Card.Title>
        <Card.Subtitle>Price: ${price}</Card.Subtitle>
        <Card.Text>
          {description}
        </Card.Text>
        <Card.Subtitle className="mb-2 text-muted">{category}, {color}</Card.Subtitle>
        <Button variant="dark" className="mb-2" onClick={() => onAddToCart(item)}>Add to Cart</Button>
        <ButtonToolbar className="mb-2">
          <Button variant="dark" className="mb-2" onClick={() => onAddToLikes(item)}>Like</Button>
          <Button variant="dark" className="mb-2" onClick={() => onAddToDislikes(item)}>Dislike</Button>
        </ButtonToolbar>
      </Card>
    </>

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

  //add to likes

  const onAddToLikes = (item) => {
    const yourLikedItems = likedItems.find((liked) => liked.id === item.id)
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
 //add to dislikes

 
 const onAddToDislikes = (item) => {
  const yourDislikedItems = dislikedItems.find((disliked) => disliked.id === item.id)
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
  return (
    <>
    {isBack ? back : front}
    </>
  )
}
