import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-bottles"></div>
      <div className="container">
        <div className="row pt-3 justify-content-center align-items-center text-center">
          <div className="col-md-4 text-dark order-3 order-md-1">
            <h4>Info</h4>
            <a href="/privacypolicy" className="text-dark">
              Privacy Policy
            </a>
            <br />
            <a href="/voorwaarden" className="text-dark">
              Algemene voorwaarden
            </a>
            <br />
            <a href="/contact" className="text-dark">
              Contacteer ons
            </a>
          </div>

          <div className="col-md-4 order-1 order-md-2">
            <img
              src="../img/zesty-logo.jpeg"
              alt="Zesty logo"
              className="footer-image"
            />
            <h3 className="footer-logo-text">Zesty Spirits</h3>
          </div>

          <div className="col-md-4 order-2 order-md-3">
            <p className="text-dark">
              <a href="mailto:jeroen.devis61@gmail.com" className="text-dark">
                info@zestyspirits.be
              </a>
              <br />
              <a href="tel:+32123456789" className="text-dark">
                +32 123 45 67 89
              </a>
              <br />
              BTW: BE0832 123 123
            </p>
          </div>
        </div>
        <div className=" text-center text-dark mt-3 pb-1">
          <p>
            &copy; {new Date().getFullYear()} Zesty Spirits. Alle rechten
            voorbehouden. <br />
            Website gemaakt door J-DEV
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
