import React from "react";
import { NavLink } from "react-router-dom";

const Error = () => {
  return (
    <div className="error">
      <div className="error-content">
        <h2>404</h2>
        <h3>La page que vous recherchez semble introuvable</h3>
        <NavLink to="/">
          <p>
            <i className="fas fa-home"></i> Retourner à l'accueil
          </p>
        </NavLink>
      </div>
    </div>
  );
};

export default Error;
