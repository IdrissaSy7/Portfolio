import React from "react";
import { Link } from "react-router-dom";
import Projets from "../data/projet.json";

const Card = () => {
  return (
    <div className="cardContainer">
      {Projets.map((projet) => (
        <Link key={projet.id} to={`/projets/${projet.id}`}>
          <div className="card">
            <h2>{projet.title}</h2>
            <img src={projet.img} alt={projet.title} />
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Card;
