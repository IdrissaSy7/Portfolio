import React, { useState } from "react";
import { Link } from "react-router-dom";
import Projets from "../data/projet.json";

const Card = () => {
  const [selectedFilter, setSelectedFilter] = useState("ALL");

  const filteredProjects = Projets.filter((project) => {
    if (selectedFilter === "ALL") {
      return project.languages;
    } else {
      return project.languages.includes(selectedFilter);
    }
  });

  return (
    <div className="cardContainer">
      <div className="filters">
        <h2>Filtres</h2>
        <ul>
          {selectedFilter != "ALL" && (
            <li className="annuler" onClick={() => setSelectedFilter("ALL")}>
              Annuler
            </li>
          )}
          <li
            className={selectedFilter === "HTML" ? "html active" : "html"}
            onClick={() => setSelectedFilter("HTML")}
          >
            HTML
          </li>
          <li
            className={selectedFilter === "CSS" ? "css active" : "css"}
            onClick={() => setSelectedFilter("CSS")}
          >
            CSS
          </li>
          <li
            className={selectedFilter === "SASS" ? "sass active" : "sass"}
            onClick={() => setSelectedFilter("SASS")}
          >
            SASS
          </li>
          <li
            className={selectedFilter === "JS" ? "js active" : "js"}
            onClick={() => setSelectedFilter("JS")}
          >
            JS
          </li>
          <li
            className={selectedFilter === "NodeJS" ? "nodejs active" : "nodejs"}
            onClick={() => setSelectedFilter("NodeJS")}
          >
            NodeJS
          </li>
          <li
            className={
              selectedFilter === "ReactJS" ? "reactjs active" : "reactjs"
            }
            onClick={() => setSelectedFilter("ReactJS")}
          >
            ReactJS
          </li>
        </ul>
      </div>
      {filteredProjects.map((projet) => (
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
