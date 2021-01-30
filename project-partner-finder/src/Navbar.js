import React from "react";
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function NavbarComponent() {
  return (
    // <Navbar bg="light" expand="s">
    //   <Navbar.Brand as={Link} to="/">
    //     Home
    //   </Navbar.Brand>
    //   <Nav>
    //     <Nav.Link as={Link} to="/user">
    //       Profile
    //     </Nav.Link>
    //   </Nav>
    // </Navbar>
    <>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand as={Link} to="/">
          Logo
        </Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link to="/">Home</Nav.Link>
          <Nav.Link to="/">Features</Nav.Link>
          <Nav.Link to="/">Pricing</Nav.Link>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-info">Search</Button>
        </Form>
        <Nav.Link as={Link} to="/user">
          Profile
        </Nav.Link>
      </Navbar>
    </>
  );
}
