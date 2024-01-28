import React, { useEffect, useState } from "react";
import "./shoppingCart.css";

const Cart = ({ cart, setCart, handleChange }) => {
  const [productPrice, setProductPrice] = useState(0);
  const [shippingCost, setShippingCost] = useState(0);
  const [paymentFee, setPaymentFee] = useState(0);

  const handlePrice = () => {
    let ans = 0;
    cart.forEach((item) => {
      ans += item.amount * item.productPrice;
    });
    setProductPrice(ans);
  };

  const handleRemove = (id) => {
    const arr = cart.filter((item) => item.id !== id);
    setCart(arr);
  };

  const handleShippingOptionChange = (e) => {
    const option = e.target.value;
    // Update verzendkosten op basis van de geselecteerde verzendoptie
    setShippingCost(option === "verzenden" ? 5.99 : 0);
  };

  const handlePaymentOptionChange = (e) => {
    const option = e.target.value;
    // Update betaalkosten op basis van de geselecteerde betaaloptie
    setPaymentFee(option === "paypal" ? 0.01 * productPrice : 0);
  };

  useEffect(() => {
    handlePrice();
  }, [cart]);

  return (
    <div>
      <div className="cart-background"></div>
      <div className="container mt-5 mb-5">
        <h1 className="font-special text-center mb-4">Winkelmandje</h1>

        <div className="row justify-content-center">
          <div className="col-md-10">
            {cart.length === 0 ? (
              <p className="text-center">Het winkelmandje is leeg</p>
            ) : (
              cart.map((item) => (
                <div key={item.id} className="mb-4 border p-3">
                  <div className="row">
                    <div className="col-md-3">
                      <img
                        src={item.imageSrc}
                        alt={item.title}
                        className="img-fluid custom-img"
                      />
                    </div>
                    <div className="col-md-6">
                      <h5>{item.title}</h5>
                      <button
                        className="btn btn-outline-secondary"
                        onClick={() => handleChange(item, +1)}
                      >
                        +
                      </button>
                      <button className="btn btn-light mx-2">
                        {item.amount}
                      </button>
                      <button
                        className="btn btn-outline-secondary"
                        onClick={() => handleChange(item, -1)}
                      >
                        -
                      </button>
                    </div>
                    <div className="col-md-3 text-right">
                      <span>€ {item.productPrice}</span>
                      <button
                        className="btn btn-danger ml-2"
                        onClick={() => handleRemove(item.id)}
                      >
                        Verwijderen
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}

            {cart.length > 0 && (
              <div>
                <div className="text-right">
                  <span className="font-weight-bold">Totaal mandje:</span>
                  <span className="font-weight-bold ml-2">
                    € {productPrice.toFixed(2)}
                  </span>
                </div>
                <hr />
                <div className="row mt-md-5">
                  <div className=" col-md-6 order-2 order-md-1">
                    <form action="">
                      <div className="form-group">
                        <label htmlFor="voornaam">Voornaam:</label>
                        <input
                          type="text"
                          className="form-control"
                          name="voornaam"
                          id="voornaam"
                          required
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="naam">Naam:</label>
                        <input
                          type="text"
                          className="form-control"
                          name="naam"
                          id="naam"
                          required
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="adres">Adres:</label>
                        <input
                          type="text"
                          className="form-control"
                          name="adres"
                          id="adres"
                          required
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="postcode">Postcode:</label>
                        <input
                          type="text"
                          className="form-control"
                          name="postcode"
                          id="postcode"
                          required
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="gemeente">Gemeente:</label>
                        <input
                          type="text"
                          className="form-control"
                          name="gemeente"
                          id="gemeente"
                          required
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="telefoonnummer">Telefoonnummer:</label>
                        <input
                          type="tel"
                          className="form-control"
                          name="telefoonnummer"
                          id="telefoonnummer"
                          required
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="emailadres">Emailadres:</label>
                        <input
                          type="email"
                          className="form-control"
                          name="emailadres"
                          id="emailadres"
                          required
                        />
                      </div>
                      <button type="submit" className="btn btn-info">
                        Afrekenen
                      </button>
                    </form>
                  </div>
                  <div className="col-md-6 order-1 order-md-2">
                    <h4>Verzending:</h4>
                    <div className="form-check">
                      <input
                        type="radio"
                        id="verzenden"
                        name="shippingOption"
                        value="verzenden"
                        className="form-check-input"
                        onChange={handleShippingOptionChange}
                        checked={shippingCost !== 0}
                      />
                      <label htmlFor="verzenden" className="form-check-label">
                        Verzenden (+ € 5.99)
                      </label>
                    </div>

                    <div className="form-check">
                      <input
                        type="radio"
                        id="afhalen"
                        name="shippingOption"
                        value="afhalen"
                        className="form-check-input"
                        onChange={handleShippingOptionChange}
                        checked={shippingCost === 0}
                      />
                      <label htmlFor="afhalen" className="form-check-label">
                        Afhalen in onze winkel
                      </label>
                    </div>

                    <h4 className="mt-5">Betaling:</h4>
                    <div className="form-check">
                      <input
                        type="radio"
                        id="bancontact"
                        name="payOption"
                        value="bancontact"
                        className="form-check-input"
                        onChange={handlePaymentOptionChange}
                      />
                      <label htmlFor="bancontact" className="form-check-label">
                        Bancontact (gratis)
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        type="radio"
                        id="paypal"
                        name="payOption"
                        value="paypal"
                        className="form-check-input"
                        onChange={handlePaymentOptionChange}
                      />
                      <label htmlFor="paypal" className="form-check-label">
                        PayPal (+ 1% totaalbedrag)
                      </label>
                    </div>

                    <div className="form-check">
                      <input
                        type="radio"
                        id="overschrijving"
                        name="payOption"
                        value="overschrijving"
                        className="form-check-input"
                        onChange={handlePaymentOptionChange}
                      />
                      <label
                        htmlFor="overschrijving"
                        className="form-check-label"
                      >
                        Overschrijving (3 dagen verwerktijd)
                      </label>
                    </div>

                    <h4 className="mt-5">Totaalbedrag:</h4>
                    <span className="font-weight-bold ml-2">
                      € {(productPrice + shippingCost + paymentFee).toFixed(2)}
                    </span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
