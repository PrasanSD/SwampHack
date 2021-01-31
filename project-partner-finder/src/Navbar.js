import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function NavbarComponent() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand as={Link} to="/">
          LastHour
        </Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link to="/">My Projects</Nav.Link>
          <Nav.Link to="/">Browse Projects</Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link as={Link} to="/user">
            Profile
          </Nav.Link>
        </Nav>
      </Navbar>
    </>
  );
}
