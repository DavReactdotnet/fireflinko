import React from 'react'
import { Button, Container, Form, FormControl, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { Link } from "react-router-dom"
import site_logo from '../../assets/site_logo.png'
const NavBar = () => {
  return (
    <div>
      <Navbar className='shadow' expand="lg">
        <Container fluid>
          <Navbar.Brand as={Link} to="/"><img src={site_logo} alt='flinko_logo' className='logo' />   </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
            
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
            </Nav>


            <NavDropdown
             
              title="Products"
              menuVariant="light"
              className='navi'
            >
              <NavDropdown.Item as={Link} className="dropper text_drop" to="/">web</NavDropdown.Item>
              <NavDropdown.Item as={Link} className="dropper text_drop" to="/mobile">Mobile</NavDropdown.Item>
              <NavDropdown.Item as={Link} className="dropper text_drop" to="/webservices">Web services</NavDropdown.Item>

            </NavDropdown>

            <Nav.Link as={Link} to="/price" className='navi'>
              Pricing
            </Nav.Link>
            <Nav.Link as={Link} to="/insight" className='navi'>
              Insight
            </Nav.Link>


            <NavDropdown
              title="Resources"
              menuVariant="light"
              className='navi' >
              <NavDropdown.Item as={Link} className="dropper text_drop" to="/document">Documents</NavDropdown.Item>
              <NavDropdown.Item as={Link} className="dropper text_drop" to="/notes">Release Notes</NavDropdown.Item>
            </NavDropdown>

            <Nav.Link as={Link} to="/contact" className='navi'>
              Contact
            </Nav.Link>
            <button as={Link} to="#" className='vt text-center rounded-pill'>
              Start free trail
            </button>

            <Nav.Link as={Link} to="#" className='navi'>
              Sign in
            </Nav.Link>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default NavBar;