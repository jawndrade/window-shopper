import React from 'react'
import { NavLink, useNavigate } from "react-router-dom";
import { Nav, Navbar, Container, Button } from 'react-bootstrap';

export default function Header({handleDarkMode, isDarkMode}) {

  const navigate = useNavigate();
  const handleBackToShop = () => {
    navigate("/shop");
}

  return (
    <>
      <Navbar class="sticky-top" bg="light" variant="light" expand="sm">
        <Container>
          <Navbar.Brand onClick={handleBackToShop}>WindowShopper</Navbar.Brand>
          <Nav className="ms-auto" pullRight>
            <button class="btn btn-dark me-2" onClick={handleDarkMode}>{isDarkMode ? "Light Mode" : "Dark Mode"}</button>
            <NavLink to="/shop"><button class="btn btn-dark me-2">Shop</button></NavLink>
            <NavLink to='/addItem'><button class="btn btn-dark me-2">List An Item</button></NavLink>
            <NavLink to="/likes"><button class="btn btn-dark me-2">Likes/Dislikes</button></NavLink>
            <NavLink to="/cart"><button class="btn btn-dark">Cart</button></NavLink>
          </Nav>
        </Container>
      </Navbar>
    </>
  )
}