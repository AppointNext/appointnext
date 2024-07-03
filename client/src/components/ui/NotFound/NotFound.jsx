import React from "react";
import nurse from "./images/nurse.png";
import "./NotFound.css";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="not-found-container">
      <div className="image-container">
        <img src={nurse} alt="404" className="not-found-image" />
      </div>
      <div className="text-container">
        <h1 className="not-found-title">404 Sorry!</h1>
        <p className="not-found-description">
          Nobody is allowed in the emergency room
        </p>
        <Link to="/" className="back-home-button">
          You can go now!
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
