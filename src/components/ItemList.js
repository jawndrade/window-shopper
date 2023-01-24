import React from 'react';
import Item from './Item';
import { Col, Row } from 'react-bootstrap';

export default function ItemList({itemList, cartItems, setCartItems,likedItems, setLikedItems,dislikedItems,setDislikedItems}) {

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
    />
  )

    //TODO: Render All Items in STORE.JSON
  return (
    <div>
        <h1>Item List</h1>
        <Row xs={1} md={2} className="g-4">
          {Array.from({ length: 4 }).map((_, idx) => (
            <Col>
            {itemCards}
            </Col>
        ))} 
        </Row>
    </div>
  )
}
