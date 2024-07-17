import React from 'react';
import { Navbar, Nav, NavDropdown, Button, Container } from '../../../node_modules/react-bootstrap';

const NavbarMain = () => {
    return (
        <div>
              <section>
          <Navbar bg="light" expand="lg">
            <Container className="navbar-co">
              <Navbar.Brand href="/" className="navlogo">
                <span className="">YourLogo</span> {/* Adjust margin as needed */}
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav" className="">
                <Nav className="">
                  <NavDropdown title="Solutions" id="solutions-dropdown">
                    <NavDropdown.Item href="#action/3.1">Solution 1</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Solution 2</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Solution 3</NavDropdown.Item>
                  </NavDropdown>
                  <NavDropdown title="Services" id="services-dropdown">
                    <NavDropdown.Item href="#action/4.1">Service 1</NavDropdown.Item>
                    <NavDropdown.Item href="#action/4.2">Service 2</NavDropdown.Item>
                    <NavDropdown.Item href="#action/4.3">Service 3</NavDropdown.Item>
                  </NavDropdown>
                  <NavDropdown title="Partners" id="partners-dropdown">
                    <NavDropdown.Item href="#action/5.1">Partner 1</NavDropdown.Item>
                    <NavDropdown.Item href="#action/5.2">Partner 2</NavDropdown.Item>
                    <NavDropdown.Item href="#action/5.3">Partner 3</NavDropdown.Item>
                  </NavDropdown>
                  <NavDropdown title="About" id="about-dropdown">
                    <NavDropdown.Item href="#action/6.1">About Us</NavDropdown.Item>
                    <NavDropdown.Item href="#action/6.2">Our Team</NavDropdown.Item>
                    <NavDropdown.Item href="#action/6.3">Careers</NavDropdown.Item>
                  </NavDropdown>
                  <Nav.Link href="/pricing">Pricing</Nav.Link>
                  <Button variant="outline-primary" href="/contact">Contact Us</Button>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </section>
        </div>
    );
}

export default NavbarMain;
