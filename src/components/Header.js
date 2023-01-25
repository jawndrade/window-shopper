import React, {useState} from 'react';
import { NavLink } from "react-router-dom";
import { Nav, Navbar, Container } from 'react-bootstrap';


export default function Header() {
  const [backToShop , setBackToShop] = useState()

const handleBackToShop = () => {
  console.log("Go Back To The Shop!")
}
  return (
    <>
      <Navbar bg="light" variant="light" expand="lg">
        <Container>
          <Navbar.Brand onClick={handleBackToShop}>WindowShopper</Navbar.Brand>
          <Nav className="me-auto">
            {/* <h1 onClick={handleBackToShop}>WindowShopper</h1> */}
            <button>Toggle Dark Mode</button>
            <NavLink to="/shop"><button>Shop</button></NavLink>
            <NavLink to='/addItem'><button>List An Item</button></NavLink>
            <NavLink to="/likes"><button>Likes/Dislikes</button></NavLink>
            <NavLink to="/cart"><button>Cart</button></NavLink>
          </Nav>
        </Container>
      </Navbar>
    </>
  )
}