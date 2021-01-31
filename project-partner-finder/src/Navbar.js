import React from "react";
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function NavbarComponent() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand>LastHour</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link as={Link} to="/">
            Home
          </Nav.Link>
          <Nav.Link as={Link} to="/browse">
            Browse
          </Nav.Link>
          <Nav.Link as={Link} to="/projects">
            Projects
          </Nav.Link>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-info">Search</Button>
        </Form>
        <Nav>
          <Nav.Link as={Link} to="/user">
            Profile
          </Nav.Link>
        </Nav>
      </Navbar>
    </>
  );
}
