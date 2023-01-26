import React, { useState, useEffect } from 'react';
import { BsFillCartPlusFill, BsFillCartDashFill, BsFillHandThumbsDownFill, BsFillHeartFill, BsHeart, BsHandThumbsDown, BsCartPlus } from "react-icons/bs";
import { Button, Card } from 'react-bootstrap'

export default function Item({item, cartItems, setCartItems, likedItems, setLikedItems,dislikedItems,setDislikedItems, isWindowShop, index, setIndex, currentUser}) {
  //Destructure incoming Item Data
  const {id, name, price, image, category, description, color} = item;
    
    const [isBack, setIsBack] = useState(false);
    // const [displayToolTip, setDisplayToolTip] = useState(false);
    const [isInCart, setInCart] = useState(false);
    const [isLiked, setIsLiked] = useState(false);
    const [isDisliked, setIsDisliked] = useState(false);

      // Fetch Current User and update State of Likes/ Dislikes/ Cart
      useEffect(() => {
        fetch("http://localhost:3000/users")
        .then(res => res.json())
        .then((obj)=> {
         setLikedItems(obj[currentUser.id-1].likes)
         setDislikedItems(obj[currentUser.id-1].dislikes)
         setInCart(obj[currentUser.id-1].inCart)
        })
      }, [])
    
    // User patch Helper Function, Takes in key and value and Patches
    const handleUserPatch = (key, value) => {
      fetch(`http://localhost:3000/users/${currentUser.id}`,{
        method: "PATCH",
        headers: {
          accept: "application/json",
          "content-type": "application/json"
        },
        body: JSON.stringify({[key]: value})
      }).then(res => res.json())
      .catch(err => console.log(err));
    }

    //Handle Flip Of Item Card, Flips between Front and Back
    const handleFlip = () => {
      setIsBack(prev => !prev)
    }

    // If Mouse Over Display tooltip if Mouse Out Dont Display Tooltip
    // const handleHover = () => {
    //   setDisplayToolTip(prev => !prev);
    // }

    // Different Tool Tip Text divs
    // const frontHover = <div>Click To View Description</div>
    // const backHover = <div>Click To View Item</div>

    // Different Buttons to display for In Cart, Not In cart, or add to cart
    const notInCart = <Button class="btn btn-dark" id="custom-btn" onClick={() => onAddToCart(item)}><BsCartPlus /></Button>
    const addMoreToCart = <Button class="btn btn-dark" id="custom-btn" onClick={() => onAddToCart(item)}><BsFillCartPlusFill /></Button>
    const inCart = <Button class="btn btn-dark" id="custom-btn" onClick={() => onRemoveFromCart(item)}><BsFillCartDashFill/></Button>

    // Icons
    const filledHeart = <BsFillHeartFill/>
    const emptyHeart = <BsHeart/>
    const filledThumb = <BsFillHandThumbsDownFill/>
    const emptyThumb = <BsHandThumbsDown/>

    // Front Of Item Card
    const front = 
    <>
      <Card className=".card-deck" border="dark" style={{ width: '19rem' }}>
        <div id={id}>
           {/* onMouseOver={handleHover} onMouseOut={handleHover}> */}
          <Card.Img src={image} onClick={handleFlip} alt={description} />
          {/* {displayToolTip? frontHover : null } */}
          <Card.Body>
            <Card.Title>{name}</Card.Title>
          <Card.Text>Price: ${price}</Card.Text>
          <Button class="btn btn-dark me-2" id="custom-btn" onClick={() => onAddToLikes(item)}>{isLiked? filledHeart: emptyHeart}</Button>
          <Button class="btn btn-dark me-2" id="custom-btn" onClick={() => onAddToDislikes(item)}>{isDisliked ? filledThumb : emptyThumb}</Button>
          {isInCart ? addMoreToCart : notInCart}
          {isInCart ? inCart : null}
        </Card.Body>
        </div>
      </Card>
    </>

  // Back Of Item Card
  const back = 
    <>
      <Card className=".card-deck" border="dark" style={{ width: '19rem' }}>
        <div id={id} onClick={handleFlip}>
          {/* onMouseOver={handleHover} onMouseOut={handleHover}> */}
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Subtitle>Price: ${price}</Card.Subtitle>
            <Card.Text>{description}</Card.Text>
            <Card.Subtitle className="mb-2 text-muted">{category}, {color}</Card.Subtitle>
        {/* {displayToolTip? backHover: null} */}
        <Button class="btn btn-dark me-2" id="custom-btn" onClick={() => onAddToLikes(item)}>{isLiked? filledHeart: emptyHeart}</Button>
        <Button class="btn btn-dark me-2" id="custom-btn" onClick={() => onAddToDislikes(item)}>{isDisliked? filledThumb: emptyThumb}</Button>
        {isInCart ? addMoreToCart : notInCart}
              {isInCart ? inCart : null}
        </Card.Body>
      </div>
      </Card>
    </>

  //add item to cart
  const onAddToCart = (item) => {
    let newCartItems = [...cartItems, item];
    // If on Window Shop Increas Index and update Cart State
    if (isWindowShop === true) {
      setIndex(prev => prev + 1);
      setInCart(true);
      setCartItems(newCartItems);
    }
    // Update State of Cart
    else {
      setInCart(true);
        setCartItems(newCartItems);
        setInCart(true);
    }
    // Patch Cart Items to User in DB
    handleUserPatch("inCart",newCartItems);
  }
  

  //remove item from cart
  const onRemoveFromCart = (item) => {
      const newCartItems = cartItems.filter((x) => x.id !== item.id)
      setCartItems(newCartItems)
      handleUserPatch("inCart", newCartItems);
      //if cart item has less than one update state of In Cart
      if (cartItems.length <= 1) return setInCart(false);
} 

  //add to likes
  const onAddToLikes = (item) => {
    const dislikedCheck = dislikedItems.find((item) => item.name === name)
    const yourLikedItems = likedItems.find((liked) => liked.id === item.id)
    // If In Window Shop Increase Index by 1
    if (isWindowShop === true) {
      setIndex(prev => prev + 1);
      setIsLiked(true);
      // If In Dislikes remove from dislikes
      if (dislikedCheck !== undefined){
      const newDislikes = dislikedItems.filter((item) => item.name !== name)
      setDislikedItems(newDislikes)}
      //if already in likes do nothing, if not then update likes state
      if (yourLikedItems) {
        const newLikedItems = likedItems.map((liked) => 
        liked.id === item.id ? {...yourLikedItems, item} : liked
        ) 
        setLikedItems(newLikedItems)
        // Persist Likes on current user Database
        handleUserPatch("likes", [...newLikedItems]);
      } else {
        const newLikedItems = [...likedItems, item]
        setLikedItems(newLikedItems)
        handleUserPatch("likes", [...newLikedItems]);
      }
    }
    // If In Regular Shop 
    else {
      // Update State of Current Item to Like
      setIsLiked(true);
      // Check if In Dislikes, if so remove from dislikes and persist to db
      const dislikedCheck = dislikedItems.find((item) => item.name === name)
      if (dislikedCheck !== undefined){
        const newDislikes = dislikedItems.filter((item) => item.name !== name)
        setDislikedItems(newDislikes)
        handleUserPatch("dislikes", [...newDislikes])
      }
      // update state of dislikes if its in dislikes
      if (isDisliked) {
        setIsDisliked(false);
      }
      // if already in likes, do nothing, if not update state and persist to db
      if (yourLikedItems) {
        const newLikedItems = likedItems.map((liked) => 
        liked.id === item.id ? {...yourLikedItems, item} : liked
        ) 
        setLikedItems(newLikedItems)
        handleUserPatch("likes", [...newLikedItems])
      } else {
        const newLikedItems = [...likedItems, item]
        setLikedItems(newLikedItems)
        handleUserPatch("likes", [...newLikedItems])
      }
    }
  }

 //add to dislikes
 const onAddToDislikes = (item) => {
  // Check if item is in likes
  const likedCheck = likedItems.find((item) => item.name === name)

  // if in likes then remove from likes and update state/ persist to user in Db
  if (likedCheck !== undefined){
    const newLikes = likedItems.filter((item) => item.name !== name)
    setLikedItems(newLikes)
    handleUserPatch("likes", [...newLikes])
  }

  // Check to see if disliked item is already in dislikes
  const yourDislikedItems = dislikedItems.find((disliked) => disliked.id === item.id)

  // If In windowshop increase index by 1 and update state/ persist to currentUser in DB
  if (isWindowShop === true) {
    setIndex(prev => prev + 1);
    setIsDisliked(true)
    setIsLiked(false)
    
    if (yourDislikedItems) {
      const newDislikedItems = dislikedItems.map((disliked) => 
      disliked.id === item.id ? {...yourDislikedItems, item} : disliked
      ) 
      setDislikedItems(newDislikedItems)
      handleUserPatch("dislikes", [...newDislikedItems]);
    } else {
      const newDislikedItems = [...dislikedItems, item]
      setDislikedItems(newDislikedItems)
      handleUserPatch("dislikes", [...newDislikedItems]);
    }
  }
  // If In Regular Shop Update state and persist changes to user in DB
  else {
    setIsDisliked(true)
    setIsLiked(false)

    // If Already in Dislikes then do nothing, if not update state and persist to user In DB
    if (yourDislikedItems) {
      const newDislikedItems = dislikedItems.map((disliked) => 
      disliked.id === item.id ? {...yourDislikedItems, item} : disliked
      ) 
      setDislikedItems(newDislikedItems)
      handleUserPatch("dislikes", [...newDislikedItems]);
    } else {
      const newDislikedItems = [...dislikedItems, item]
      setDislikedItems(newDislikedItems)
      handleUserPatch("dislikes", [...newDislikedItems]);
    }
  }
  
}
  // Display front or back of Item dependning on current State
  return (
    isBack ? back : front
  )
}
