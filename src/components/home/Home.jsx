import React from "react";
import "./home.css";

const Home = () => {
  return (
    <div>
      <div className="home-image"></div>
      <div className="container text-center pt-5 pb-5">
        <div>
          <img src="../img/zesty-logo.jpeg" alt="" className="home-logo" />
        </div>
        <h1 className="title-font">Zesty Spirits</h1>
        <h3 className="subtitle-font mt-3 mb-3">Ambachtelijke likeuren</h3>
        <p>
          Ontdek de verfrissende wereld van Zesty Spirits, waar ambacht en smaak
          samenkomen in onze likeuren. Onze meesterdistillateurs hebben met
          passie en vakmanschap een unieke selectie likeuren gecreëerd die de
          zintuigen prikkelen.
        </p>
        <p>
          Laat je betoveren door de sprankelende aroma's en de levendige smaken
          van onze likeuren. Of je nu houdt van een subtiele citrustwist in je
          cocktail of gewoon puur wilt genieten, Zesty Spirits biedt een
          ongeëvenaarde ervaring voor elke liefhebber van verfijnde dranken.
        </p>
        <p>
          Kies voor kwaliteit, kies voor ambacht. Zesty Spirits - waar elke slok
          een avontuur is in verfijning.
        </p>
      </div>
    </div>
  );
};

export default Home;
