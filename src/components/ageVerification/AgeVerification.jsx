import React, { useState } from "react";

const AgeVerification = () => {
  const [showCookieNotification, setShowCookieNotification] = useState(false);

  useEffect(() => {
    // Fictieve leeftijdscontrole, aanpassen aan de werkelijke vereisten
    // In dit voorbeeld wordt aangenomen dat de gebruiker oud genoeg is bij het laden van de pagina
    handleAgeVerification();
  }, []);

  const handleAgeVerification = () => {
    // Hier kun je de code toevoegen om de cookie op te slaan
    // In dit voorbeeld wordt een eenvoudige JavaScript-cookie gebruikt
    document.cookie =
      "acceptedCookies=true; expires=Fri, 31 Dec 9999 23:59:59 GMT";

    // Laat de melding zien nadat de gebruiker cookies heeft geaccepteerd
    setShowCookieNotification(true);
  };

  const acceptCookies = () => {
    // Hier kun je extra logica toevoegen als dat nodig is bij het accepteren van cookies

    // Verberg de melding nadat de gebruiker cookies heeft geaccepteerd
    setShowCookieNotification(false);
  };

  return (
    <div>
      {showCookieNotification && (
        <div id="cookie-notification">
          <p>
            We gebruiken cookies om je de beste ervaring te bieden. Door verder
            te gaan, ga je akkoord met ons gebruik van cookies.
          </p>
          <button onClick={acceptCookies}>Cookies accepteren</button>
        </div>
      )}
    </div>
  );
};

export default AgeVerification;
