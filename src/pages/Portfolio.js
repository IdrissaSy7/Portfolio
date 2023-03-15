import React from "react";
import Card from "../components/Card";
import Navigation from "../components/Navigation";
import SocialNetwork from "../components/SocialNetwork";

const Portfolio = () => {
  return (
    <div>
      <Navigation />
      <h1 className="title">Mes Projets</h1>
      <SocialNetwork />
      <Card />
    </div>
  );
};

export default Portfolio;
