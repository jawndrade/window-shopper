import React from 'react';
import Header from './Header';
import Item from './Item';

export default function Cart({handleDarkMode, isDarkMode, cartItems, setCartItems, currentUser, likedItems, setLikedItems, dislikedItems, setDislikedItems}) {

  // reduce prices into a single total price 
  const totalPrice = cartItems.reduce((total, item) => item.price + total , 0)

  //Get Count For How Many Of Duplicate In Cart
  const counts = {};
  cartItems.forEach(x => { counts[x.name] = (counts[x.name] || 0) + 1; });
  console.log(counts);

  //Filter Duplicates
  let filteredItems = [];
  cartItems.forEach(item => {
    if (!filteredItems.includes(item)) {
      filteredItems.push(item);
    }
  })

  //Display Filtered Items Along W/ Total Count In Cart Of Item
  const itemsToShow = filteredItems.map((item) => (
  <>
    <div>Total {item.name} in Cart: {counts[item.name]}</div>
    <Item 
      key={item.id}
      item={item}
      cartItems={cartItems}
      setCartItems={setCartItems}
      likedItems={likedItems}
      setLikedItems={setLikedItems}
      dislikedItems={dislikedItems}
      setDislikedItems={setDislikedItems}
      currentUser={currentUser}
    />
  </>
  ))

  return (
    <>
      <Header
        handleDarkMode={handleDarkMode}
        isDarkMode={isDarkMode}
      />
      <div class="container" id="cart-custom-div">
        <h3>Cart Items</h3>
        <h4>Total: ${totalPrice}</h4>
        <br/>
        {itemsToShow}
      </div>
    </>
  )
}
