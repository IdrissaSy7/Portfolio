import React from "react";
import CV from "../data/CV.pdf";

const SocialNetwork = () => {
  return (
    <div className="social-network">
      <ul className="content">
        <a
          href={CV}
          target={"_blank"}
          rel="noopener noreferrer"
          className="hover"
        >
          <li>
            <p>CV</p>
          </li>
        </a>
        <a
          href="https://github.com/IdrissaSy7"
          target={"_blank"}
          rel="noopener noreferrer"
          className="hover"
        >
          <li>
            <i className="fa-brands fa-github"></i>
          </li>
        </a>
      </ul>
    </div>
  );
};

export default SocialNetwork;
