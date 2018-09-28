import React from "react";
import PropTypes from "prop-types";
import "./styles/Phone.css";

const Phone = ({ onClick, url, text, price }) => (
  <div>
    <div className="card" onClick={onClick}>
      <header className="card-header">
        <p className="card-header-title">{text}</p>
      </header>
      <div className="card-content">
        <div className="content">
          <img src={url} alt="Demo app" />
        </div>
      </div>
      <footer className="card-footer custom-centered">
        <span className="subtitle">
          {price}
          €
        </span>
      </footer>
    </div>
    <br />
  </div>
);

Phone.propTypes = {
  onClick: PropTypes.func.isRequired,
  url: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
};

export default Phone;
