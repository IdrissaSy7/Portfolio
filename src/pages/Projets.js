import React from "react";
import { NavLink, useParams } from "react-router-dom";
import Navigation from "../components/Navigation";
import Slider from "../components/Slider";
import SocialNetwork from "../components/SocialNetwork";
import Projets from "../data/projet.json";

const Projet = () => {
  const { id } = useParams();
  const projet = Projets.find((p) => p.id === parseInt(id));
  {
    /* Crée un id et une classe pour chaque element du tableau langue */
  }
  const languesAvecId = projet.languages.map((langue, index) => ({
    id: `langue-${index}`,
    langue: langue,
  }));

  return (
    <div>
      <Navigation />
      <h1 className="title">{projet.title}</h1>
      <SocialNetwork />
      <div className="projetCentre">
        <div id={projet.id}>
          <Slider />
          <p id="date">{projet.date}</p>
          <p id="lien">
            {/* Ternaire, affiche le lien seulement si il existe */}
            {projet.link ? (
              <a href={projet.link} target="_blank" rel="noopener noreferrer">
                Lien du site
              </a>
            ) : null}
            <a
              href={projet.linkgithub}
              target="_blank"
              rel="noopener noreferrer"
            >
              Lien du code
            </a>
          </p>

          {/* Map chaque element du tableau et l'affiche en minuscule */}
          <div className="langue">
            {languesAvecId.map((langue) => (
              <p
                id={langue.id}
                className={langue.langue.toLowerCase()}
                key={langue.id}
              >
                {langue.langue}
              </p>
            ))}
          </div>
          <NavLink to="/portfolio">
            <p>
              <i className="fas fa-book"></i> Retourner aux projets
            </p>
          </NavLink>
          <div className="projetleftright">
            {/* Ternaire */}
            {projet.left ? (
              <NavLink to={`/projets/${projet.left}`}>
                <p>
                  <span>&#10094;</span> Projet précedent
                </p>
              </NavLink>
            ) : null}
            {/* Ternaire */}
            {projet.right ? (
              <NavLink to={`/projets/${projet.right}`}>
                <p>
                  Projet suivant <span>&#10095;</span>
                </p>
              </NavLink>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projet;
