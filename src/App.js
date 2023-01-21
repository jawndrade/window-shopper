import './App.css';
import { useState } from 'react';
import { Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Shop from "./components/Shop";
import Likes from "./components/Likes";
import Cart from "./components/Cart";
import ListItem from "./components/ListItem";
import WindowShop from './components/WindowShop';

function App() {

  const [isDarkMode, setDarkMode] = useState(false);

  function handleDarkMode() {
    setDarkMode(!isDarkMode);
  }

  return (
      <Routes>
        <Route 
          path="/" 
          element={<Login/>}
        />
        <Route 
          path="/signup" 
          element={<SignUp />}
        />
        <Route 
          path="/shop" 
          element={<Shop/>}
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
          path="/listItem"
          element={<ListItem/>}
        />
        <Route
          path="/windowshop"
          element={<WindowShop/>}
        />
      </Routes>
  );
}

export default App;
