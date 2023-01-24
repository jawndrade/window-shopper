import './App.css';
import { useState, useEffect } from 'react';
import { Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Shop from "./components/Shop";
import Likes from "./components/Likes";
import Cart from "./components/Cart";
import AddItem from "./components/AddItem";
import WindowShop from './components/WindowShop';
// import Header from './components/Header';

function App() {

  //State 
  const [itemList, setItemList] = useState([])
  const [cartItems, setCartItems] = useState([])
  const [likedItems, setLikedItems] = useState([])
  const [dislikedItems,setDislikedItems] =useState([])
  const [isDarkMode, setDarkMode] = useState(false);
  const [currentUser, setCurrentUser] = useState({});

  // Fetch Database of Items and store in State
  useEffect(() => {
  fetch("http://localhost:3000/items")
    .then(r => r.json())
    .then(data => setItemList(data))
  },[])

 //add new item to list
 const handleAddItem = (newItem) => {
  setItemList([...itemList, newItem])
}

  //Dark Mode
  function handleDarkMode() {
    setDarkMode(!isDarkMode);
  }

  return (
      <Routes>
        <Route 
          path="/" 
          element={<Login setCurrentUser={setCurrentUser} />}
        />
        <Route 
          path="/signup" 
          element={<SignUp setCurrentUser={setCurrentUser} />}
        />
        <Route 
          path="/shop" 
          element={(
          <Shop 
              itemList={itemList} 
              cartItems={cartItems} 
              setCartItems={setCartItems}
              likedItems={likedItems}
              setLikedItems={setLikedItems}
              dislikedItems={dislikedItems} 
              setDislikedItems={setDislikedItems} />
              )}
        />
        <Route
          path="/likes"
          element={<Likes likedItems={likedItems} 
          setLikedItems={setLikedItems} 
          dislikedItems={dislikedItems} 
          setDislikedItems={setDislikedItems}/>}
        />
        <Route 
          path="/cart"
          element={<Cart cartItems={cartItems} setCartItems={setCartItems}/>}
        />
        <Route
          path="/addItem"
          element={<AddItem handleAddItem={handleAddItem}/>}
        />
        <Route
          path="/windowshop"
          element={<WindowShop/>}
        />
      </Routes>
  );
}

export default App;
