import React from "react";
import "./contact.css";

const Contact = () => {
  return (
    <div className="container" id="contact">
      <div className="text-center">
        <h1 className="font-special mb-4">Contacteer ons</h1>
      </div>
      <div class="row justify-content-center mb-5">
        <div class="col-md-6">
          <form>
            <div class="form-group">
              <label for="name">Naam:</label>
              <input
                type="text"
                class="form-control"
                id="name"
                name="name"
                required
              />
            </div>

            <div class="form-group">
              <label for="email">E-mail:</label>
              <input
                type="email"
                class="form-control"
                id="email"
                name="email"
                required
              />
            </div>

            <div class="form-group">
              <label for="phone">Telefoon:</label>
              <input type="tel" class="form-control" id="phone" name="phone" />
            </div>

            <div class="form-group">
              <label for="message">Bericht:</label>
              <textarea
                class="form-control"
                id="message"
                name="message"
                rows="4"
                required
              ></textarea>
            </div>

            <button type="submit" class="btn btn-send">
              Verzenden
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
