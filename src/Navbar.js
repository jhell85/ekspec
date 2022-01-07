import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";

const MyNavBar = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand className="gunplay-font" href="/home">
          EK Spec
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#">Items</Nav.Link>
            <Nav.Link href="#">Services</Nav.Link>
            <Nav.Link href="#">Portal</Nav.Link>
            <Nav.Link href="#">Contact</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#">Login</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNavBar;
