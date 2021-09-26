import React from 'react'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'

function Navv() {
    return (
        <div>
        <Navbar bg="dark" className="bg-transparent Navv">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto h2 text-center ">
              <Nav.Link href="home" className="h2 col-md-2">Home</Nav.Link>
              <Nav.Link href="intro" className="h2 col-md-2 ">Introduction</Nav.Link>
              <Nav.Link href="skills" className="h2 col-md-2 ">Skills</Nav.Link>
              <Nav.Link className="h2 col-md-4" style={{color:"black"}}>DevelopHer's NoteBook</Nav.Link>
              <Nav.Link href="projects" className="h2 col-md-2 ">Projects</Nav.Link>
              <Nav.Link href="profile" className="h2 col-md-2 ">Profiles</Nav.Link>
              <Nav.Link href="contact" className="h2 col-md-2 ">Contact Me</Nav.Link>
            </Nav>
          </Navbar.Collapse>
      </Navbar>
        </div>
    )
}

export default Navv

