import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


function NavBar() {
    return (
      <Navbar fluid fixed="top" bg="light" expand="lg">
      <Container>
          <Navbar.Brand href="#home">Fruinwalk</Navbar.Brand>
          </Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Container>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link href="#reviews">Reviews</Nav.Link>
              <Nav.Link href="#forum">Forum</Nav.Link>
              <Nav.Link href="#myclasses">My Classes</Nav.Link>
              <NavDropdown title="My Profile" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Edit My Profile</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Sign Out</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
          </Container>
      </Navbar>
    );
}

export default NavBar;