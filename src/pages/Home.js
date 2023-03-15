import React from "react";
import Navigation from "../components/Navigation";
import SocialNetwork from "../components/SocialNetwork";

const Home = () => {
  return (
    <div>
      <Navigation />
      <SocialNetwork />
      <h1 className="title">Portfolio</h1>
      <div className="home">
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
  );
};

export default Home;
