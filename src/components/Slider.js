import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Projets from "../data/projet.json";
import { useParams } from "react-router-dom";

const Slider = () => {
  const { id } = useParams();
  const projet = Projets.find((p) => p.id === parseInt(id));

  return (
    <div>
      <Carousel autoPlay interval={4000} infiniteLoop={true} showStatus={false}>
        {projet.pictures.map((picture, index) => (
          <div key={index}>
            <img src={picture} alt={projet.title} />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Slider;
