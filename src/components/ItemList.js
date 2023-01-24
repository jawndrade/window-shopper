import React from 'react';
import Item from './Item';
import { Container, Col, Row } from 'react-bootstrap';

export default function ItemList({itemList, cartItems, setCartItems,likedItems, setLikedItems,dislikedItems,setDislikedItems}) {

  const itemCards = 
  itemList.map(item => 
    <Item 
      key={item.id}
      item={item}
      cartItems={cartItems}
      setCartItems={setCartItems}
      likedItems={likedItems}
      setLikedItems={setLikedItems}
      dislikedItems={dislikedItems}
      setDislikedItems={setDislikedItems}>
    </Item>
  )

    //DONE: Render All Items in STORE.JSON
  return (
    <Container>
        <Row>
          <h1>Item List</h1>
          {itemCards}
        </Row>
    </Container>
  )
}
