import React, {useState} from 'react';
import Item from './Item';
import { Container, Col, Row } from 'react-bootstrap';

export default function ItemList({isWindowShop, setIsWindowShop, itemList, cartItems, setCartItems,likedItems, setLikedItems,dislikedItems,setDislikedItems, index, setIndex, currentUser}) {

  const itemCards = itemList.map(item => 
    <Item 
      key={item.id}
      item={item}
      cartItems={cartItems}
      setCartItems={setCartItems}
      likedItems={likedItems}
      setLikedItems={setLikedItems}
      dislikedItems={dislikedItems}
      setDislikedItems={setDislikedItems}
      isWindowShop={isWindowShop}
      index={index}
      setIndex={setIndex}
      currentUser={currentUser}
    />
  )
  
  return (
    <Container>
        {/* <h1>Item List</h1> */}
        <br/>
      <Row class="gx-5">
        {isWindowShop? itemCards[index] : itemCards }
      </Row>
    </Container>
  )
}
