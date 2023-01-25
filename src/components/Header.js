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
          <Navbar.Brand class="navbar-brand mb-0 h1" onClick={handleBackToShop}>WindowShopper</Navbar.Brand>
          <Nav className="me-auto">
            {/* <h1 onClick={handleBackToShop}>WindowShopper</h1> */}
            <button class="btn btn-light">Toggle Dark Mode</button>
            <NavLink to="/shop"><button class="btn btn-light">Shop</button></NavLink>
            <NavLink to='/addItem'><button class="btn btn-light">List An Item</button></NavLink>
            <NavLink to="/likes"><button class="btn btn-light">Likes/Dislikes</button></NavLink>
            <NavLink to="/cart"><button class="btn btn-light">Cart</button></NavLink>
          </Nav>
        </Container>
      </Navbar>
    </>
  )
}