import React from "react";
import Navigation from "../components/Navigation";
import SocialNetwork from "../components/SocialNetwork";
import Designer from "../style/img/Designer.png";

const Home = () => {
  return (
    <div>
      <Navigation />
      <SocialNetwork />
      <h1 className="title">Portfolio</h1>
      <div className="home">
        <div>
          <img src={Designer} alt="image de fond pc" />
        </div>
        <div className="content">
          <h2>Idrissa SY</h2>
          <h3>Developpeur web</h3>
          <ul>
            <li className="html">HTML</li>
            <li className="css">CSS</li>
            <li className="sass">SASS</li>
            <li className="js">JS</li>
            <li className="nodejs">NodeJS</li>
            <li className="reactjs">ReactJS</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Home;
