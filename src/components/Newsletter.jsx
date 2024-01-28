import React from "react";

const Newsletter = () => {
  return (
    <div className="newsletter-background text-center py-4 mt-5 mb-5">
      <div className="container">
        <div className="row justify-content-center align-items-center">
          <div className="col-md-6 mb-3 mb-md-0">
            <form action="submit">
              <input
                type="email"
                name="newsletter"
                id="newsletter-mail"
                placeholder="Meld je aan voor onze nieuwsbrief"
                className="form-control"
                required
              />
            </form>
          </div>
          <div className="col-md-4">
            <button className="btn btn-outline-dark btn-block" type="submit">
              Aanmelden
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
