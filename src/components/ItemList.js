import React, {useState} from 'react';
import Item from './Item';
import { Container, Col, Row } from 'react-bootstrap';

export default function ItemList({isWindowShop, setIsWindowShop, itemList, cartItems, setCartItems,likedItems, setLikedItems,dislikedItems,setDislikedItems, index, setIndex, currentUser}) {

  // For Each Item in itemList create an Item Component
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
  //Display Items -> If In windowShop mode Display by Index, If in Shop display All
  return (
    // <br/>
    <div class="row row-cols-3 g-3" id="item-list-div">
        {/* <h1>Item List</h1> */}
        <br/>
      {/* <Row class="gx-5"> */}
          {/* <Col> */}
          {isWindowShop? itemCards[index] : itemCards }
          {/* </Col> */}
      {/* </Row> */}
    </div>
  )
}
