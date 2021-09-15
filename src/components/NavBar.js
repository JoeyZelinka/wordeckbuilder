import React from 'react'
import { Container, Button, Dropdown } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import '../styles.css';
import tinyLogo from '../images/pngtiny.png'
function NavBar() {

  return (

    <div className="Nav">

      {/* <Navbar bg="dark" variant="dark">
        <Container fluid="md" className="MasterNav">
          <Nav>
            
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
               */}
      <Container className="WoRtools">
      <Dropdown>
  <Dropdown.Toggle variant="success" id="dropdown-basic">
          <img src={tinyLogo} alt='TinyLogo' /> Tools:
  </Dropdown.Toggle>
  <Dropdown.Menu>
        <Container>
          <Link to='/MTGDeckBuilder' >
            <Button variant="link">
              MtG Deckbuilder
            </Button>
          </Link>
        </Container>
       
        <Container>
          <Link to='/PokemonDeckBuilder'>
            <Button variant="link">
              Pokemon Deck Builder
            </Button>
          </Link>
        </Container>
        

        <Container>
          <Link to='/FABDeckBuilder'>
            <Button variant="link">
              Flesh & Blood Deck Builder
            </Button>
          </Link>
        </Container>
        <Container>
          <Link to='/WarhammerCompanion'>
            <Button variant="link">
              Warhammer Companion
            </Button>
          </Link>
        </Container>
        <Container>
          <Link to='/RPGStatRoller'>
            <Button variant="link">
              RPG CharactSTER
            </Button>
          </Link>
        </Container>
        </Dropdown.Menu>
</Dropdown>
      </Container>

  
            
              
            
                
              
            
          {/* </Nav>
        </Container>
      </Navbar> */}
          
      <br />

   
    </div>

  );
}

export default NavBar;