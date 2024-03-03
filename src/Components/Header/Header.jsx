import React from 'react'
import { Navbar,Container,NavDropdown ,Nav, Button } from 'react-bootstrap'
import './Header.css'
function Header() {
  return (
    <div className='nav-contain'>
         <Navbar collapseOnSelect expand="md" fixed="top"  className="bg-body-tertiary">
      <Container>
        

        
        <Navbar.Brand className='logo' >FASHION</Navbar.Brand>
    
        
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            
          <Nav className="ms-auto">
            <Nav.Link className='tab'  >CATALOGUE</Nav.Link>
            <Nav.Link className='tab'  >FASHION</Nav.Link>
            <Nav.Link className='tab'  >FAVAURATE</Nav.Link>
            <Nav.Link className='tab'  >LIFESTYLE</Nav.Link>
            <Nav.Link className='tab'  ><Button>SIGNUP</Button></Nav.Link>

            
          </Nav>
          
        </Navbar.Collapse>
      
        </Container>
    </Navbar>
    </div>
  )
}

export default Header