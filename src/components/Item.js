import React, { useState, useEffect } from 'react';
import { BsFillCartPlusFill, BsFillCartDashFill, BsFillHandThumbsDownFill, BsFillHeartFill, BsHeart } from "react-icons/bs";

export default function Item({item, cartItems, setCartItems, likedItems, setLikedItems,dislikedItems,setDislikedItems, isWindowShop, index, setIndex, currentUser}) {

  const {id, name, price, image, category, description, color} = item;
    
    const [isBack, setIsBack] = useState(false);
    const [displayToolTip, setDisplayToolTip] = useState(false);
    const [isInCart, setInCart] = useState(false);
    const [isLiked, setIsLiked] = useState(false);
    const [isDisliked, setIsDisliked] = useState(false);

  
      useEffect(() => {
        fetch("http://localhost:3000/users")
        .then(res => res.json())
        .then((obj)=> {
         setLikedItems(obj[currentUser.id-1].likes)
         setDislikedItems(obj[currentUser.id-1].dislikes)
         setInCart(obj[currentUser.id-1].inCart)
        })
      }, [])
    
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

    const handleFlip = () => {
      setIsBack(prev => !prev)
    }
    const handleHover = () => {
      setDisplayToolTip(prev => !prev);
    }


    const frontHover = <div>Click To View Description</div>
    const backHover = <div>Click To View Item</div>

    const notInCart = <button onClick={() => onAddToCart(item)}><BsFillCartPlusFill /></button>
    const addMoreToCart = <button onClick={() => onAddToCart(item)}><BsFillCartPlusFill /></button>
    const inCart = <button onClick={() => onRemoveFromCart(item)}><BsFillCartDashFill/></button>

    const filledHeart = <BsFillHeartFill/>;
    const emptyHeart = <BsHeart/>;
    const front = 
      <div id={id} onMouseOver={handleHover} onMouseOut={handleHover}>
          
          <h3>{name}</h3>
          {isInCart ? addMoreToCart : notInCart}
          {isInCart ? inCart : null}
          <img src={image} onClick={handleFlip} alt={description} />
          {displayToolTip? frontHover : null }
          <h4>Price: ${price}</h4>
          <button onClick={() => onAddToLikes(item)}>{isLiked? filledHeart: emptyHeart}</button>
          
          <button onClick={() => onAddToDislikes(item)}><BsFillHandThumbsDownFill/></button>
          
      </div>

  const back = 
    <div id={id} onClick={handleFlip} onMouseOver={handleHover} onMouseOut={handleHover}>
        
        <h3>{name}</h3>
        {isInCart ? addMoreToCart : notInCart}
        {isInCart ? inCart : null}
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
    let newCartItems = [...cartItems, item];
    
    if (isWindowShop === true) {
      setIndex(prev => prev + 1);
      setInCart(true);
      setCartItems(newCartItems);
    }
    else {
      setInCart(true);
        setCartItems(newCartItems);
        setInCart(true);
    }
    handleUserPatch("inCart",newCartItems);
  }
  

  //remove item from cart
  const onRemoveFromCart = (item) => {
      const newCartItems = cartItems.filter((x) => x.id !== item.id)
      setCartItems(newCartItems)
      handleUserPatch("inCart", newCartItems);
      if (cartItems.length <= 1) return setInCart(false);
} 

  //add to likes
  const onAddToLikes = (item) => {
  const dislikedCheck = dislikedItems.find((item) => item.name === name)
    const yourLikedItems = likedItems.find((liked) => liked.id === item.id)
    if (isWindowShop === true) {
      setIndex(prev => prev + 1);
      setIsLiked(true);
      if (dislikedCheck !== undefined){
      const newDislikes = dislikedItems.filter((item) => item.name !== name)
      setDislikedItems(newDislikes)
      handleUserPatch("dislikes", [...newDislikes])}
      if (yourLikedItems) {
        const newLikedItems = likedItems.map((liked) => 
        liked.id === item.id ? {...yourLikedItems, item} : liked
        ) 
        setLikedItems(newLikedItems)
        handleUserPatch("likes", [...newLikedItems]);
      } else {
        const newLikedItems = [...likedItems, item]
        setLikedItems(newLikedItems)
        handleUserPatch("likes", [...newLikedItems]);
      }
    }
    else {
      setIsLiked(true);
      const dislikedCheck = dislikedItems.find((item) => item.name === name)
      if (dislikedCheck !== undefined){
        const newDislikes = dislikedItems.filter((item) => item.name !== name)
        setDislikedItems(newDislikes)
        handleUserPatch("dislikes", [...newDislikes])}
      if (isDisliked) {
        setIsDisliked(false);
      }
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
  const likedCheck = likedItems.find((item) => item.name === name)
  const yourDislikedItems = dislikedItems.find((disliked) => disliked.id === item.id)
  if (isWindowShop === true) {
    setIndex(prev => prev + 1);
    setIsDisliked(true);
    if (likedCheck !== undefined){
      const newLikes = likedItems.filter((item) => item.name !== name)
      setLikedItems(newLikes)
      handleUserPatch("likes", [...newLikes])}
    if (isLiked === true) {
      setIsLiked(false);
    }
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
  else {
    if (likedCheck !== undefined){
      const newLikes = likedItems.filter((item) => item.name !== name)
      setLikedItems(newLikes)
      handleUserPatch("likes", [...newLikes])}
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
  return (
    isBack ? back : front
  )
}
