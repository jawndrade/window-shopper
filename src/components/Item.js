import React, { useState } from 'react';
import { Button, ButtonGroup, Card } from 'react-bootstrap';

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
        {/* <Row xs={1} md={2} className="g-4">
          {Array.from({ length: 4 }).map((_, idx) => (
            <Col> */}
              <Card border="dark" style={{ width: '18rem' }}>
                <Card.Img variant="top" src={image} onClick={handleFlip}/>
                <Card.Body>
                  <Card.Title>{name}</Card.Title>
                  <Button variant="dark" onClick={() => onAddToCart(item)}>Add to Cart</Button>
                  <Card.Text>Price: ${price}</Card.Text>
                  <ButtonGroup className="mb-2">
                    <Button variant="dark" onClick={() => onAddToLikes(item)}>Like</Button>
                    <Button variant="dark" onClick={() => onAddToDislikes(item)}>Dislike</Button>
                  </ButtonGroup>
                </Card.Body>
              </Card>
            {/* </Col>
        ))} 
        </Row> */}
      </>

  const back = 
    <>
      {/* <Row xs={1} md={2} className="g-4">
          {Array.from({ length: 4 }).map((_, idx) => (
            <Col> */}
              <Card border="dark" style={{ width: '18rem' }}>
                <Card.Title onClick={handleFlip}>{name}</Card.Title>
                <Card.Subtitle>Price: ${price}</Card.Subtitle>
                <Card.Text>
                  {description}
                </Card.Text>
                <Card.Subtitle className="mb-2 text-muted">{category}, {color}</Card.Subtitle>
                <Button variant="dark" onClick={() => onAddToCart(item)}>Add to Cart</Button>
                <ButtonGroup className="mb-2">
                  <Button variant="dark" onClick={() => onAddToLikes(item)}>Like</Button>
                  <Button variant="dark" onClick={() => onAddToDislikes(item)}>Dislike</Button>
                </ButtonGroup>
          </Card>
        {/* </Col>
        ))} 
      </Row> */}
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
