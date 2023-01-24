import React from 'react';
import Header from './Header';
import Item from './Item';

export default function Cart({cartItems, setCartItems, onAdd, onRemove, currentUser}) {
  // const totalPrice = cartItems.reduce((total, item) => total + item.amount * item.price, 0)

  const itemsToShow = currentUser.inCart.map((item) => <Item 
      key={item.id}
      item={item}
      cartItems={cartItems}
      setCartItems={setCartItems}
  />)

  return (
    <>
        <Header/>
        <h2>Cart Items</h2>
        {itemsToShow}
          </>
  )
}
