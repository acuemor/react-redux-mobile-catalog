import React from 'react';
import PropTypes from 'prop-types';
import './styles/PhoneDetail.css';

const PhoneDetail = ({ phoneDetail }) => (
  <div>
    <div className="title">Detalles del producto</div>
    <div className="line" />
    <div className="text">{phoneDetail.text}</div>
    <div className="desc">{phoneDetail.description}</div>
    <div>
      {' '}
      <div className="features-title">Características</div>
      <div className="features">
        Precio:
        <p>{phoneDetail.price}</p>
        {' '}
euros
      </div>
      <div className="features">
        Color:
        <p>{phoneDetail.color}</p>
      </div>
      <div className="features">
        Pantalla:
        <p>{phoneDetail.screen}</p>
      </div>
      <div className="features">
        Batería:
        <p>{phoneDetail.battery}</p>
      </div>
      <div className="features">
        Cámara:
        <p>{phoneDetail.camera}</p>
      </div>
    </div>
  </div>
);

PhoneDetail.propTypes = {
  phoneDetail: PropTypes.object,
};

export default PhoneDetail;
