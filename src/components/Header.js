import React, {useState} from 'react'
import { NavLink } from "react-router-dom";

export default function Header() {
  const [backToShop , setBackToShop] = useState()

const handleBackToShop = () => {
  console.log("Go Back To The Shop!")
}
  return (
    <>
        <h1 onClick={handleBackToShop}>WindowShopper</h1>
        <button>Toggle Dark Mode</button>
        <NavLink to="/shop"><button>Shop</button></NavLink>
        <NavLink to='/addItem'><button>List An Item</button></NavLink>
        <NavLink to="/likes"><button>Likes/Dislikes</button></NavLink>
        <NavLink to="/cart"><button>Cart</button></NavLink>
    </>
  )
}