import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import { Link } from "react-router-dom";

const NavbarLimo = ({ size }) => {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <div>
      <div className="navbar-info navbar-lemon-yellow text-center">
        <div className="row navbar-row">
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
            <Navbar.Brand
              onClick={scrollToTop}
              style={{ cursor: "pointer" }}
              href="/"
              className="navbar-font"
            >
              Zesty Spirits
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className=" ml-auto">
                <ScrollLink
                  to="products"
                  spy={true}
                  smooth={true}
                  offset={-10} // Optioneel: aanpassen aan de hoogte van je navbar
                  duration={1000}
                  style={{ cursor: "pointer" }}
                  className="nav-link navbar-custom-link"
                >
                  Producten
                </ScrollLink>
                <ScrollLink
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={-50} // Optioneel: aanpassen aan de hoogte van je navbar
                  duration={1000}
                  style={{ cursor: "pointer" }}
                  className="nav-link navbar-custom-link"
                >
                  Over Ons
                </ScrollLink>
                <ScrollLink
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={-50} // Optioneel: aanpassen aan de hoogte van je navbar
                  duration={1000}
                  style={{ cursor: "pointer" }}
                  className="nav-link navbar-custom-link"
                >
                  Contact
                </ScrollLink>
                <Link to="/cart" className="nav-link navbar-custom-link">
                  <i class="fa-solid fa-cart-shopping"></i> {size}
                </Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </div>
  );
};

export default NavbarLimo;
