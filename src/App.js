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

function App() {

  //State 
  const [itemList, setItemList] = useState([])
  const [isDarkMode, setDarkMode] = useState(false);
  const [currentUser, setCurrentUser] = useState({});

  // Fetch Database of Items and store in State
  useEffect(() => {
  fetch("http://localhost:3000/items")
    .then(r => r.json())
    .then(data => setItemList(data))
  },[])

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
          element={<SignUp />}
        />
        <Route 
          path="/shop" 
          element={<Shop itemList={itemList}/>}
        />
        <Route
          path="/likes"
          element={<Likes/>}
        />
        <Route 
          path="/cart"
          element={<Cart/>}
        />
        <Route
          path="/addItem"
          element={<AddItem/>}
        />
        <Route
          path="/windowshop"
          element={<WindowShop/>}
        />
      </Routes>
  );
}

export default App;
