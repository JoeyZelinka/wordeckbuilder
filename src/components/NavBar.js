import React from 'react'
import { Container, Nav, Navbar, NavDropdown, Button, Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import '/Users/joeyz/Desktop/w3B d3V/Dc C0d3/DCProjects/wordeckbuilder/src/styles.css';
function NavBar() {

  return (

    <div className="Nav">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">About Us & Contact</Nav.Link>
            <Nav.Link href="#pricing">Gaming Blogs</Nav.Link>
            <NavDropdown title="Realms" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Magic: the Gathering</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Warhammer 40,000</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Role Playing Games</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">Pokemon</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.5">Flesh and Blood</NavDropdown.Item>
            </NavDropdown>
            <Form.Group className="mb-3" controlId="search">
              <Form.Control type="search" placeholder="Search" />
            </Form.Group>
            <Button variant="secondary" type="submit">Submit</Button>
          </Nav>
        </Container>
      </Navbar>
      <br />

      <Container className="DeckBuilderNav">
        <Container>
          <Link to='/MTGDeckBuilder' >
            <Button variant="primary">
              MtG Deck Builder
            </Button>
          </Link>
        </Container>
        <Container>
          <Link to='/PokemonDeckBuilder'>
            <Button variant="primary">
              Pokemon Deck Builder
            </Button>
          </Link>
        </Container>
        <Container>
          <Link to='/FABDeckBuilder'>
            <Button variant="primary">
              Flesh & Blood Deck Builder
            </Button>
          </Link>
        </Container>
      </Container>
    </div>

  );
}

export default NavBar;