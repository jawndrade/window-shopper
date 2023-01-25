import React from 'react'
import { NavLink, useNavigate } from "react-router-dom";
import { Nav, Navbar, Container, Button } from 'react-bootstrap';

export default function Header() {

  const navigate = useNavigate();
const handleBackToShop = () => {
  navigate("/shop");
}
  return (
    <>
      <Navbar bg="light" variant="light" expand="sm">
        <Container>
          <Navbar.Brand class="navbar-brand mb-0 h1" onClick={handleBackToShop}>WindowShopper</Navbar.Brand>
          <Nav className="ms-auto">
            <Button class="btn btn-light">Toggle Dark Mode</Button>
            <NavLink to="/shop"><Button class="btn btn-light">Shop</Button></NavLink>
            <NavLink to='/addItem'><Button class="btn btn-light">List An Item</Button></NavLink>
            <NavLink to="/likes"><Button class="btn btn-light">Likes/Dislikes</Button></NavLink>
            <NavLink to="/cart"><Button class="btn btn-light">Cart</Button></NavLink>
          </Nav>
        </Container>
      </Navbar>
    </>
  )
}