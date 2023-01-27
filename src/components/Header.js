import React from 'react'
import { NavLink, useNavigate } from "react-router-dom";
import { Nav, Navbar, Container } from 'react-bootstrap';

export default function Header({handleDarkMode, isDarkMode}) {
  
  // Allow for use of useNavigate
  const navigate = useNavigate();

  // Handle Back to shop click -> Navigate to /Shop
  const handleBackToShop = () => {
    navigate("/shop");
}

  return (
    <>
      <Container>
      <Navbar fixed="top" id="custom">
          <Navbar.Brand id="custom" onClick={handleBackToShop}>WindowShopper</Navbar.Brand>
          <Nav className="ms-auto" pullRight>
            <button class="btn btn-dark me-2" id="custom-btn" onClick={handleDarkMode}>{isDarkMode ? "Light Mode" : "Dark Mode"}</button>
            <NavLink to="/shop"><button class="btn btn-dark me-2" id="custom-btn">Shop</button></NavLink>
            <NavLink to='/windowshop'><button class="btn btn-dark me-2" id="custom-btn">Toggle Window Shop</button></NavLink>
            <NavLink to='/addItem'><button class="btn btn-dark me-2" id="custom-btn">List An Item</button></NavLink>
            <NavLink to="/likes"><button class="btn btn-dark me-2" id="custom-btn">Likes/Dislikes</button></NavLink>
            <NavLink to="/cart"><button class="btn btn-dark" id="custom-btn">Cart</button></NavLink>
          </Nav>
      </Navbar>
      </Container>
    </>
  )
}