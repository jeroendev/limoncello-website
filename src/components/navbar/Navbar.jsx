import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./navbar.css";

const NavbarLimo = () => {
  return (
    <div>
      <div className="navbar__info pt-2 pb-2 lemon-yellow text-center">
        <div className="row">
          <div className=" col-md-6">
            Gratis verzending vanaf €75 binnen België!
          </div>
          <div className=" col-md-6">
            Voor 16u00 besteld zelfde werkdag verzonden!
          </div>
        </div>
      </div>
      <div>
        <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
          <Container>
            <Navbar.Brand href="/">Zesty Spirits</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="ml-auto">
                <Nav.Link href="/products" className="custom-link">
                  Producten
                </Nav.Link>
                <Nav.Link href="/about" className="custom-link">
                  Over Ons
                </Nav.Link>
                <Nav.Link href="/contact" className="custom-link">
                  Contact
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </div>
  );
};

export default NavbarLimo;
