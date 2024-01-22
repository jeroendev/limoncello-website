import React from "react";
import "./about.css";

const About = () => {
  return (
    <div className="container mt-5" id="about">
      <h3 className=" text-center mb-4 about-title">Over Ons</h3>
      <div className="row justify-content-center align-items-center">
        <div className="col-md-6 text-center">
          <h2 className="about-title">Welkom bij Zesty Spirits</h2>
          <p>
            Zesty Spirits is een gepassioneerde producent van hoogwaardige
            likeuren. Onze missie is om unieke en verfrissende drankjes te
            creëren die de zintuigen prikkelen en een blijvende indruk
            achterlaten.
          </p>
          <p>
            Bij Zesty Spirits geloven we in het samenkomen van vakmanschap en
            innovatie. Onze likeuren worden met zorg en toewijding gemaakt,
            waarbij we traditionele methoden combineren met creatieve
            smaakcombinaties.
          </p>
        </div>
        <div className="col-md-6">
          <img
            src="../img/team.jpg"
            alt="Zesty Spirits Team"
            className=" img-fluid rounded-circle"
          />
        </div>
      </div>
      <div className="row mt-4">
        <div className="col">
          <h3 className="about-title">Onze Waarden</h3>
          <ul>
            <li>
              <strong>Passie:</strong> We zijn gedreven door een diepe liefde
              voor het ambacht van likeurproductie.
            </li>
            <li>
              <strong>Kwaliteit:</strong> We streven naar uitmuntendheid in elk
              aspect van ons productieproces.
            </li>
            <li>
              <strong>Innovatie:</strong> We omarmen creativiteit en streven
              ernaar om vernieuwende smaken te introduceren.
            </li>
            <li>
              <strong>Klantgerichtheid:</strong> Onze klanten staan centraal, en
              we streven ernaar om hen te verrassen en tevreden te stellen.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
